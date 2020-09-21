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
	public static readonly RULE_animationdefinition = 3;
	public static readonly RULE_animationframe = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"graphics", "frame_part", "frame", "animationdefinition", "animationframe",
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
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 13;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
							case 1:
								{
									this.state = 10;
									this.frame();
								}
								break;

							case 2:
								{
									this.state = 11;
									this.animationdefinition();
								}
								break;

							case 3:
								{
									this.state = 12;
									this.animationframe();
								}
								break;
						}
					}
					this.state = 15;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.HASH || _la === UQMGraphicsParser.WORD);
				this.state = 17;
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
				this.state = 19;
				_localctx._filename = this.match(UQMGraphicsParser.WORD);
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 20;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 23;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 25;
				_localctx._transparent_color = this.match(UQMGraphicsParser.INT);
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 26;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 29;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 31;
				_localctx._colormap_index = this.match(UQMGraphicsParser.INT);
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 32;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 37;
				_localctx._hotspot_x = this.match(UQMGraphicsParser.INT);
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 38;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 43;
				_localctx._hotspot_y = this.match(UQMGraphicsParser.INT);
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UQMGraphicsParser.WHITESPACE) {
					{
						{
							this.state = 44;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 49;
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
				this.state = 50;
				this.frame_part();
				this.state = 51;
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
	public animationdefinition(): AnimationdefinitionContext {
		let _localctx: AnimationdefinitionContext = new AnimationdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UQMGraphicsParser.RULE_animationdefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 53;
				this.match(UQMGraphicsParser.HASH);
				this.state = 54;
				this.match(UQMGraphicsParser.AT);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 55;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 60;
				this.match(UQMGraphicsParser.ANIDEF_HEADER);
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 61;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 64;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 66;
				_localctx._animation_number = this.match(UQMGraphicsParser.INT);
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 67;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 70;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 72;
				_localctx._animation_type = this.match(UQMGraphicsParser.ANIM_TYPE);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 73;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 78;
				this.match(UQMGraphicsParser.BLOCK_BEGIN);
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 79;
							_localctx._name = this._input.LT(1);
							_la = this._input.LA(1);
							if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMGraphicsParser.WHITESPACE) | (1 << UQMGraphicsParser.WORD) | (1 << UQMGraphicsParser.INT) | (1 << UQMGraphicsParser.FLOAT))) !== 0))) {
								_localctx._name = this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
						}
					}
					this.state = 82;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMGraphicsParser.WHITESPACE) | (1 << UQMGraphicsParser.WORD) | (1 << UQMGraphicsParser.INT) | (1 << UQMGraphicsParser.FLOAT))) !== 0));
				this.state = 84;
				this.match(UQMGraphicsParser.BLOCK_END);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UQMGraphicsParser.WHITESPACE) {
					{
						{
							this.state = 85;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 91;
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
		this.enterRule(_localctx, 8, UQMGraphicsParser.RULE_animationframe);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 93;
				this.match(UQMGraphicsParser.HASH);
				this.state = 94;
				this.match(UQMGraphicsParser.AT);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 95;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 100;
				this.match(UQMGraphicsParser.ANIFRAME_HEADER);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 101;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 106;
				_localctx._animation_number_reference = this.match(UQMGraphicsParser.INT);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 107;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 112;
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
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 113;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UQMGraphicsParser.WHITESPACE);
				this.state = 118;
				this.match(UQMGraphicsParser.BLOCK_BEGIN);
				this.state = 119;
				_localctx._frameref = this.frame_part();
				this.state = 120;
				this.match(UQMGraphicsParser.BLOCK_END);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UQMGraphicsParser.WHITESPACE) {
					{
						{
							this.state = 121;
							this.match(UQMGraphicsParser.WHITESPACE);
						}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 127;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F\x84\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x06\x03\x18\n\x03\r\x03\x0E\x03\x19\x03\x03\x03\x03\x06\x03" +
		"\x1E\n\x03\r\x03\x0E\x03\x1F\x03\x03\x03\x03\x06\x03$\n\x03\r\x03\x0E" +
		"\x03%\x03\x03\x03\x03\x06\x03*\n\x03\r\x03\x0E\x03+\x03\x03\x03\x03\x07" +
		"\x030\n\x03\f\x03\x0E\x033\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x06\x05;\n\x05\r\x05\x0E\x05<\x03\x05\x03\x05\x06\x05A\n\x05" +
		"\r\x05\x0E\x05B\x03\x05\x03\x05\x06\x05G\n\x05\r\x05\x0E\x05H\x03\x05" +
		"\x03\x05\x06\x05M\n\x05\r\x05\x0E\x05N\x03\x05\x03\x05\x06\x05S\n\x05" +
		"\r\x05\x0E\x05T\x03\x05\x03\x05\x07\x05Y\n\x05\f\x05\x0E\x05\\\v\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x06\x06c\n\x06\r\x06\x0E\x06d\x03" +
		"\x06\x03\x06\x06\x06i\n\x06\r\x06\x0E\x06j\x03\x06\x03\x06\x06\x06o\n" +
		"\x06\r\x06\x0E\x06p\x03\x06\x03\x06\x06\x06u\n\x06\r\x06\x0E\x06v\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06}\n\x06\f\x06\x0E\x06\x80\v\x06\x03" +
		"\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\x02\x04\x04\x02\n\n\f\x0E\x03\x02\r\x0E\x02\x91\x02\x0F\x03\x02\x02\x02" +
		"\x04\x15\x03\x02\x02\x02\x064\x03\x02\x02\x02\b7\x03\x02\x02\x02\n_\x03" +
		"\x02\x02\x02\f\x10\x05\x06\x04\x02\r\x10\x05\b\x05\x02\x0E\x10\x05\n\x06" +
		"\x02\x0F\f\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x0F\x0E\x03\x02\x02\x02" +
		"\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02" +
		"\x12\x13\x03\x02\x02\x02\x13\x14\x07\x02\x02\x03\x14\x03\x03\x02\x02\x02" +
		"\x15\x17\x07\f\x02\x02\x16\x18\x07\n\x02\x02\x17\x16\x03\x02\x02\x02\x18" +
		"\x19\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B\x1D\x07\r\x02\x02\x1C\x1E\x07\n\x02\x02\x1D\x1C" +
		"\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F " +
		"\x03\x02\x02\x02 !\x03\x02\x02\x02!#\x07\r\x02\x02\"$\x07\n\x02\x02#\"" +
		"\x03\x02\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02" +
		"&\'\x03\x02\x02\x02\')\x07\r\x02\x02(*\x07\n\x02\x02)(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-1\x07\r\x02\x02.0\x07\n\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02\x021" +
		"/\x03\x02\x02\x0212\x03\x02\x02\x022\x05\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0245\x05\x04\x03\x0256\x07\v\x02\x026\x07\x03\x02\x02\x0278\x07\x03" +
		"\x02\x028:\x07\x04\x02\x029;\x07\n\x02\x02:9\x03\x02\x02\x02;<\x03\x02" +
		"\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x07\x05" +
		"\x02\x02?A\x07\n\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02" +
		"\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x07\r\x02\x02EG\x07\n\x02" +
		"\x02FE\x03\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02" +
		"\x02IJ\x03\x02\x02\x02JL\x07\x07\x02\x02KM\x07\n\x02\x02LK\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02" +
		"\x02PR\x07\b\x02\x02QS\t\x02\x02\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VZ\x07\t\x02\x02" +
		"WY\x07\n\x02\x02XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02" +
		"Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^\x07\v\x02\x02" +
		"^\t\x03\x02\x02\x02_`\x07\x03\x02\x02`b\x07\x04\x02\x02ac\x07\n\x02\x02" +
		"ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02" +
		"ef\x03\x02\x02\x02fh\x07\x06\x02\x02gi\x07\n\x02\x02hg\x03\x02\x02\x02" +
		"ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"ln\x07\r\x02\x02mo\x07\n\x02\x02nm\x03\x02\x02\x02op\x03\x02\x02\x02p" +
		"n\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rt\t\x03\x02\x02" +
		"su\x07\n\x02\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07\b\x02\x02yz\x05\x04\x03\x02" +
		"z~\x07\t\x02\x02{}\x07\n\x02\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02" +
		"~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03" +
		"\x02\x02\x02\x81\x82\x07\v\x02\x02\x82\v\x03\x02\x02\x02\x14\x0F\x11\x19" +
		"\x1F%+1<BHNTZdjpv~";
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


export class AnimationdefinitionContext extends ParserRuleContext {
	public _animation_number: Token;
	public _animation_type: Token;
	public _name: Token;
	public HASH(): TerminalNode { return this.getToken(UQMGraphicsParser.HASH, 0); }
	public AT(): TerminalNode { return this.getToken(UQMGraphicsParser.AT, 0); }
	public ANIDEF_HEADER(): TerminalNode { return this.getToken(UQMGraphicsParser.ANIDEF_HEADER, 0); }
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
	public ANIM_TYPE(): TerminalNode { return this.getToken(UQMGraphicsParser.ANIM_TYPE, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WHITESPACE);
		} else {
			return this.getToken(UQMGraphicsParser.WHITESPACE, i);
		}
	}
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMGraphicsParser.WORD);
		} else {
			return this.getToken(UQMGraphicsParser.WORD, i);
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


