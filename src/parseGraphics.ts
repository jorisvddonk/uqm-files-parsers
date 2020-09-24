import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { UQMGraphicsLexer } from './graphics/UQMGraphicsLexer';
import { UQMGraphicsListener } from './graphics/UQMGraphicsListener';
import { AnimationdefinitionContext, AnimationframeContext, FrameContext, UQMGraphicsParser } from './graphics/UQMGraphicsParser';
import { Animation, AnimationFrame, AnimationType, Frame, Graphics } from './interfaces';

/**
 * Parse an uqmgraphics file, and return frames and animations in a nice way.
 * @param input file contents to parse
 */
export function parseGraphics(input: string) {
  function getTree(input: string) {
    let inputStream = new ANTLRInputStream(input);
    let lexer = new UQMGraphicsLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new UQMGraphicsParser(tokenStream);
    return parser.graphics();
  }

  function stringToAnimationTypeEnum(input: string) {
    switch (input) {
      case 'RANDOM':
        return AnimationType.RANDOM;
      case 'BACKGROUND':
        return AnimationType.BACKGROUND;
      case 'YO_YO':
        return AnimationType.YO_YO;
      case 'TALK':
        return AnimationType.TALK;
      case 'CIRCULAR':
        return AnimationType.CIRCULAR;
    }
    throw new Error(`Unsupported animation type: ${input}`);
  }

  class Listener implements UQMGraphicsListener {
    public graphics: Graphics = {
      frames: [],
      animations: null
    };
    private numberedAnimationsMap: Map<number, Animation> = new Map();
    private lastFrame: Frame = null;

    enterFrame(context: FrameContext) {
      const framePart = context.frame_part();
      this.lastFrame = {
        filename: framePart._filename.text,
        colormap_index: parseInt(framePart._colormap_index.text),
        transparent_color: parseInt(framePart._transparent_color.text),
        hotspot: {
          x: parseInt(framePart._hotspot_x.text),
          y: parseInt(framePart._hotspot_y.text)
        }
      }
    }

    exitFrame(context: FrameContext) {
      this.graphics.frames.push(this.lastFrame);
      this.lastFrame = null;
    }

    enterAnimationdefinition(context: AnimationdefinitionContext) {
      const b_r_r = context._base_restart_rate !== undefined ? parseFloat(context._base_restart_rate.text) : undefined;
      const r_r_r = context._random_restart_rate !== undefined ? parseFloat(context._random_restart_rate.text) : undefined;
      const bm = context._block_mask !== undefined ? parseInt(context._block_mask.text) : undefined;
      const animation: Animation = {
        name: context._name.text,
        type: stringToAnimationTypeEnum(context._animation_type.text),
        frames: [],
        base_restart_rate: b_r_r,
        random_restart_rate: r_r_r,
        block_mask: bm,
        do_not_play_when_other_anim: [] // filled out later! this is a conversion from the block_mask.
      }
      this.numberedAnimationsMap.set(parseInt(context._animation_number.text), animation);
    }

    enterAnimationframe(context: AnimationframeContext) {
      const animRef = parseInt(context._animation_number_reference.text);
      const animation = this.numberedAnimationsMap.get(animRef);
      if (animation === undefined) {
        throw new Error(`Unknown animation reference: ${animRef}`);
      }
      const frameRef = context._frameref;
      const reffedFrameIndex = this.graphics.frames.findIndex(f => {
        return f.filename === frameRef._filename.text
          && f.colormap_index === parseInt(frameRef._colormap_index.text)
          && f.transparent_color === parseInt(frameRef._transparent_color.text)
          && f.hotspot.x === parseInt(frameRef._hotspot_x.text)
          && f.hotspot.y === parseInt(frameRef._hotspot_y.text);
      });
      if (reffedFrameIndex === undefined) {
        throw new Error(`Could not find reffed frame: "${frameRef.text}"`);
      }
      const animationFrame: AnimationFrame = {
        duration: parseFloat(context._frame_duration.text),
        frame_index: reffedFrameIndex
      }
      animation.frames.push(animationFrame);
    }

    getGraphics() {
      this.graphics.animations = new Map();
      this.numberedAnimationsMap.forEach(anim => {
        if (anim.block_mask !== undefined) {
          anim.do_not_play_when_other_anim = anim.block_mask.toString(2).split('').map(x => parseInt(x)).reverse().reduce((memo, isExclusive, index) => {
            // if isExclusive is 1, this.numberedAnimationsMap.get(index) is exclusive.
            if (isExclusive === 1) {
              memo.push(this.numberedAnimationsMap.get(index).name);
            }
            return memo;
          }, []);
        }
        this.graphics.animations.set(anim.name, anim);
      });
      return this.graphics;
    }
  }

  const listener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener as UQMGraphicsListener, getTree(input));
  return listener.getGraphics();
}
