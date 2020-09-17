// @ts-nocheck
// Generated from grammars/UQMTextLocalization.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { UQMTextLocalizationListener } from "./UQMTextLocalizationListener";
import { UQMTextLocalizationVisitor } from "./UQMTextLocalizationVisitor";


export class UQMTextLocalizationParser extends Parser {
	public static readonly HEADER_START = 1;
	public static readonly HEADER_END = 2;
	public static readonly AUDIOFILE = 3;
	public static readonly WHITESPACE = 4;
	public static readonly NEWLINE = 5;
	public static readonly LOWERCASE_WORD = 6;
	public static readonly UPPERCASE_WORD = 7;
	public static readonly WORD = 8;
	public static readonly PUNCTUATION = 9;
	public static readonly RULE_localizations = 0;
	public static readonly RULE_alien_header = 1;
	public static readonly RULE_zelnick_header = 2;
	public static readonly RULE_text = 3;
	public static readonly RULE_line = 4;
	public static readonly RULE_alien_localization = 5;
	public static readonly RULE_zelnick_localization = 6;
	public static readonly RULE_localization = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"localizations", "alien_header", "zelnick_header", "text", "line", "alien_localization",
		"zelnick_localization", "localization",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER_START", "HEADER_END", "AUDIOFILE", "WHITESPACE", "NEWLINE",
		"LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "PUNCTUATION",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMTextLocalizationParser._LITERAL_NAMES, UQMTextLocalizationParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMTextLocalizationParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "UQMTextLocalization.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMTextLocalizationParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMTextLocalizationParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UQMTextLocalizationParser._ATN, this);
	}
	// @RuleVersion(0)
	public localizations(): LocalizationsContext {
		let _localctx: LocalizationsContext = new LocalizationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UQMTextLocalizationParser.RULE_localizations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 16;
							this.localization();
						}
					}
					this.state = 19;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMTextLocalizationParser.HEADER_START);
				this.state = 21;
				this.match(UQMTextLocalizationParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alien_header(): Alien_headerContext {
		let _localctx: Alien_headerContext = new Alien_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UQMTextLocalizationParser.RULE_alien_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 23;
				this.match(UQMTextLocalizationParser.HEADER_START);
				this.state = 24;
				_localctx._identifier = this.match(UQMTextLocalizationParser.UPPERCASE_WORD);
				this.state = 25;
				this.match(UQMTextLocalizationParser.HEADER_END);
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === UQMTextLocalizationParser.WHITESPACE) {
					{
						this.state = 26;
						this.match(UQMTextLocalizationParser.WHITESPACE);
						this.state = 27;
						_localctx._audiofile = this.match(UQMTextLocalizationParser.AUDIOFILE);
					}
				}

				this.state = 30;
				this.match(UQMTextLocalizationParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zelnick_header(): Zelnick_headerContext {
		let _localctx: Zelnick_headerContext = new Zelnick_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UQMTextLocalizationParser.RULE_zelnick_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 32;
				this.match(UQMTextLocalizationParser.HEADER_START);
				this.state = 33;
				_localctx._identifier = this.match(UQMTextLocalizationParser.LOWERCASE_WORD);
				this.state = 34;
				this.match(UQMTextLocalizationParser.HEADER_END);
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === UQMTextLocalizationParser.WHITESPACE) {
					{
						this.state = 35;
						this.match(UQMTextLocalizationParser.WHITESPACE);
					}
				}

				this.state = 38;
				this.match(UQMTextLocalizationParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UQMTextLocalizationParser.RULE_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 40;
							this.line();
						}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMTextLocalizationParser.WHITESPACE) | (1 << UQMTextLocalizationParser.LOWERCASE_WORD) | (1 << UQMTextLocalizationParser.UPPERCASE_WORD) | (1 << UQMTextLocalizationParser.WORD) | (1 << UQMTextLocalizationParser.PUNCTUATION))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UQMTextLocalizationParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 45;
							_la = this._input.LA(1);
							if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMTextLocalizationParser.WHITESPACE) | (1 << UQMTextLocalizationParser.LOWERCASE_WORD) | (1 << UQMTextLocalizationParser.UPPERCASE_WORD) | (1 << UQMTextLocalizationParser.WORD) | (1 << UQMTextLocalizationParser.PUNCTUATION))) !== 0))) {
								this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
						}
					}
					this.state = 48;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMTextLocalizationParser.WHITESPACE) | (1 << UQMTextLocalizationParser.LOWERCASE_WORD) | (1 << UQMTextLocalizationParser.UPPERCASE_WORD) | (1 << UQMTextLocalizationParser.WORD) | (1 << UQMTextLocalizationParser.PUNCTUATION))) !== 0));
				this.state = 50;
				this.match(UQMTextLocalizationParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alien_localization(): Alien_localizationContext {
		let _localctx: Alien_localizationContext = new Alien_localizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, UQMTextLocalizationParser.RULE_alien_localization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 52;
				this.alien_header();
				this.state = 53;
				this.text();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zelnick_localization(): Zelnick_localizationContext {
		let _localctx: Zelnick_localizationContext = new Zelnick_localizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, UQMTextLocalizationParser.RULE_zelnick_localization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 55;
				this.zelnick_header();
				this.state = 56;
				this.text();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localization(): LocalizationContext {
		let _localctx: LocalizationContext = new LocalizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, UQMTextLocalizationParser.RULE_localization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
					case 1:
						{
							this.state = 58;
							this.alien_localization();
						}
						break;

					case 2:
						{
							this.state = 59;
							this.zelnick_localization();
						}
						break;
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\vA\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1F\n\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\'\n\x04\x03\x04" +
		"\x03\x04\x03\x05\x06\x05,\n\x05\r\x05\x0E\x05-\x03\x06\x06\x061\n\x06" +
		"\r\x06\x0E\x062\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x05\t?\n\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x03\x04\x02\x06\x06\b\v\x02>\x02" +
		"\x13\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b+" +
		"\x03\x02\x02\x02\n0\x03\x02\x02\x02\f6\x03\x02\x02\x02\x0E9\x03\x02\x02" +
		"\x02\x10>\x03\x02\x02\x02\x12\x14\x05\x10\t\x02\x13\x12\x03\x02\x02\x02" +
		"\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02" +
		"\x16\x17\x03\x02\x02\x02\x17\x18\x07\x02\x02\x03\x18\x03\x03\x02\x02\x02" +
		"\x19\x1A\x07\x03\x02\x02\x1A\x1B\x07\t\x02\x02\x1B\x1E\x07\x04\x02\x02" +
		"\x1C\x1D\x07\x06\x02\x02\x1D\x1F\x07\x05\x02\x02\x1E\x1C\x03\x02\x02\x02" +
		"\x1E\x1F\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x07\x07\x02\x02!\x05\x03" +
		"\x02\x02\x02\"#\x07\x03\x02\x02#$\x07\b\x02\x02$&\x07\x04\x02\x02%\'\x07" +
		"\x06\x02\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
		")\x07\x07\x02\x02)\x07\x03\x02\x02\x02*,\x05\n\x06\x02+*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.\t\x03\x02\x02" +
		"\x02/1\t\x02\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0223\x03\x02\x02\x0234\x03\x02\x02\x0245\x07\x07\x02\x025\v\x03\x02" +
		"\x02\x0267\x05\x04\x03\x0278\x05\b\x05\x028\r\x03\x02\x02\x029:\x05\x06" +
		"\x04\x02:;\x05\b\x05\x02;\x0F\x03\x02\x02\x02<?\x05\f\x07\x02=?\x05\x0E" +
		"\b\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02?\x11\x03\x02\x02\x02\b\x15" +
		"\x1E&-2>";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMTextLocalizationParser.__ATN) {
			UQMTextLocalizationParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMTextLocalizationParser._serializedATN));
		}

		return UQMTextLocalizationParser.__ATN;
	}

}

export class LocalizationsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(UQMTextLocalizationParser.EOF, 0); }
	public localization(): LocalizationContext[];
	public localization(i: number): LocalizationContext;
	public localization(i?: number): LocalizationContext | LocalizationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocalizationContext);
		} else {
			return this.getRuleContext(i, LocalizationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_localizations; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterLocalizations) {
			listener.enterLocalizations(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitLocalizations) {
			listener.exitLocalizations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitLocalizations) {
			return visitor.visitLocalizations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alien_headerContext extends ParserRuleContext {
	public _identifier: Token;
	public _audiofile: Token;
	public HEADER_START(): TerminalNode { return this.getToken(UQMTextLocalizationParser.HEADER_START, 0); }
	public HEADER_END(): TerminalNode { return this.getToken(UQMTextLocalizationParser.HEADER_END, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(UQMTextLocalizationParser.NEWLINE, 0); }
	public UPPERCASE_WORD(): TerminalNode { return this.getToken(UQMTextLocalizationParser.UPPERCASE_WORD, 0); }
	public WHITESPACE(): TerminalNode | undefined { return this.tryGetToken(UQMTextLocalizationParser.WHITESPACE, 0); }
	public AUDIOFILE(): TerminalNode | undefined { return this.tryGetToken(UQMTextLocalizationParser.AUDIOFILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_alien_header; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterAlien_header) {
			listener.enterAlien_header(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitAlien_header) {
			listener.exitAlien_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitAlien_header) {
			return visitor.visitAlien_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Zelnick_headerContext extends ParserRuleContext {
	public _identifier: Token;
	public HEADER_START(): TerminalNode { return this.getToken(UQMTextLocalizationParser.HEADER_START, 0); }
	public HEADER_END(): TerminalNode { return this.getToken(UQMTextLocalizationParser.HEADER_END, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(UQMTextLocalizationParser.NEWLINE, 0); }
	public LOWERCASE_WORD(): TerminalNode { return this.getToken(UQMTextLocalizationParser.LOWERCASE_WORD, 0); }
	public WHITESPACE(): TerminalNode | undefined { return this.tryGetToken(UQMTextLocalizationParser.WHITESPACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_zelnick_header; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterZelnick_header) {
			listener.enterZelnick_header(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitZelnick_header) {
			listener.exitZelnick_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitZelnick_header) {
			return visitor.visitZelnick_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_text; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(UQMTextLocalizationParser.NEWLINE, 0); }
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextLocalizationParser.WORD);
		} else {
			return this.getToken(UQMTextLocalizationParser.WORD, i);
		}
	}
	public LOWERCASE_WORD(): TerminalNode[];
	public LOWERCASE_WORD(i: number): TerminalNode;
	public LOWERCASE_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextLocalizationParser.LOWERCASE_WORD);
		} else {
			return this.getToken(UQMTextLocalizationParser.LOWERCASE_WORD, i);
		}
	}
	public UPPERCASE_WORD(): TerminalNode[];
	public UPPERCASE_WORD(i: number): TerminalNode;
	public UPPERCASE_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextLocalizationParser.UPPERCASE_WORD);
		} else {
			return this.getToken(UQMTextLocalizationParser.UPPERCASE_WORD, i);
		}
	}
	public PUNCTUATION(): TerminalNode[];
	public PUNCTUATION(i: number): TerminalNode;
	public PUNCTUATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextLocalizationParser.PUNCTUATION);
		} else {
			return this.getToken(UQMTextLocalizationParser.PUNCTUATION, i);
		}
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextLocalizationParser.WHITESPACE);
		} else {
			return this.getToken(UQMTextLocalizationParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_line; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alien_localizationContext extends ParserRuleContext {
	public alien_header(): Alien_headerContext {
		return this.getRuleContext(0, Alien_headerContext);
	}
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_alien_localization; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterAlien_localization) {
			listener.enterAlien_localization(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitAlien_localization) {
			listener.exitAlien_localization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitAlien_localization) {
			return visitor.visitAlien_localization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Zelnick_localizationContext extends ParserRuleContext {
	public zelnick_header(): Zelnick_headerContext {
		return this.getRuleContext(0, Zelnick_headerContext);
	}
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_zelnick_localization; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterZelnick_localization) {
			listener.enterZelnick_localization(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitZelnick_localization) {
			listener.exitZelnick_localization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitZelnick_localization) {
			return visitor.visitZelnick_localization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalizationContext extends ParserRuleContext {
	public alien_localization(): Alien_localizationContext | undefined {
		return this.tryGetRuleContext(0, Alien_localizationContext);
	}
	public zelnick_localization(): Zelnick_localizationContext | undefined {
		return this.tryGetRuleContext(0, Zelnick_localizationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextLocalizationParser.RULE_localization; }
	// @Override
	public enterRule(listener: UQMTextLocalizationListener): void {
		if (listener.enterLocalization) {
			listener.enterLocalization(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextLocalizationListener): void {
		if (listener.exitLocalization) {
			listener.exitLocalization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextLocalizationVisitor<Result>): Result {
		if (visitor.visitLocalization) {
			return visitor.visitLocalization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


