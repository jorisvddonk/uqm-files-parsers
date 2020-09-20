import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { UQMTextSynchronizationLexer } from './textSynchronization/UQMTextSynchronizationLexer';
import { HeaderContext, SynchronizationContext, TimingContext, TimingsContext, UQMTextSynchronizationParser } from './textSynchronization/UQMTextSynchronizationParser';
import { Localization, LocalizationsMap, Synchronization, SynchronizationsMap } from './interfaces';
import { UQMTextSynchronizationListener } from './textSynchronization/UQMTextSynchronizationListener';

/**
 * Parse an uqm text sychronization file, and return speech timings for the various identifiers.
 * Speech timing files are used to sync up text to voice audio files in game.
 * @param input file contents to parse
 */
export function parseTextSynchronizationFile(input: string) {
  function getTree(input: string) {
    let inputStream = new ANTLRInputStream(input);
    let lexer = new UQMTextSynchronizationLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new UQMTextSynchronizationParser(tokenStream);
    return parser.synchronizations();
  }

  class Listener implements UQMTextSynchronizationListener {
    public synchronizations: SynchronizationsMap = new Map();
    private lastSynchronization: Synchronization = null;

    enterSynchronization(context: SynchronizationContext) {
      this.lastSynchronization = {
        identifier: null,
        timings: []
      };
    }

    exitSynchronization() {
      this.synchronizations.set(this.lastSynchronization.identifier, this.lastSynchronization);
      this.lastSynchronization = null;
    }

    enterHeader(context: HeaderContext) {
      this.lastSynchronization.identifier = context._identifier.text;
    }

    enterTimings(context: TimingsContext) {
      const timings = [];
      context.timing().forEach(t => t.NUMBER().forEach(x => timings.push(parseInt(x.text))));
      this.lastSynchronization.timings = timings;
    }

    getSynchronizations() {
      return this.synchronizations;
    }
  }

  const listener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener as UQMTextSynchronizationListener, getTree(input));
  return listener.getSynchronizations();
}
