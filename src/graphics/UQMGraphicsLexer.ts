// @ts-nocheck
// Generated from grammars/UQMGraphics.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class UQMGraphicsLexer extends Lexer {
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
	public static readonly NUMBER = 11;
	public static readonly COMMENT = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LOWERCASE", "UPPERCASE", "NUM", "NEGATIVE", "HASH", "AT", "ANIDEF_HEADER",
		"ANIFRAME_HEADER", "ANIM_TYPE", "BLOCK_BEGIN", "BLOCK_END", "WHITESPACE",
		"NEWLINE", "WORD", "NUMBER", "COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#'", "'@'", "'anidef'", "'aniframe'", undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HASH", "AT", "ANIDEF_HEADER", "ANIFRAME_HEADER", "ANIM_TYPE",
		"BLOCK_BEGIN", "BLOCK_END", "WHITESPACE", "NEWLINE", "WORD", "NUMBER",
		"COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMGraphicsLexer._LITERAL_NAMES, UQMGraphicsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMGraphicsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(UQMGraphicsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "UQMGraphics.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMGraphicsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMGraphicsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return UQMGraphicsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return UQMGraphicsLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E\x92\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\na\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x05\x0Ej\n\x0E\x03\x0E\x03\x0E\x06\x0En\n\x0E\r\x0E\x0E\x0Eo\x03" +
		"\x0F\x03\x0F\x05\x0Ft\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0Fz\n" +
		"\x0F\r\x0F\x0E\x0F{\x03\x10\x05\x10\x7F\n\x10\x03\x10\x03\x10\x06\x10" +
		"\x83\n\x10\r\x10\x0E\x10\x84\x03\x11\x03\x11\x03\x11\x07\x11\x8A\n\x11" +
		"\f\x11\x0E\x11\x8D\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12" +
		"\x03\x02\x02\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02\x03\r\x02\x04\x0F" +
		"\x02\x05\x11\x02\x06\x13\x02\x07\x15\x02\b\x17\x02\t\x19\x02\n\x1B\x02" +
		"\v\x1D\x02\f\x1F\x02\r!\x02\x0E\x03\x02\t\x03\x02c|\x03\x02C\\\x03\x02" +
		"2;\x04\x02\v\v\"\"\x04\x02/0aa\x03\x02BB\x04\x02\f\f\x0F\x0F\x02\x9D\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03" +
		"\x02\x02\x02\x05%\x03\x02\x02\x02\x07\'\x03\x02\x02\x02\t)\x03\x02\x02" +
		"\x02\v+\x03\x02\x02\x02\r-\x03\x02\x02\x02\x0F/\x03\x02\x02\x02\x116\x03" +
		"\x02\x02\x02\x13`\x03\x02\x02\x02\x15b\x03\x02\x02\x02\x17d\x03\x02\x02" +
		"\x02\x19f\x03\x02\x02\x02\x1Bm\x03\x02\x02\x02\x1Ds\x03\x02\x02\x02\x1F" +
		"~\x03\x02\x02\x02!\x86\x03\x02\x02\x02#$\t\x02\x02\x02$\x04\x03\x02\x02" +
		"\x02%&\t\x03\x02\x02&\x06\x03\x02\x02\x02\'(\t\x04\x02\x02(\b\x03\x02" +
		"\x02\x02)*\x07/\x02\x02*\n\x03\x02\x02\x02+,\x07%\x02\x02,\f\x03\x02\x02" +
		"\x02-.\x07B\x02\x02.\x0E\x03\x02\x02\x02/0\x07c\x02\x0201\x07p\x02\x02" +
		"12\x07k\x02\x0223\x07f\x02\x0234\x07g\x02\x0245\x07h\x02\x025\x10\x03" +
		"\x02\x02\x0267\x07c\x02\x0278\x07p\x02\x0289\x07k\x02\x029:\x07h\x02\x02" +
		":;\x07t\x02\x02;<\x07c\x02\x02<=\x07o\x02\x02=>\x07g\x02\x02>\x12\x03" +
		"\x02\x02\x02?@\x07D\x02\x02@A\x07C\x02\x02AB\x07E\x02\x02BC\x07M\x02\x02" +
		"CD\x07I\x02\x02DE\x07T\x02\x02EF\x07Q\x02\x02FG\x07W\x02\x02GH\x07P\x02" +
		"\x02Ha\x07F\x02\x02IJ\x07E\x02\x02JK\x07K\x02\x02KL\x07T\x02\x02LM\x07" +
		"E\x02\x02MN\x07W\x02\x02NO\x07N\x02\x02OP\x07C\x02\x02Pa\x07T\x02\x02" +
		"QR\x07[\x02\x02RS\x07Q\x02\x02ST\x07a\x02\x02TU\x07[\x02\x02Ua\x07Q\x02" +
		"\x02VW\x07V\x02\x02WX\x07C\x02\x02XY\x07N\x02\x02Ya\x07M\x02\x02Z[\x07" +
		"T\x02\x02[\\\x07C\x02\x02\\]\x07P\x02\x02]^\x07F\x02\x02^_\x07Q\x02\x02" +
		"_a\x07O\x02\x02`?\x03\x02\x02\x02`I\x03\x02\x02\x02`Q\x03\x02\x02\x02" +
		"`V\x03\x02\x02\x02`Z\x03\x02\x02\x02a\x14\x03\x02\x02\x02bc\x07]\x02\x02" +
		"c\x16\x03\x02\x02\x02de\x07_\x02\x02e\x18\x03\x02\x02\x02fg\t\x05\x02" +
		"\x02g\x1A\x03\x02\x02\x02hj\x07\x0F\x02\x02ih\x03\x02\x02\x02ij\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02kn\x07\f\x02\x02ln\x07\x0F\x02\x02mi\x03\x02" +
		"\x02\x02ml\x03\x02\x02\x02no\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02" +
		"\x02\x02p\x1C\x03\x02\x02\x02qt\x05\x03\x02\x02rt\x05\x05\x03\x02sq\x03" +
		"\x02\x02\x02sr\x03\x02\x02\x02ty\x03\x02\x02\x02uz\x05\x03\x02\x02vz\x05" +
		"\x05\x03\x02wz\x05\x07\x04\x02xz\t\x06\x02\x02yu\x03\x02\x02\x02yv\x03" +
		"\x02\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z{\x03\x02\x02\x02{y\x03" +
		"\x02\x02\x02{|\x03\x02\x02\x02|\x1E\x03\x02\x02\x02}\x7F\x05\t\x05\x02" +
		"~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80\x83" +
		"\x05\x07\x04\x02\x81\x83\x070\x02\x02\x82\x80\x03\x02\x02\x02\x82\x81" +
		"\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85 \x03\x02\x02\x02\x86\x87\x05\v\x06\x02\x87\x8B\n" +
		"\x07\x02\x02\x88\x8A\n\b\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x8D\x03\x02" +
		"\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x05\x1B\x0E\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x91\b\x11\x02\x02\x91\"\x03\x02\x02\x02\x0E\x02`imosy{~\x82" +
		"\x84\x8B\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMGraphicsLexer.__ATN) {
			UQMGraphicsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMGraphicsLexer._serializedATN));
		}

		return UQMGraphicsLexer.__ATN;
	}

}
