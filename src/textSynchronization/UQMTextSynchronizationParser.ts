// @ts-nocheck
// Generated from grammars/UQMTextSynchronization.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { UQMTextSynchronizationListener } from "./UQMTextSynchronizationListener";
import { UQMTextSynchronizationVisitor } from "./UQMTextSynchronizationVisitor";


export class UQMTextSynchronizationParser extends Parser {
	public static readonly HEADER_START = 1;
	public static readonly HEADER_END = 2;
	public static readonly WHITESPACE = 3;
	public static readonly NEWLINE = 4;
	public static readonly NUMBER = 5;
	public static readonly LOWERCASE_WORD = 6;
	public static readonly UPPERCASE_WORD = 7;
	public static readonly WORD = 8;
	public static readonly COMMA = 9;
	public static readonly RULE_synchronizations = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_timings = 2;
	public static readonly RULE_timing = 3;
	public static readonly RULE_synchronization = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"synchronizations", "header", "timings", "timing", "synchronization",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#('", "')'", undefined, undefined, undefined, undefined, 
		undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER_START", "HEADER_END", "WHITESPACE", "NEWLINE", "NUMBER", 
		"LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "COMMA",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMTextSynchronizationParser._LITERAL_NAMES, UQMTextSynchronizationParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMTextSynchronizationParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "UQMTextSynchronization.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMTextSynchronizationParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMTextSynchronizationParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UQMTextSynchronizationParser._ATN, this);
	}
	// @RuleVersion(0)
	public synchronizations(): SynchronizationsContext {
		let _localctx: SynchronizationsContext = new SynchronizationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UQMTextSynchronizationParser.RULE_synchronizations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.synchronization();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMTextSynchronizationParser.HEADER_START);
			this.state = 15;
			this.match(UQMTextSynchronizationParser.EOF);
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UQMTextSynchronizationParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.match(UQMTextSynchronizationParser.HEADER_START);
			this.state = 18;
			_localctx._identifier = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMTextSynchronizationParser.LOWERCASE_WORD) | (1 << UQMTextSynchronizationParser.UPPERCASE_WORD) | (1 << UQMTextSynchronizationParser.WORD))) !== 0))) {
				_localctx._identifier = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 19;
			this.match(UQMTextSynchronizationParser.HEADER_END);
			this.state = 20;
			this.match(UQMTextSynchronizationParser.WHITESPACE);
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
	public timings(): TimingsContext {
		let _localctx: TimingsContext = new TimingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UQMTextSynchronizationParser.RULE_timings);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 25;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case UQMTextSynchronizationParser.NUMBER:
						{
						this.state = 22;
						this.timing();
						}
						break;
					case UQMTextSynchronizationParser.COMMA:
						{
						this.state = 23;
						this.match(UQMTextSynchronizationParser.COMMA);
						}
						break;
					case UQMTextSynchronizationParser.WHITESPACE:
						{
						this.state = 24;
						this.match(UQMTextSynchronizationParser.WHITESPACE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 27;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public timing(): TimingContext {
		let _localctx: TimingContext = new TimingContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UQMTextSynchronizationParser.RULE_timing);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 29;
					this.match(UQMTextSynchronizationParser.NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 32;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public synchronization(): SynchronizationContext {
		let _localctx: SynchronizationContext = new SynchronizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UQMTextSynchronizationParser.RULE_synchronization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.header();
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.timings();
				}
				break;
			}
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UQMTextSynchronizationParser.WHITESPACE) {
				{
				this.state = 38;
				this.match(UQMTextSynchronizationParser.WHITESPACE);
				}
			}

			this.state = 41;
			this.match(UQMTextSynchronizationParser.NEWLINE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v.\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x06" +
		"\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x06\x04\x1C\n\x04\r\x04\x0E\x04" +
		"\x1D\x03\x05\x06\x05!\n\x05\r\x05\x0E\x05\"\x03\x06\x03\x06\x05\x06\'" +
		"\n\x06\x03\x06\x05\x06*\n\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x03\x02\b\n\x02/\x02\r\x03" +
		"\x02\x02\x02\x04\x13\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b \x03\x02" +
		"\x02\x02\n$\x03\x02\x02\x02\f\x0E\x05\n\x06\x02\r\f\x03\x02\x02\x02\x0E" +
		"\x0F\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10" +
		"\x11\x03\x02\x02\x02\x11\x12\x07\x02\x02\x03\x12\x03\x03\x02\x02\x02\x13" +
		"\x14\x07\x03\x02\x02\x14\x15\t\x02\x02\x02\x15\x16\x07\x04\x02\x02\x16" +
		"\x17\x07\x05\x02\x02\x17\x05\x03\x02\x02\x02\x18\x1C\x05\b\x05\x02\x19" +
		"\x1C\x07\v\x02\x02\x1A\x1C\x07\x05\x02\x02\x1B\x18\x03\x02\x02\x02\x1B" +
		"\x19\x03\x02\x02\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D" +
		"\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x07\x03\x02\x02\x02\x1F" +
		"!\x07\x07\x02\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\" \x03\x02\x02" +
		"\x02\"#\x03\x02\x02\x02#\t\x03\x02\x02\x02$&\x05\x04\x03\x02%\'\x05\x06" +
		"\x04\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(*\x07" +
		"\x05\x02\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x07" +
		"\x06\x02\x02,\v\x03\x02\x02\x02\b\x0F\x1B\x1D\"&)";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMTextSynchronizationParser.__ATN) {
			UQMTextSynchronizationParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMTextSynchronizationParser._serializedATN));
		}

		return UQMTextSynchronizationParser.__ATN;
	}

}

export class SynchronizationsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(UQMTextSynchronizationParser.EOF, 0); }
	public synchronization(): SynchronizationContext[];
	public synchronization(i: number): SynchronizationContext;
	public synchronization(i?: number): SynchronizationContext | SynchronizationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SynchronizationContext);
		} else {
			return this.getRuleContext(i, SynchronizationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextSynchronizationParser.RULE_synchronizations; }
	// @Override
	public enterRule(listener: UQMTextSynchronizationListener): void {
		if (listener.enterSynchronizations) {
			listener.enterSynchronizations(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextSynchronizationListener): void {
		if (listener.exitSynchronizations) {
			listener.exitSynchronizations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextSynchronizationVisitor<Result>): Result {
		if (visitor.visitSynchronizations) {
			return visitor.visitSynchronizations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public _identifier: Token;
	public HEADER_START(): TerminalNode { return this.getToken(UQMTextSynchronizationParser.HEADER_START, 0); }
	public HEADER_END(): TerminalNode { return this.getToken(UQMTextSynchronizationParser.HEADER_END, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(UQMTextSynchronizationParser.WHITESPACE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(UQMTextSynchronizationParser.WORD, 0); }
	public LOWERCASE_WORD(): TerminalNode | undefined { return this.tryGetToken(UQMTextSynchronizationParser.LOWERCASE_WORD, 0); }
	public UPPERCASE_WORD(): TerminalNode | undefined { return this.tryGetToken(UQMTextSynchronizationParser.UPPERCASE_WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextSynchronizationParser.RULE_header; }
	// @Override
	public enterRule(listener: UQMTextSynchronizationListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextSynchronizationListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextSynchronizationVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingsContext extends ParserRuleContext {
	public timing(): TimingContext[];
	public timing(i: number): TimingContext;
	public timing(i?: number): TimingContext | TimingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimingContext);
		} else {
			return this.getRuleContext(i, TimingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextSynchronizationParser.COMMA);
		} else {
			return this.getToken(UQMTextSynchronizationParser.COMMA, i);
		}
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextSynchronizationParser.WHITESPACE);
		} else {
			return this.getToken(UQMTextSynchronizationParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextSynchronizationParser.RULE_timings; }
	// @Override
	public enterRule(listener: UQMTextSynchronizationListener): void {
		if (listener.enterTimings) {
			listener.enterTimings(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextSynchronizationListener): void {
		if (listener.exitTimings) {
			listener.exitTimings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextSynchronizationVisitor<Result>): Result {
		if (visitor.visitTimings) {
			return visitor.visitTimings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMTextSynchronizationParser.NUMBER);
		} else {
			return this.getToken(UQMTextSynchronizationParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextSynchronizationParser.RULE_timing; }
	// @Override
	public enterRule(listener: UQMTextSynchronizationListener): void {
		if (listener.enterTiming) {
			listener.enterTiming(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextSynchronizationListener): void {
		if (listener.exitTiming) {
			listener.exitTiming(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextSynchronizationVisitor<Result>): Result {
		if (visitor.visitTiming) {
			return visitor.visitTiming(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizationContext extends ParserRuleContext {
	public header(): HeaderContext {
		return this.getRuleContext(0, HeaderContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(UQMTextSynchronizationParser.NEWLINE, 0); }
	public timings(): TimingsContext | undefined {
		return this.tryGetRuleContext(0, TimingsContext);
	}
	public WHITESPACE(): TerminalNode | undefined { return this.tryGetToken(UQMTextSynchronizationParser.WHITESPACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMTextSynchronizationParser.RULE_synchronization; }
	// @Override
	public enterRule(listener: UQMTextSynchronizationListener): void {
		if (listener.enterSynchronization) {
			listener.enterSynchronization(this);
		}
	}
	// @Override
	public exitRule(listener: UQMTextSynchronizationListener): void {
		if (listener.exitSynchronization) {
			listener.exitSynchronization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMTextSynchronizationVisitor<Result>): Result {
		if (visitor.visitSynchronization) {
			return visitor.visitSynchronization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


