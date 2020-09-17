// @ts-nocheck
// Generated from grammars/UQMTextLocalization.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LocalizationsContext } from "./UQMTextLocalizationParser";
import { Alien_headerContext } from "./UQMTextLocalizationParser";
import { Zelnick_headerContext } from "./UQMTextLocalizationParser";
import { TextContext } from "./UQMTextLocalizationParser";
import { LineContext } from "./UQMTextLocalizationParser";
import { Alien_localizationContext } from "./UQMTextLocalizationParser";
import { Zelnick_localizationContext } from "./UQMTextLocalizationParser";
import { LocalizationContext } from "./UQMTextLocalizationParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UQMTextLocalizationParser`.
 */
export interface UQMTextLocalizationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.localizations`.
	 * @param ctx the parse tree
	 */
	enterLocalizations?: (ctx: LocalizationsContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.localizations`.
	 * @param ctx the parse tree
	 */
	exitLocalizations?: (ctx: LocalizationsContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.alien_header`.
	 * @param ctx the parse tree
	 */
	enterAlien_header?: (ctx: Alien_headerContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.alien_header`.
	 * @param ctx the parse tree
	 */
	exitAlien_header?: (ctx: Alien_headerContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.zelnick_header`.
	 * @param ctx the parse tree
	 */
	enterZelnick_header?: (ctx: Zelnick_headerContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.zelnick_header`.
	 * @param ctx the parse tree
	 */
	exitZelnick_header?: (ctx: Zelnick_headerContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.alien_localization`.
	 * @param ctx the parse tree
	 */
	enterAlien_localization?: (ctx: Alien_localizationContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.alien_localization`.
	 * @param ctx the parse tree
	 */
	exitAlien_localization?: (ctx: Alien_localizationContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.zelnick_localization`.
	 * @param ctx the parse tree
	 */
	enterZelnick_localization?: (ctx: Zelnick_localizationContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.zelnick_localization`.
	 * @param ctx the parse tree
	 */
	exitZelnick_localization?: (ctx: Zelnick_localizationContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextLocalizationParser.localization`.
	 * @param ctx the parse tree
	 */
	enterLocalization?: (ctx: LocalizationContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextLocalizationParser.localization`.
	 * @param ctx the parse tree
	 */
	exitLocalization?: (ctx: LocalizationContext) => void;
}

