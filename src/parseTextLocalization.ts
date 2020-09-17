import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { UQMTextLocalizationLexer } from './textLocalization/UQMTextLocalizationLexer';
import { Alien_headerContext, LocalizationContext, TextContext, UQMTextLocalizationParser, Zelnick_headerContext } from './textLocalization/UQMTextLocalizationParser';
import { Localization, LocalizationsMap } from './interfaces';
import { UQMTextLocalizationListener } from './textLocalization/UQMTextLocalizationListener';

/**
 * Parse an uqm text localization file, and return the relevant string identifiers with their localized texts.
 * Localization files are used in various places in UQM, most notably in conversations with aliens.
 * Localizations _may_ have audio files associated with them.
 * @param input file contents to parse
 */
export function parseTextLocalizationFile(input: string) {
  function getTree(input: string) {
    let inputStream = new ANTLRInputStream(input);
    let lexer = new UQMTextLocalizationLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new UQMTextLocalizationParser(tokenStream);
    return parser.localizations();
  }

  class Listener implements UQMTextLocalizationListener {
    public localizations: LocalizationsMap = new Map();
    private lastLocalization: Localization = null;

    enterText(context: TextContext) {
      this.lastLocalization.localizedText = context.text.trim();
    }

    enterLocalization(context: LocalizationContext) {
      this.lastLocalization = {
        identifier: null,
        localizedText: null
      };
    }

    exitLocalization() {
      this.localizations.set(this.lastLocalization.identifier, this.lastLocalization);
      this.lastLocalization = null;
    }

    enterAlien_header(context: Alien_headerContext) {
      this.lastLocalization.identifier = context._identifier.text;
      if (context._audiofile !== undefined) {
        this.lastLocalization.audioFile = context._audiofile.text;
      }
    }

    enterZelnick_header(context: Zelnick_headerContext) {
      this.lastLocalization.identifier = context._identifier.text;
    }

    getLocalizations() {
      return this.localizations;
    }
  }

  const listener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener as UQMTextLocalizationListener, getTree(input));
  return listener.getLocalizations();
}
