// Generated from grammars/UQMTextLocalization.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LocalizationsContext } from "./UQMTextLocalizationParser";
import { Alien_headerContext } from "./UQMTextLocalizationParser";
import { Zelnick_headerContext } from "./UQMTextLocalizationParser";
import { TextContext } from "./UQMTextLocalizationParser";
import { LineContext } from "./UQMTextLocalizationParser";
import { Alien_localizationContext } from "./UQMTextLocalizationParser";
import { Zelnick_localizationContext } from "./UQMTextLocalizationParser";
import { LocalizationContext } from "./UQMTextLocalizationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UQMTextLocalizationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UQMTextLocalizationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.localizations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalizations?: (ctx: LocalizationsContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.alien_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlien_header?: (ctx: Alien_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.zelnick_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZelnick_header?: (ctx: Zelnick_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.alien_localization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlien_localization?: (ctx: Alien_localizationContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.zelnick_localization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZelnick_localization?: (ctx: Zelnick_localizationContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextLocalizationParser.localization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalization?: (ctx: LocalizationContext) => Result;
}

