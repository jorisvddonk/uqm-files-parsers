// @ts-nocheck
// Generated from grammars/UQMTextSynchronization.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class UQMTextSynchronizationLexer extends Lexer {
	public static readonly HEADER_START = 1;
	public static readonly HEADER_END = 2;
	public static readonly WHITESPACE = 3;
	public static readonly NEWLINE = 4;
	public static readonly NUMBER = 5;
	public static readonly LOWERCASE_WORD = 6;
	public static readonly UPPERCASE_WORD = 7;
	public static readonly WORD = 8;
	public static readonly COMMA = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LOWERCASE", "UPPERCASE", "NUM", "HEADER_START", "HEADER_END", "WHITESPACE",
		"NEWLINE", "NUMBER", "LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "COMMA",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#('", "')'", undefined, undefined, undefined, undefined,
		undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER_START", "HEADER_END", "WHITESPACE", "NEWLINE", "NUMBER",
		"LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "COMMA",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMTextSynchronizationLexer._LITERAL_NAMES, UQMTextSynchronizationLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMTextSynchronizationLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(UQMTextSynchronizationLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "UQMTextSynchronization.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMTextSynchronizationLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMTextSynchronizationLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return UQMTextSynchronizationLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return UQMTextSynchronizationLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vN\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x05\b*\n\b\x03\b\x03\b\x06\b.\n" +
		"\b\r\b\x0E\b/\x03\t\x06\t3\n\t\r\t\x0E\t4\x03\n\x03\n\x03\n\x06\n:\n\n" +
		"\r\n\x0E\n;\x03\v\x03\v\x03\v\x06\vA\n\v\r\v\x0E\vB\x03\f\x03\f\x03\f" +
		"\x03\f\x06\fI\n\f\r\f\x0E\fJ\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x02\x05" +
		"\x02\x02\x07\x02\x02\t\x02\x03\v\x02\x04\r\x02\x05\x0F\x02\x06\x11\x02" +
		"\x07\x13\x02\b\x15\x02\t\x17\x02\n\x19\x02\v\x03\x02\x07\x03\x02c|\x03" +
		"\x02C\\\x03\x022;\x04\x02\v\v\"\"\x04\x02//aa\x02X\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05" +
		"\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\v$\x03" +
		"\x02\x02\x02\r&\x03\x02\x02\x02\x0F-\x03\x02\x02\x02\x112\x03\x02\x02" +
		"\x02\x139\x03\x02\x02\x02\x15@\x03\x02\x02\x02\x17H\x03\x02\x02\x02\x19" +
		"L\x03\x02\x02\x02\x1B\x1C\t\x02\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E" +
		"\t\x03\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \t\x04\x02\x02 \b\x03\x02\x02" +
		"\x02!\"\x07%\x02\x02\"#\x07*\x02\x02#\n\x03\x02\x02\x02$%\x07+\x02\x02" +
		"%\f\x03\x02\x02\x02&\'\t\x05\x02\x02\'\x0E\x03\x02\x02\x02(*\x07\x0F\x02" +
		"\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+.\x07\f\x02" +
		"\x02,.\x07\x0F\x02\x02-)\x03\x02\x02\x02-,\x03\x02\x02\x02./\x03\x02\x02" +
		"\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x10\x03\x02\x02\x0213\x05\x07" +
		"\x04\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02" +
		"\x02\x025\x12\x03\x02\x02\x026:\x05\x03\x02\x027:\x05\x07\x04\x028:\t" +
		"\x06\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x0298\x03\x02\x02\x02:;\x03" +
		"\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x14\x03\x02\x02\x02" +
		"=A\x05\x05\x03\x02>A\x05\x07\x04\x02?A\t\x06\x02\x02@=\x03\x02\x02\x02" +
		"@>\x03\x02\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02" +
		"BC\x03\x02\x02\x02C\x16\x03\x02\x02\x02DI\x05\x03\x02\x02EI\x05\x05\x03" +
		"\x02FI\x05\x07\x04\x02GI\t\x06\x02\x02HD\x03\x02\x02\x02HE\x03\x02\x02" +
		"\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02" +
		"\x02JK\x03\x02\x02\x02K\x18\x03\x02\x02\x02LM\x07.\x02\x02M\x1A\x03\x02" +
		"\x02\x02\r\x02)-/49;@BHJ\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMTextSynchronizationLexer.__ATN) {
			UQMTextSynchronizationLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMTextSynchronizationLexer._serializedATN));
		}

		return UQMTextSynchronizationLexer.__ATN;
	}

}

