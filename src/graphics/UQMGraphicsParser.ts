// @ts-nocheck
// Generated from grammars/UQMGraphics.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { UQMGraphicsListener } from "./UQMGraphicsListener";
import { UQMGraphicsVisitor } from "./UQMGraphicsVisitor";


export class UQMGraphicsParser extends Parser {
	public static readonly HASH = 1;
	public static readonly AT = 2;
	public static readonly ANIDEF_HEADER = 3;
	public static readonly ANIFRAME_HEADER = 4;
	public static readonly ANIM_TYPE = 5;
	public static readonly BLOCK_BEGIN = 6;
	public static readonly BLOCK_END = 7;
	public static readonly WHITESPACE = 8;
	public static readonly NEWLINE = 9;
	public static readonly WORD = 10;
	public static readonly INT = 11;
	public static readonly FLOAT = 12;
	public static readonly COMMENT = 13;
	public static readonly RULE_graphics = 0;
	public static readonly RULE_frame_part = 1;
	public static readonly RULE_frame = 2;
	public static readonly RULE_animationname = 3;
	public static readonly RULE_animationdefinition = 4;
	public static readonly RULE_animationframe = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"graphics", "frame_part", "frame", "animationname", "animationdefinition", 
		"animationframe",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#'", "'@'", "'anidef'", "'aniframe'", undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HASH", "AT", "ANIDEF_HEADER", "ANIFRAME_HEADER", "ANIM_TYPE", 
		"BLOCK_BEGIN", "BLOCK_END", "WHITESPACE", "NEWLINE", "WORD", "INT", "FLOAT", 
		"COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMGraphicsParser._LITERAL_NAMES, UQMGraphicsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMGraphicsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "UQMGraphics.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMGraphicsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMGraphicsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UQMGraphicsParser._ATN, this);
	}
	// @RuleVersion(0)
	public graphics(): GraphicsContext {
		let _localctx: GraphicsContext = new GraphicsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UQMGraphicsParser.RULE_graphics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 15;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 12;
					this.frame();
					}
					break;

				case 2:
					{
					this.state = 13;
					this.animationdefinition();
					}
					break;

				case 3:
					{
					this.state = 14;
					this.animationframe();
					}
					break;
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.HASH || _la === UQMGraphicsParser.WORD);
			this.state = 19;
			this.match(UQMGraphicsParser.EOF);
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
	public frame_part(): Frame_partContext {
		let _localctx: Frame_partContext = new Frame_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UQMGraphicsParser.RULE_frame_part);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			_localctx._filename = this.match(UQMGraphicsParser.WORD);
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 22;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 27;
			_localctx._transparent_color = this.match(UQMGraphicsParser.INT);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 28;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 33;
			_localctx._colormap_index = this.match(UQMGraphicsParser.INT);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 34;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 39;
			_localctx._hotspot_x = this.match(UQMGraphicsParser.INT);
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 45;
			_localctx._hotspot_y = this.match(UQMGraphicsParser.INT);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMGraphicsParser.WHITESPACE) {
				{
				{
				this.state = 46;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public frame(): FrameContext {
		let _localctx: FrameContext = new FrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UQMGraphicsParser.RULE_frame);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.frame_part();
			this.state = 53;
			this.match(UQMGraphicsParser.NEWLINE);
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
	public animationname(): AnimationnameContext {
		let _localctx: AnimationnameContext = new AnimationnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UQMGraphicsParser.RULE_animationname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 55;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMGraphicsParser.WHITESPACE) | (1 << UQMGraphicsParser.WORD) | (1 << UQMGraphicsParser.INT) | (1 << UQMGraphicsParser.FLOAT))) !== 0))) {
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
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMGraphicsParser.WHITESPACE) | (1 << UQMGraphicsParser.WORD) | (1 << UQMGraphicsParser.INT) | (1 << UQMGraphicsParser.FLOAT))) !== 0));
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
	public animationdefinition(): AnimationdefinitionContext {
		let _localctx: AnimationdefinitionContext = new AnimationdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UQMGraphicsParser.RULE_animationdefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(UQMGraphicsParser.HASH);
			this.state = 61;
			this.match(UQMGraphicsParser.AT);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 62;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 67;
			this.match(UQMGraphicsParser.ANIDEF_HEADER);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 68;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 73;
			_localctx._animation_number = this.match(UQMGraphicsParser.INT);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 74;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 79;
			_localctx._animation_type = this.match(UQMGraphicsParser.ANIM_TYPE);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 85;
			this.match(UQMGraphicsParser.BLOCK_BEGIN);
			this.state = 86;
			_localctx._name = this.animationname();
			this.state = 87;
			this.match(UQMGraphicsParser.BLOCK_END);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMGraphicsParser.WHITESPACE) {
				{
				{
				this.state = 88;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(UQMGraphicsParser.NEWLINE);
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
	public animationframe(): AnimationframeContext {
		let _localctx: AnimationframeContext = new AnimationframeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, UQMGraphicsParser.RULE_animationframe);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(UQMGraphicsParser.HASH);
			this.state = 97;
			this.match(UQMGraphicsParser.AT);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 98;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 103;
			this.match(UQMGraphicsParser.ANIFRAME_HEADER);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 104;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 109;
			_localctx._animation_number_reference = this.match(UQMGraphicsParser.INT);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 110;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 115;
			_localctx._frame_duration = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === UQMGraphicsParser.INT || _la === UQMGraphicsParser.FLOAT)) {
				_localctx._frame_duration = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 116;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMGraphicsParser.WHITESPACE);
			this.state = 121;
			this.match(UQMGraphicsParser.BLOCK_BEGIN);
			this.state = 122;
			_localctx._frameref = this.frame_part();
			this.state = 123;
			this.match(UQMGraphicsParser.BLOCK_END);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMGraphicsParser.WHITESPACE) {
				{
				{
				this.state = 124;
				this.match(UQMGraphicsParser.WHITESPACE);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(UQMGraphicsParser.NEWLINE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F\x87\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x06\x03\x1A\n\x03\r\x03\x0E\x03\x1B\x03\x03" +
		"\x03\x03\x06\x03 \n\x03\r\x03\x0E\x03!\x03\x03\x03\x03\x06\x03&\n\x03" +
		"\r\x03\x0E\x03\'\x03\x03\x03\x03\x06\x03,\n\x03\r\x03\x0E\x03-\x03\x03" +
		"\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x06\x05;\n\x05\r\x05\x0E\x05<\x03\x06\x03\x06\x03\x06\x06\x06B\n" +
		"\x06\r\x06\x0E\x06C\x03\x06\x03\x06\x06\x06H\n\x06\r\x06\x0E\x06I\x03" +
		"\x06\x03\x06\x06\x06N\n\x06\r\x06\x0E\x06O\x03\x06\x03\x06\x06\x06T\n" +
		"\x06\r\x06\x0E\x06U\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\\\n\x06\f" +
		"\x06\x0E\x06_\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x06\x07f\n" +
		"\x07\r\x07\x0E\x07g\x03\x07\x03\x07\x06\x07l\n\x07\r\x07\x0E\x07m\x03" +
		"\x07\x03\x07\x06\x07r\n\x07\r\x07\x0E\x07s\x03\x07\x03\x07\x06\x07x\n" +
		"\x07\r\x07\x0E\x07y\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x80\n\x07" +
		"\f\x07\x0E\x07\x83\v\x07\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x04\x04\x02\n\n\f\x0E\x03\x02\r" +
		"\x0E\x02\x93\x02\x11\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02\x066\x03" +
		"\x02\x02\x02\b:\x03\x02\x02\x02\n>\x03\x02\x02\x02\fb\x03\x02\x02\x02" +
		"\x0E\x12\x05\x06\x04\x02\x0F\x12\x05\n\x06\x02\x10\x12\x05\f\x07\x02\x11" +
		"\x0E\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12" +
		"\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14" +
		"\x15\x03\x02\x02\x02\x15\x16\x07\x02\x02\x03\x16\x03\x03\x02\x02\x02\x17" +
		"\x19\x07\f\x02\x02\x18\x1A\x07\n\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1B" +
		"\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1D" +
		"\x03\x02\x02\x02\x1D\x1F\x07\r\x02\x02\x1E \x07\n\x02\x02\x1F\x1E\x03" +
		"\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02" +
		"\"#\x03\x02\x02\x02#%\x07\r\x02\x02$&\x07\n\x02\x02%$\x03\x02\x02\x02" +
		"&\'\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x03\x02\x02" +
		"\x02)+\x07\r\x02\x02*,\x07\n\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-+\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/3\x07\r\x02\x02" +
		"02\x07\n\x02\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x02" +
		"34\x03\x02\x02\x024\x05\x03\x02\x02\x0253\x03\x02\x02\x0267\x05\x04\x03" +
		"\x0278\x07\v\x02\x028\x07\x03\x02\x02\x029;\t\x02\x02\x02:9\x03\x02\x02" +
		"\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\t\x03\x02" +
		"\x02\x02>?\x07\x03\x02\x02?A\x07\x04\x02\x02@B\x07\n\x02\x02A@\x03\x02" +
		"\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02" +
		"\x02\x02EG\x07\x05\x02\x02FH\x07\n\x02\x02GF\x03\x02\x02\x02HI\x03\x02" +
		"\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x07\r" +
		"\x02\x02LN\x07\n\x02\x02ML\x03\x02\x02\x02NO\x03\x02\x02\x02OM\x03\x02" +
		"\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x07\x07\x02\x02RT\x07\n" +
		"\x02\x02SR\x03\x02\x02\x02TU\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02" +
		"\x02\x02VW\x03\x02\x02\x02WX\x07\b\x02\x02XY\x05\b\x05\x02Y]\x07\t\x02" +
		"\x02Z\\\x07\n\x02\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02" +
		"\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\v\x02" +
		"\x02a\v\x03\x02\x02\x02bc\x07\x03\x02\x02ce\x07\x04\x02\x02df\x07\n\x02" +
		"\x02ed\x03\x02\x02\x02fg\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02hi\x03\x02\x02\x02ik\x07\x06\x02\x02jl\x07\n\x02\x02kj\x03\x02\x02" +
		"\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02" +
		"\x02oq\x07\r\x02\x02pr\x07\n\x02\x02qp\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uw\t\x03\x02\x02" +
		"vx\x07\n\x02\x02wv\x03\x02\x02\x02xy\x03\x02\x02\x02yw\x03\x02\x02\x02" +
		"yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07\b\x02\x02|}\x05\x04\x03\x02" +
		"}\x81\x07\t\x02\x02~\x80\x07\n\x02\x02\x7F~\x03\x02\x02\x02\x80\x83\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03" +
		"\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\v\x02\x02\x85\r\x03\x02" +
		"\x02\x02\x14\x11\x13\x1B!\'-3<CIOU]gmsy\x81";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMGraphicsParser.__ATN) {
			UQMGraphicsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMGraphicsParser._serializedATN));
		}

		return UQMGraphicsParser.__ATN;
	}

}

export class GraphicsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(UQMGraphicsParser.EOF, 0); }
	public frame(): FrameContext[];
	public frame(i: number): FrameContext;
	public frame(i?: number): FrameContext | FrameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameContext);
		} else {
			return this.getRuleContext(i, FrameContext);
		}
	}
	public animationdefinition(): AnimationdefinitionContext[];
	public animationdefinition(i: number): AnimationdefinitionContext;
	public animationdefinition(i?: number): AnimationdefinitionContext | AnimationdefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnimationdefinitionContext);
		} else {
			return this.getRuleContext(i, AnimationdefinitionContext);
		}
	}
	public animationframe(): AnimationframeContext[];
	public animationframe(i: number): AnimationframeContext;
	public animationframe(i?: number): AnimationframeContext | AnimationframeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnimationframeContext);
		} else {
			return this.getRuleContext(i, AnimationframeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_graphics; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterGraphics) {
			listener.enterGraphics(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitGraphics) {
			listener.exitGraphics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitGraphics) {
			return visitor.visitGraphics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Frame_partContext extends ParserRuleContext {
	public _filename: Token;
	public _transparent_color: Token;
	public _colormap_index: Token;
	public _hotspot_x: Token;
	public _hotspot_y: Token;
	public WORD(): TerminalNode { return this.getToken(UQMGraphicsParser.WORD, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.INT);
		} else {
			return this.getToken(UQMGraphicsParser.INT, i);
		}
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WHITESPACE);
		} else {
			return this.getToken(UQMGraphicsParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_frame_part; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterFrame_part) {
			listener.enterFrame_part(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitFrame_part) {
			listener.exitFrame_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitFrame_part) {
			return visitor.visitFrame_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameContext extends ParserRuleContext {
	public frame_part(): Frame_partContext {
		return this.getRuleContext(0, Frame_partContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(UQMGraphicsParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_frame; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterFrame) {
			listener.enterFrame(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitFrame) {
			listener.exitFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitFrame) {
			return visitor.visitFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimationnameContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WORD);
		} else {
			return this.getToken(UQMGraphicsParser.WORD, i);
		}
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WHITESPACE);
		} else {
			return this.getToken(UQMGraphicsParser.WHITESPACE, i);
		}
	}
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.INT);
		} else {
			return this.getToken(UQMGraphicsParser.INT, i);
		}
	}
	public FLOAT(): TerminalNode[];
	public FLOAT(i: number): TerminalNode;
	public FLOAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.FLOAT);
		} else {
			return this.getToken(UQMGraphicsParser.FLOAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_animationname; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterAnimationname) {
			listener.enterAnimationname(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitAnimationname) {
			listener.exitAnimationname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitAnimationname) {
			return visitor.visitAnimationname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimationdefinitionContext extends ParserRuleContext {
	public _animation_number: Token;
	public _animation_type: Token;
	public _name: AnimationnameContext;
	public HASH(): TerminalNode { return this.getToken(UQMGraphicsParser.HASH, 0); }
	public AT(): TerminalNode { return this.getToken(UQMGraphicsParser.AT, 0); }
	public ANIDEF_HEADER(): TerminalNode { return this.getToken(UQMGraphicsParser.ANIDEF_HEADER, 0); }
	public BLOCK_BEGIN(): TerminalNode { return this.getToken(UQMGraphicsParser.BLOCK_BEGIN, 0); }
	public BLOCK_END(): TerminalNode { return this.getToken(UQMGraphicsParser.BLOCK_END, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(UQMGraphicsParser.NEWLINE, 0); }
	public INT(): TerminalNode { return this.getToken(UQMGraphicsParser.INT, 0); }
	public ANIM_TYPE(): TerminalNode { return this.getToken(UQMGraphicsParser.ANIM_TYPE, 0); }
	public animationname(): AnimationnameContext {
		return this.getRuleContext(0, AnimationnameContext);
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WHITESPACE);
		} else {
			return this.getToken(UQMGraphicsParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_animationdefinition; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterAnimationdefinition) {
			listener.enterAnimationdefinition(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitAnimationdefinition) {
			listener.exitAnimationdefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitAnimationdefinition) {
			return visitor.visitAnimationdefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimationframeContext extends ParserRuleContext {
	public _animation_number_reference: Token;
	public _frame_duration: Token;
	public _frameref: Frame_partContext;
	public HASH(): TerminalNode { return this.getToken(UQMGraphicsParser.HASH, 0); }
	public AT(): TerminalNode { return this.getToken(UQMGraphicsParser.AT, 0); }
	public ANIFRAME_HEADER(): TerminalNode { return this.getToken(UQMGraphicsParser.ANIFRAME_HEADER, 0); }
	public BLOCK_BEGIN(): TerminalNode { return this.getToken(UQMGraphicsParser.BLOCK_BEGIN, 0); }
	public BLOCK_END(): TerminalNode { return this.getToken(UQMGraphicsParser.BLOCK_END, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(UQMGraphicsParser.NEWLINE, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.INT);
		} else {
			return this.getToken(UQMGraphicsParser.INT, i);
		}
	}
	public frame_part(): Frame_partContext {
		return this.getRuleContext(0, Frame_partContext);
	}
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(UQMGraphicsParser.FLOAT, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WHITESPACE);
		} else {
			return this.getToken(UQMGraphicsParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMGraphicsParser.RULE_animationframe; }
	// @Override
	public enterRule(listener: UQMGraphicsListener): void {
		if (listener.enterAnimationframe) {
			listener.enterAnimationframe(this);
		}
	}
	// @Override
	public exitRule(listener: UQMGraphicsListener): void {
		if (listener.exitAnimationframe) {
			listener.exitAnimationframe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMGraphicsVisitor<Result>): Result {
		if (visitor.visitAnimationframe) {
			return visitor.visitAnimationframe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


