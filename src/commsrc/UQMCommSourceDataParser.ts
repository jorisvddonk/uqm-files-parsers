// @ts-nocheck
// Generated from grammars/UQMCommSourceData.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { UQMCommSourceDataListener } from "./UQMCommSourceDataListener";
import { UQMCommSourceDataVisitor } from "./UQMCommSourceDataVisitor";


export class UQMCommSourceDataParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly HASH = 2;
	public static readonly AT = 3;
	public static readonly SLASH = 4;
	public static readonly ASTERISK = 5;
	public static readonly COMMA = 6;
	public static readonly BINARY_OR = 7;
	public static readonly BITSHIFT = 8;
	public static readonly BRACE_OPEN = 9;
	public static readonly BRACE_CLOSE = 10;
	public static readonly BLOCK_BEGIN = 11;
	public static readonly BLOCK_END = 12;
	public static readonly SEMICOLON = 13;
	public static readonly COLON = 14;
	public static readonly WHITESPACE_OR_NEWLINE = 15;
	public static readonly WHITESPACE = 16;
	public static readonly ANIMATION_TYPE = 17;
	public static readonly ANIMATION_FLAG = 18;
	public static readonly NEWLINE = 19;
	public static readonly SOMETHING = 20;
	public static readonly WORD = 21;
	public static readonly INT = 22;
	public static readonly FLOAT = 23;
	public static readonly BEGIN_LOCDATA = 24;
	public static readonly COMMENT_START = 25;
	public static readonly ML_COMMENT_BEGIN = 26;
	public static readonly ML_COMMENT_END = 27;
	public static readonly MULTILINE_COMMENT = 28;
	public static readonly COMMENT = 29;
	public static readonly REST = 30;
	public static readonly INCLUDE = 31;
	public static readonly NULL = 32;
	public static readonly RULE_sourcedata = 0;
	public static readonly RULE_locdata = 1;
	public static readonly RULE_animation = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourcedata", "locdata", "animation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'#'", "'@'", "'/'", "'*'", "','", "'|'", "'<<'", "'('", 
		"')'", "'{'", "'}'", "';'", "':'", undefined, undefined, undefined, "'WAIT_TALKING'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'NULL'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "HASH", "AT", "SLASH", "ASTERISK", "COMMA", "BINARY_OR", 
		"BITSHIFT", "BRACE_OPEN", "BRACE_CLOSE", "BLOCK_BEGIN", "BLOCK_END", "SEMICOLON", 
		"COLON", "WHITESPACE_OR_NEWLINE", "WHITESPACE", "ANIMATION_TYPE", "ANIMATION_FLAG", 
		"NEWLINE", "SOMETHING", "WORD", "INT", "FLOAT", "BEGIN_LOCDATA", "COMMENT_START", 
		"ML_COMMENT_BEGIN", "ML_COMMENT_END", "MULTILINE_COMMENT", "COMMENT", 
		"REST", "INCLUDE", "NULL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMCommSourceDataParser._LITERAL_NAMES, UQMCommSourceDataParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMCommSourceDataParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "UQMCommSourceData.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMCommSourceDataParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMCommSourceDataParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UQMCommSourceDataParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourcedata(): SourcedataContext {
		let _localctx: SourcedataContext = new SourcedataContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UQMCommSourceDataParser.RULE_sourcedata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 6;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 12;
			this.locdata();
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 13;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 18;
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
	public locdata(): LocdataContext {
		let _localctx: LocdataContext = new LocdataContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UQMCommSourceDataParser.RULE_locdata);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.match(UQMCommSourceDataParser.BEGIN_LOCDATA);
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 20;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
			this.state = 25;
			_localctx._locdata_struct_name = this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 26;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
			this.state = 31;
			this.match(UQMCommSourceDataParser.T__0);
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 32;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 38;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.match(UQMCommSourceDataParser.BLOCK_BEGIN);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 45;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 52;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 53;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 60;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 61;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 68;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 69;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 76;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 77;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 84;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 85;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 92;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 93;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 100;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 101;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(UQMCommSourceDataParser.BLOCK_BEGIN);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 108;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
			this.match(UQMCommSourceDataParser.INT);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 115;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 122;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(UQMCommSourceDataParser.INT);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 129;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.match(UQMCommSourceDataParser.BLOCK_END);
			this.state = 136;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 137;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(UQMCommSourceDataParser.INT);
			this.state = 144;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 145;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 152;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 153;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 160;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 161;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 168;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 169;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 175;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 176;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 177;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 184;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 185;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			_la = this._input.LA(1);
			if (!(_la === UQMCommSourceDataParser.SOMETHING || _la === UQMCommSourceDataParser.INT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 192;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 193;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 200;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 201;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(UQMCommSourceDataParser.INT);
			this.state = 208;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 209;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 215;
			this.match(UQMCommSourceDataParser.BLOCK_BEGIN);
			this.state = 219;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 216;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 222;
				_localctx._animation = this.animation();
				_localctx._alien_ambient_animations.push(_localctx._animation);
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UQMCommSourceDataParser.BLOCK_BEGIN || _la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
			this.state = 227;
			this.match(UQMCommSourceDataParser.BLOCK_END);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 228;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 238;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 235;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 241;
			_localctx._alien_transition_desc = this.animation();
			this.state = 242;
			_localctx._alien_talk_desc = this.animation();
			this.state = 243;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 244;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 245;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 252;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 253;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 260;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 261;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 267;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 268;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 269;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 275;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 276;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 277;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 283;
			this.match(UQMCommSourceDataParser.SOMETHING);
			this.state = 284;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 285;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
			this.match(UQMCommSourceDataParser.BLOCK_END);
			this.state = 292;
			this.match(UQMCommSourceDataParser.SEMICOLON);
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
	public animation(): AnimationContext {
		let _localctx: AnimationContext = new AnimationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UQMCommSourceDataParser.RULE_animation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 294;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 300;
			this.match(UQMCommSourceDataParser.BLOCK_BEGIN);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 301;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 307;
			_localctx._startIndex = this.match(UQMCommSourceDataParser.INT);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 308;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 314;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 315;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 321;
			_localctx._numFrames = this.match(UQMCommSourceDataParser.INT);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 322;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 329;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 335;
				_localctx.__tset369 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.ANIMATION_TYPE) | (1 << UQMCommSourceDataParser.ANIMATION_FLAG) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
					_localctx.__tset369 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._animFlags.push(_localctx.__tset369);
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.ANIMATION_TYPE) | (1 << UQMCommSourceDataParser.ANIMATION_FLAG) | (1 << UQMCommSourceDataParser.INT))) !== 0));
			this.state = 340;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 341;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 347;
				_localctx.__tset401 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
					_localctx.__tset401 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._frameRateLow.push(_localctx.__tset401);
				}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0));
			this.state = 352;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 353;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 359;
				_localctx.__tset437 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
					_localctx.__tset437 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._frameRateHigh.push(_localctx.__tset437);
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0));
			this.state = 364;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 365;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 371;
				_localctx.__tset473 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
					_localctx.__tset473 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._restartRateLow.push(_localctx.__tset473);
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0));
			this.state = 376;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 383;
				_localctx.__tset509 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
					_localctx.__tset509 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._restartRateHigh.push(_localctx.__tset509);
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.SLASH) | (1 << UQMCommSourceDataParser.ASTERISK) | (1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0));
			this.state = 388;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 389;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 396;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 395;
					_localctx.__tset545 = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UQMCommSourceDataParser.BINARY_OR) | (1 << UQMCommSourceDataParser.BITSHIFT) | (1 << UQMCommSourceDataParser.BRACE_OPEN) | (1 << UQMCommSourceDataParser.BRACE_CLOSE) | (1 << UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) | (1 << UQMCommSourceDataParser.SOMETHING) | (1 << UQMCommSourceDataParser.INT))) !== 0))) {
						_localctx.__tset545 = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					_localctx._blockMask.push(_localctx.__tset545);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UQMCommSourceDataParser.COMMA) {
				{
				this.state = 400;
				this.match(UQMCommSourceDataParser.COMMA);
				}
			}

			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 403;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 409;
			this.match(UQMCommSourceDataParser.BLOCK_END);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE) {
				{
				{
				this.state = 410;
				this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
			this.match(UQMCommSourceDataParser.COMMA);
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 417;
					this.match(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
					}
					}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u01AA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
		"\r\v\x02\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03" +
		"\x03\x03\x03\x06\x03\x18\n\x03\r\x03\x0E\x03\x19\x03\x03\x03\x03\x06\x03" +
		"\x1E\n\x03\r\x03\x0E\x03\x1F\x03\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E" +
		"\x03\'\v\x03\x03\x03\x07\x03*\n\x03\f\x03\x0E\x03-\v\x03\x03\x03\x03\x03" +
		"\x07\x031\n\x03\f\x03\x0E\x034\v\x03\x03\x03\x03\x03\x03\x03\x07\x039" +
		"\n\x03\f\x03\x0E\x03<\v\x03\x03\x03\x03\x03\x03\x03\x07\x03A\n\x03\f\x03" +
		"\x0E\x03D\v\x03\x03\x03\x03\x03\x03\x03\x07\x03I\n\x03\f\x03\x0E\x03L" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03Q\n\x03\f\x03\x0E\x03T\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03Y\n\x03\f\x03\x0E\x03\\\v\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03a\n\x03\f\x03\x0E\x03d\v\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03i\n\x03\f\x03\x0E\x03l\v\x03\x03\x03\x03\x03\x07\x03p\n\x03\f" +
		"\x03\x0E\x03s\v\x03\x03\x03\x03\x03\x07\x03w\n\x03\f\x03\x0E\x03z\v\x03" +
		"\x03\x03\x03\x03\x07\x03~\n\x03\f\x03\x0E\x03\x81\v\x03\x03\x03\x03\x03" +
		"\x07\x03\x85\n\x03\f\x03\x0E\x03\x88\v\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03\x8D\n\x03\f\x03\x0E\x03\x90\v\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"\x95\n\x03\f\x03\x0E\x03\x98\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\x9D" +
		"\n\x03\f\x03\x0E\x03\xA0\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xA5\n\x03" +
		"\f\x03\x0E\x03\xA8\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xAD\n\x03\f\x03" +
		"\x0E\x03\xB0\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xB5\n\x03\f\x03\x0E" +
		"\x03\xB8\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xBD\n\x03\f\x03\x0E\x03" +
		"\xC0\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xC5\n\x03\f\x03\x0E\x03\xC8" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\xCD\n\x03\f\x03\x0E\x03\xD0\v\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\xD5\n\x03\f\x03\x0E\x03\xD8\v\x03\x03" +
		"\x03\x03\x03\x07\x03\xDC\n\x03\f\x03\x0E\x03\xDF\v\x03\x03\x03\x06\x03" +
		"\xE2\n\x03\r\x03\x0E\x03\xE3\x03\x03\x03\x03\x07\x03\xE8\n\x03\f\x03\x0E" +
		"\x03\xEB\v\x03\x03\x03\x03\x03\x07\x03\xEF\n\x03\f\x03\x0E\x03\xF2\v\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xF9\n\x03\f\x03\x0E\x03" +
		"\xFC\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0101\n\x03\f\x03\x0E\x03\u0104" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0109\n\x03\f\x03\x0E\x03\u010C" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0111\n\x03\f\x03\x0E\x03\u0114" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0119\n\x03\f\x03\x0E\x03\u011C" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0121\n\x03\f\x03\x0E\x03\u0124" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x03\x04\x07\x04\u012A\n\x04\f\x04\x0E\x04" +
		"\u012D\v\x04\x03\x04\x03\x04\x07\x04\u0131\n\x04\f\x04\x0E\x04\u0134\v" +
		"\x04\x03\x04\x03\x04\x07\x04\u0138\n\x04\f\x04\x0E\x04\u013B\v\x04\x03" +
		"\x04\x03\x04\x07\x04\u013F\n\x04\f\x04\x0E\x04\u0142\v\x04\x03\x04\x03" +
		"\x04\x07\x04\u0146\n\x04\f\x04\x0E\x04\u0149\v\x04\x03\x04\x03\x04\x07" +
		"\x04\u014D\n\x04\f\x04\x0E\x04\u0150\v\x04\x03\x04\x06\x04\u0153\n\x04" +
		"\r\x04\x0E\x04\u0154\x03\x04\x03\x04\x07\x04\u0159\n\x04\f\x04\x0E\x04" +
		"\u015C\v\x04\x03\x04\x06\x04\u015F\n\x04\r\x04\x0E\x04\u0160\x03\x04\x03" +
		"\x04\x07\x04\u0165\n\x04\f\x04\x0E\x04\u0168\v\x04\x03\x04\x06\x04\u016B" +
		"\n\x04\r\x04\x0E\x04\u016C\x03\x04\x03\x04\x07\x04\u0171\n\x04\f\x04\x0E" +
		"\x04\u0174\v\x04\x03\x04\x06\x04\u0177\n\x04\r\x04\x0E\x04\u0178\x03\x04" +
		"\x03\x04\x07\x04\u017D\n\x04\f\x04\x0E\x04\u0180\v\x04\x03\x04\x06\x04" +
		"\u0183\n\x04\r\x04\x0E\x04\u0184\x03\x04\x03\x04\x07\x04\u0189\n\x04\f" +
		"\x04\x0E\x04\u018C\v\x04\x03\x04\x06\x04\u018F\n\x04\r\x04\x0E\x04\u0190" +
		"\x03\x04\x05\x04\u0194\n\x04\x03\x04\x07\x04\u0197\n\x04\f\x04\x0E\x04" +
		"\u019A\v\x04\x03\x04\x03\x04\x07\x04\u019E\n\x04\f\x04\x0E\x04\u01A1\v" +
		"\x04\x03\x04\x03\x04\x07\x04\u01A5\n\x04\f\x04\x0E\x04\u01A8\v\x04\x03" +
		"\x04\x02\x02\x02\x05\x02\x02\x04\x02\x06\x02\x02\x06\x04\x02\x16\x16\x18" +
		"\x18\x06\x02\t\t\x11\x11\x13\x14\x18\x18\x07\x02\x06\x07\t\t\x11\x11\x16" +
		"\x16\x18\x18\x06\x02\t\f\x11\x11\x16\x16\x18\x18\x02\u01E1\x02\v\x03\x02" +
		"\x02\x02\x04\x15\x03\x02\x02\x02\x06\u012B\x03\x02\x02\x02\b\n\x07\x11" +
		"\x02\x02\t\b\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v" +
		"\f\x03\x02\x02\x02\f\x0E\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x12\x05" +
		"\x04\x03\x02\x0F\x11\x07\x11\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x14\x03" +
		"\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x03\x03" +
		"\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x17\x07\x1A\x02\x02\x16\x18\x07" +
		"\x11\x02\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x17\x03" +
		"\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1D\x07" +
		"\x16\x02\x02\x1C\x1E\x07\x11\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E\x1F\x03" +
		"\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02\x02" +
		"\x02!%\x07\x03\x02\x02\"$\x07\x11\x02\x02#\"\x03\x02\x02\x02$\'\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&+\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02(*\x07\x11\x02\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03" +
		"\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02.2\x07" +
		"\r\x02\x02/1\x07\x11\x02\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03" +
		"\x02\x02\x0223\x03\x02\x02\x0235\x03\x02\x02\x0242\x03\x02\x02\x0256\x07" +
		"\x16\x02\x026:\x07\b\x02\x0279\x07\x11\x02\x0287\x03\x02\x02\x029<\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03" +
		"\x02\x02\x02=>\x07\x16\x02\x02>B\x07\b\x02\x02?A\x07\x11\x02\x02@?\x03" +
		"\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03" +
		"\x02\x02\x02DB\x03\x02\x02\x02EF\x07\x16\x02\x02FJ\x07\b\x02\x02GI\x07" +
		"\x11\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03" +
		"\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x16\x02\x02NR\x07" +
		"\b\x02\x02OQ\x07\x11\x02\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03" +
		"\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02UV\x07" +
		"\x16\x02\x02VZ\x07\b\x02\x02WY\x07\x11\x02\x02XW\x03\x02\x02\x02Y\\\x03" +
		"\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z" +
		"\x03\x02\x02\x02]^\x07\x16\x02\x02^b\x07\b\x02\x02_a\x07\x11\x02\x02`" +
		"_\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"ce\x03\x02\x02\x02db\x03\x02\x02\x02ef\x07\x16\x02\x02fj\x07\b\x02\x02" +
		"gi\x07\x11\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02" +
		"jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02mq\x07\r\x02\x02" +
		"np\x07\x11\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02" +
		"qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tx\x07\x18\x02\x02" +
		"uw\x07\x11\x02\x02vu\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02{\x7F\x07\b\x02" +
		"\x02|~\x07\x11\x02\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x7F\x03" +
		"\x02\x02\x02\x82\x86\x07\x18\x02\x02\x83\x85\x07\x11\x02\x02\x84\x83\x03" +
		"\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03" +
		"\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07" +
		"\x0E\x02\x02\x8A\x8E\x07\b\x02\x02\x8B\x8D\x07\x11\x02\x02\x8C\x8B\x03" +
		"\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07" +
		"\x18\x02\x02\x92\x96\x07\b\x02\x02\x93\x95\x07\x11\x02\x02\x94\x93\x03" +
		"\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03" +
		"\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07" +
		"\x16\x02\x02\x9A\x9E\x07\b\x02\x02\x9B\x9D\x07\x11\x02\x02\x9C\x9B\x03" +
		"\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x07" +
		"\x16\x02\x02\xA2\xA6\x07\b\x02\x02\xA3\xA5\x07\x11\x02\x02\xA4\xA3\x03" +
		"\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03" +
		"\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07" +
		"\x16\x02\x02\xAA\xAE\x07\b\x02\x02\xAB\xAD\x07\x11\x02\x02\xAC\xAB\x03" +
		"\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03" +
		"\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB2\x07" +
		"\x16\x02\x02\xB2\xB6\x07\b\x02\x02\xB3\xB5\x07\x11\x02\x02\xB4\xB3\x03" +
		"\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07" +
		"\x16\x02\x02\xBA\xBE\x07\b\x02\x02\xBB\xBD\x07\x11\x02\x02\xBC\xBB\x03" +
		"\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03" +
		"\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\t" +
		"\x02\x02\x02\xC2\xC6\x07\b\x02\x02\xC3\xC5\x07\x11\x02\x02\xC4\xC3\x03" +
		"\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03" +
		"\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07" +
		"\x16\x02\x02\xCA\xCE\x07\b\x02\x02\xCB\xCD\x07\x11\x02\x02\xCC\xCB\x03" +
		"\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03" +
		"\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07" +
		"\x18\x02\x02\xD2\xD6\x07\b\x02\x02\xD3\xD5\x07\x11\x02\x02\xD4\xD3\x03" +
		"\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03" +
		"\x02\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDD\x07" +
		"\r\x02\x02\xDA\xDC\x07\x11\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03" +
		"\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE1\x03" +
		"\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE2\x05\x06\x04\x02\xE1\xE0\x03" +
		"\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE9\x07\x0E\x02\x02\xE6\xE8\x07" +
		"\x11\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03" +
		"\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03" +
		"\x02\x02\x02\xEC\xF0\x07\b\x02\x02\xED\xEF\x07\x11\x02\x02\xEE\xED\x03" +
		"\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03" +
		"\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF4\x05" +
		"\x06\x04\x02\xF4\xF5\x05\x06\x04\x02\xF5\xF6\x07\x16\x02\x02\xF6\xFA\x07" +
		"\b\x02\x02\xF7\xF9\x07\x11\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9\xFC\x03" +
		"\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFE\x07\x16\x02\x02\xFE\u0102" +
		"\x07\b\x02\x02\xFF\u0101\x07\x11\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101" +
		"\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02" +
		"\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105" +
		"\u0106\x07\x16\x02\x02\u0106\u010A\x07\b\x02\x02\u0107\u0109\x07\x11\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108" +
		"\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02" +
		"\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x07\x16\x02\x02\u010E\u0112\x07" +
		"\b\x02\x02\u010F\u0111\x07\x11\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
		"\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02" +
		"\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115" +
		"\u0116\x07\x16\x02\x02\u0116\u011A\x07\b\x02\x02\u0117\u0119\x07\x11\x02" +
		"\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118" +
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02" +
		"\u011C\u011A\x03\x02\x02\x02\u011D\u011E\x07\x16\x02\x02\u011E\u0122\x07" +
		"\b\x02\x02\u011F\u0121\x07\x11\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121" +
		"\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02" +
		"\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125" +
		"\u0126\x07\x0E\x02\x02\u0126\u0127\x07\x0F\x02\x02\u0127\x05\x03\x02\x02" +
		"\x02\u0128\u012A\x07\x11\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u012D" +
		"\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C\u012E\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0132\x07" +
		"\r\x02\x02\u012F\u0131\x07\x11\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135" +
		"\u0139\x07\x18\x02\x02\u0136\u0138\x07\x11\x02\x02\u0137\u0136\x03\x02" +
		"\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B\u0139\x03\x02" +
		"\x02\x02\u013C\u0140\x07\b\x02\x02\u013D\u013F\x07\x11\x02\x02\u013E\u013D" +
		"\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02" +
		"\u0140\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0143\u0147\x07\x18\x02\x02\u0144\u0146\x07\x11\x02\x02\u0145" +
		"\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02" +
		"\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149" +
		"\u0147\x03\x02\x02\x02\u014A\u014E\x07\b\x02\x02\u014B\u014D\x07\x11\x02" +
		"\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C" +
		"\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02" +
		"\u0150\u014E\x03\x02\x02\x02\u0151\u0153\t\x03\x02\x02\u0152\u0151\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
		"\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u015A\x07\b\x02" +
		"\x02\u0157\u0159\x07\x11\x02\x02\u0158\u0157\x03\x02\x02\x02\u0159\u015C" +
		"\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02" +
		"\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D\u015F\t" +
		"\x04\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0166\x07\b\x02\x02\u0163\u0165\x07\x11\x02\x02\u0164\u0163" +
		"\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03" +
		"\x02\x02\x02\u0169\u016B\t\x04\x02\x02\u016A\u0169\x03\x02\x02\x02\u016B" +
		"\u016C\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0172\x07\b\x02\x02\u016F\u0171" +
		"\x07\x11\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02" +
		"\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0176\x03" +
		"\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0177\t\x04\x02\x02\u0176" +
		"\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0176\x03\x02" +
		"\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017E\x07\b\x02\x02\u017B\u017D\x07\x11\x02\x02\u017C\u017B\x03\x02\x02" +
		"\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F" +
		"\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02" +
		"\u0181\u0183\t\x04\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0184\x03" +
		"\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0186\x03\x02\x02\x02\u0186\u018A\x07\b\x02\x02\u0187\u0189\x07\x11\x02" +
		"\x02\u0188\u0187\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188" +
		"\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018D\u018F\t\x05\x02\x02\u018E\u018D\x03" +
		"\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190" +
		"\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x07\b\x02" +
		"\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0198" +
		"\x03\x02\x02\x02\u0195\u0197\x07\x11\x02\x02\u0196\u0195\x03\x02\x02\x02" +
		"\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03" +
		"\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B" +
		"\u019F\x07\x0E\x02\x02\u019C\u019E\x07\x11\x02\x02\u019D\u019C\x03\x02" +
		"\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A2\u01A6\x07\b\x02\x02\u01A3\u01A5\x07\x11\x02\x02\u01A4\u01A3" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7\x07\x03\x02\x02\x02\u01A8\u01A6\x03" +
		"\x02\x02\x02=\v\x12\x19\x1F%+2:BJRZbjqx\x7F\x86\x8E\x96\x9E\xA6\xAE\xB6" +
		"\xBE\xC6\xCE\xD6\xDD\xE3\xE9\xF0\xFA\u0102\u010A\u0112\u011A\u0122\u012B" +
		"\u0132\u0139\u0140\u0147\u014E\u0154\u015A\u0160\u0166\u016C\u0172\u0178" +
		"\u017E\u0184\u018A\u0190\u0193\u0198\u019F\u01A6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMCommSourceDataParser.__ATN) {
			UQMCommSourceDataParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMCommSourceDataParser._serializedATN));
		}

		return UQMCommSourceDataParser.__ATN;
	}

}

export class SourcedataContext extends ParserRuleContext {
	public locdata(): LocdataContext {
		return this.getRuleContext(0, LocdataContext);
	}
	public WHITESPACE_OR_NEWLINE(): TerminalNode[];
	public WHITESPACE_OR_NEWLINE(i: number): TerminalNode;
	public WHITESPACE_OR_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
		} else {
			return this.getToken(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMCommSourceDataParser.RULE_sourcedata; }
	// @Override
	public enterRule(listener: UQMCommSourceDataListener): void {
		if (listener.enterSourcedata) {
			listener.enterSourcedata(this);
		}
	}
	// @Override
	public exitRule(listener: UQMCommSourceDataListener): void {
		if (listener.exitSourcedata) {
			listener.exitSourcedata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMCommSourceDataVisitor<Result>): Result {
		if (visitor.visitSourcedata) {
			return visitor.visitSourcedata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocdataContext extends ParserRuleContext {
	public _locdata_struct_name: Token;
	public _animation: AnimationContext;
	public _alien_ambient_animations: AnimationContext[] = [];
	public _alien_transition_desc: AnimationContext;
	public _alien_talk_desc: AnimationContext;
	public BEGIN_LOCDATA(): TerminalNode { return this.getToken(UQMCommSourceDataParser.BEGIN_LOCDATA, 0); }
	public BLOCK_BEGIN(): TerminalNode[];
	public BLOCK_BEGIN(i: number): TerminalNode;
	public BLOCK_BEGIN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BLOCK_BEGIN);
		} else {
			return this.getToken(UQMCommSourceDataParser.BLOCK_BEGIN, i);
		}
	}
	public SOMETHING(): TerminalNode[];
	public SOMETHING(i: number): TerminalNode;
	public SOMETHING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.SOMETHING);
		} else {
			return this.getToken(UQMCommSourceDataParser.SOMETHING, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.COMMA);
		} else {
			return this.getToken(UQMCommSourceDataParser.COMMA, i);
		}
	}
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.INT);
		} else {
			return this.getToken(UQMCommSourceDataParser.INT, i);
		}
	}
	public BLOCK_END(): TerminalNode[];
	public BLOCK_END(i: number): TerminalNode;
	public BLOCK_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BLOCK_END);
		} else {
			return this.getToken(UQMCommSourceDataParser.BLOCK_END, i);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(UQMCommSourceDataParser.SEMICOLON, 0); }
	public animation(): AnimationContext[];
	public animation(i: number): AnimationContext;
	public animation(i?: number): AnimationContext | AnimationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnimationContext);
		} else {
			return this.getRuleContext(i, AnimationContext);
		}
	}
	public WHITESPACE_OR_NEWLINE(): TerminalNode[];
	public WHITESPACE_OR_NEWLINE(i: number): TerminalNode;
	public WHITESPACE_OR_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
		} else {
			return this.getToken(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMCommSourceDataParser.RULE_locdata; }
	// @Override
	public enterRule(listener: UQMCommSourceDataListener): void {
		if (listener.enterLocdata) {
			listener.enterLocdata(this);
		}
	}
	// @Override
	public exitRule(listener: UQMCommSourceDataListener): void {
		if (listener.exitLocdata) {
			listener.exitLocdata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMCommSourceDataVisitor<Result>): Result {
		if (visitor.visitLocdata) {
			return visitor.visitLocdata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnimationContext extends ParserRuleContext {
	public _startIndex: Token;
	public _numFrames: Token;
	public _ANIMATION_TYPE: Token;
	public _animFlags: Token[] = [];
	public _BINARY_OR: Token;
	public _WHITESPACE_OR_NEWLINE: Token;
	public _ANIMATION_FLAG: Token;
	public _INT: Token;
	public __tset369: Token;
	public _SOMETHING: Token;
	public _frameRateLow: Token[] = [];
	public _SLASH: Token;
	public _ASTERISK: Token;
	public __tset401: Token;
	public _frameRateHigh: Token[] = [];
	public __tset437: Token;
	public _restartRateLow: Token[] = [];
	public __tset473: Token;
	public _restartRateHigh: Token[] = [];
	public __tset509: Token;
	public _blockMask: Token[] = [];
	public _BRACE_OPEN: Token;
	public _BRACE_CLOSE: Token;
	public _BITSHIFT: Token;
	public __tset545: Token;
	public BLOCK_BEGIN(): TerminalNode { return this.getToken(UQMCommSourceDataParser.BLOCK_BEGIN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.COMMA);
		} else {
			return this.getToken(UQMCommSourceDataParser.COMMA, i);
		}
	}
	public BLOCK_END(): TerminalNode { return this.getToken(UQMCommSourceDataParser.BLOCK_END, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.INT);
		} else {
			return this.getToken(UQMCommSourceDataParser.INT, i);
		}
	}
	public WHITESPACE_OR_NEWLINE(): TerminalNode[];
	public WHITESPACE_OR_NEWLINE(i: number): TerminalNode;
	public WHITESPACE_OR_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE);
		} else {
			return this.getToken(UQMCommSourceDataParser.WHITESPACE_OR_NEWLINE, i);
		}
	}
	public ANIMATION_TYPE(): TerminalNode[];
	public ANIMATION_TYPE(i: number): TerminalNode;
	public ANIMATION_TYPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.ANIMATION_TYPE);
		} else {
			return this.getToken(UQMCommSourceDataParser.ANIMATION_TYPE, i);
		}
	}
	public BINARY_OR(): TerminalNode[];
	public BINARY_OR(i: number): TerminalNode;
	public BINARY_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BINARY_OR);
		} else {
			return this.getToken(UQMCommSourceDataParser.BINARY_OR, i);
		}
	}
	public ANIMATION_FLAG(): TerminalNode[];
	public ANIMATION_FLAG(i: number): TerminalNode;
	public ANIMATION_FLAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.ANIMATION_FLAG);
		} else {
			return this.getToken(UQMCommSourceDataParser.ANIMATION_FLAG, i);
		}
	}
	public SOMETHING(): TerminalNode[];
	public SOMETHING(i: number): TerminalNode;
	public SOMETHING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.SOMETHING);
		} else {
			return this.getToken(UQMCommSourceDataParser.SOMETHING, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.SLASH);
		} else {
			return this.getToken(UQMCommSourceDataParser.SLASH, i);
		}
	}
	public ASTERISK(): TerminalNode[];
	public ASTERISK(i: number): TerminalNode;
	public ASTERISK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.ASTERISK);
		} else {
			return this.getToken(UQMCommSourceDataParser.ASTERISK, i);
		}
	}
	public BRACE_OPEN(): TerminalNode[];
	public BRACE_OPEN(i: number): TerminalNode;
	public BRACE_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BRACE_OPEN);
		} else {
			return this.getToken(UQMCommSourceDataParser.BRACE_OPEN, i);
		}
	}
	public BRACE_CLOSE(): TerminalNode[];
	public BRACE_CLOSE(i: number): TerminalNode;
	public BRACE_CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BRACE_CLOSE);
		} else {
			return this.getToken(UQMCommSourceDataParser.BRACE_CLOSE, i);
		}
	}
	public BITSHIFT(): TerminalNode[];
	public BITSHIFT(i: number): TerminalNode;
	public BITSHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UQMCommSourceDataParser.BITSHIFT);
		} else {
			return this.getToken(UQMCommSourceDataParser.BITSHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UQMCommSourceDataParser.RULE_animation; }
	// @Override
	public enterRule(listener: UQMCommSourceDataListener): void {
		if (listener.enterAnimation) {
			listener.enterAnimation(this);
		}
	}
	// @Override
	public exitRule(listener: UQMCommSourceDataListener): void {
		if (listener.exitAnimation) {
			listener.exitAnimation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UQMCommSourceDataVisitor<Result>): Result {
		if (visitor.visitAnimation) {
			return visitor.visitAnimation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


