import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { UQMCommSourceDataLexer } from './commsrc/UQMCommSourceDataLexer';
import { UQMCommSourceDataListener } from './commsrc/UQMCommSourceDataListener';
import { AnimationContext, LocdataContext, UQMCommSourceDataParser } from './commsrc/UQMCommSourceDataParser';
import { AnimationType, CAnim } from './interfaces';

const ONE_SECOND = 1;

/**
 * @param input file contents to parse
 */
export function parseCommSrc(input: string) {
  function getTree(input: string) {
    let inputStream = new ANTLRInputStream(input);
    let lexer = new UQMCommSourceDataLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new UQMCommSourceDataParser(tokenStream);
    return parser.sourcedata();
  }

  class Listener implements UQMCommSourceDataListener {
    public ambient_animations: Array<CAnim> = [];
    public talk: CAnim = null;
    public transition: CAnim = null

    enterLocdata(context: LocdataContext) {
      this.ambient_animations = context._alien_ambient_animations.map(a => this.getAnim(a));
      this.talk = this.getAnim(context._alien_talk_desc);
      this.transition = this.getAnim(context._alien_transition_desc);
    }

    getAnim(context: AnimationContext) {
      const getSmth = (tokens: Token[]) => {
        return eval(tokens.map(x => x.text.trim()).join(' ')); // !!!! eval!!!! 
      }
      const animflags = context._animFlags.map(x => x.text.trim());
      let animType: AnimationType = AnimationType.BACKGROUND;
      let waitTalking = false;
      if (animflags.includes('YOYO_ANIM')) {
        animType = AnimationType.YO_YO;
      }
      if (animflags.includes('CIRCULAR_ANIM')) {
        animType = AnimationType.CIRCULAR
      }
      if (animflags.includes('RANDOM_ANIM')) {
        animType = AnimationType.RANDOM
      }
      if (animflags.includes('WAIT_TALKING')) {
        waitTalking = true;
      }
      if (animflags.includes('BACKGROUND_ANIM')) {
        animType = AnimationType.BACKGROUND
      }
      const anim: CAnim = {
        anim_type: animType,
        wait_talk: waitTalking,
        num_frames: parseInt(context._numFrames.text),
        start_index: parseInt(context._startIndex.text),
        frame_rate_min: getSmth(context._frameRateLow),
        frame_rate_max: getSmth(context._frameRateHigh),
        restart_rate_min: getSmth(context._restartRateLow),
        restart_rate_max: getSmth(context._restartRateHigh),
        block_mask: getSmth(context._blockMask),
      }
      return anim;
    }

    getAnimations() {
      return {
        ambient_animations: this.ambient_animations,
        talk_animation: this.talk,
        transition_animation: this.transition
      }
    }
  }

  const listener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener as UQMCommSourceDataListener, getTree(input));
  return listener.getAnimations();
}
