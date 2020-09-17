// @ts-nocheck
// Generated from grammars/UQMTextLocalization.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class UQMTextLocalizationLexer extends Lexer {
	public static readonly HEADER_START = 1;
	public static readonly HEADER_END = 2;
	public static readonly AUDIOFILE = 3;
	public static readonly WHITESPACE = 4;
	public static readonly NEWLINE = 5;
	public static readonly LOWERCASE_WORD = 6;
	public static readonly UPPERCASE_WORD = 7;
	public static readonly WORD = 8;
	public static readonly PUNCTUATION = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LOWERCASE", "UPPERCASE", "NUMBER", "HEADER_START", "HEADER_END", "AUDIOFILE",
		"WHITESPACE", "NEWLINE", "LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "PUNCTUATION",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER_START", "HEADER_END", "AUDIOFILE", "WHITESPACE", "NEWLINE",
		"LOWERCASE_WORD", "UPPERCASE_WORD", "WORD", "PUNCTUATION",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UQMTextLocalizationLexer._LITERAL_NAMES, UQMTextLocalizationLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UQMTextLocalizationLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(UQMTextLocalizationLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "UQMTextLocalization.g4"; }

	// @Override
	public get ruleNames(): string[] { return UQMTextLocalizationLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return UQMTextLocalizationLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return UQMTextLocalizationLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return UQMTextLocalizationLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vV\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07+\n\x07\r\x07" +
		"\x0E\x07,\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x05" +
		"\t7\n\t\x03\t\x03\t\x06\t;\n\t\r\t\x0E\t<\x03\n\x03\n\x03\n\x06\nB\n\n" +
		"\r\n\x0E\nC\x03\v\x03\v\x03\v\x06\vI\n\v\r\v\x0E\vJ\x03\f\x03\f\x03\f" +
		"\x03\f\x06\fQ\n\f\r\f\x0E\fR\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x02\x05" +
		"\x02\x02\x07\x02\x02\t\x02\x03\v\x02\x04\r\x02\x05\x0F\x02\x06\x11\x02" +
		"\x07\x13\x02\b\x15\x02\t\x17\x02\n\x19\x02\v\x03\x02\b\x03\x02c|\x03\x02" +
		"C\\\x03\x022;\x04\x02//aa\x04\x02\v\v\"\"\b\x02#$&,.0<>@Bab\x02c\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03" +
		"\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02" +
		"\x02\x02\v$\x03\x02\x02\x02\r*\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x11" +
		":\x03\x02\x02\x02\x13A\x03\x02\x02\x02\x15H\x03\x02\x02\x02\x17P\x03\x02" +
		"\x02\x02\x19T\x03\x02\x02\x02\x1B\x1C\t\x02\x02\x02\x1C\x04\x03\x02\x02" +
		"\x02\x1D\x1E\t\x03\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \t\x04\x02\x02" +
		" \b\x03\x02\x02\x02!\"\x07%\x02\x02\"#\x07*\x02\x02#\n\x03\x02\x02\x02" +
		"$%\x07+\x02\x02%\f\x03\x02\x02\x02&+\x05\x03\x02\x02\'+\x05\x05\x03\x02" +
		"(+\x05\x07\x04\x02)+\t\x05\x02\x02*&\x03\x02\x02\x02*\'\x03\x02\x02\x02" +
		"*(\x03\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-.\x03\x02\x02\x02./\x070\x02\x02/0\x07q\x02\x0201\x07" +
		"i\x02\x0212\x07i\x02\x022\x0E\x03\x02\x02\x0234\t\x06\x02\x024\x10\x03" +
		"\x02\x02\x0257\x07\x0F\x02\x0265\x03\x02\x02\x0267\x03\x02\x02\x0278\x03" +
		"\x02\x02\x028;\x07\f\x02\x029;\x07\x0F\x02\x02:6\x03\x02\x02\x02:9\x03" +
		"\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x12" +
		"\x03\x02\x02\x02>B\x05\x03\x02\x02?B\x05\x07\x04\x02@B\t\x05\x02\x02A" +
		">\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\x14\x03\x02\x02\x02EI\x05\x05\x03" +
		"\x02FI\x05\x07\x04\x02GI\t\x05\x02\x02HE\x03\x02\x02\x02HF\x03\x02\x02" +
		"\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02K\x16\x03\x02\x02\x02LQ\x05\x03\x02\x02MQ\x05\x05\x03\x02NQ\x05\x07" +
		"\x04\x02OQ\t\x05\x02\x02PL\x03\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02" +
		"\x02\x02PO\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02" +
		"\x02\x02S\x18\x03\x02\x02\x02TU\t\x07\x02\x02U\x1A\x03\x02\x02\x02\x0E" +
		"\x02*,6:<ACHJPR\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UQMTextLocalizationLexer.__ATN) {
			UQMTextLocalizationLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UQMTextLocalizationLexer._serializedATN));
		}

		return UQMTextLocalizationLexer.__ATN;
	}

}

