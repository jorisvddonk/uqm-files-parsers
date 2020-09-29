// @ts-nocheck
// Generated from grammars/UQMCommSourceData.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourcedataContext } from "./UQMCommSourceDataParser";
import { LocdataContext } from "./UQMCommSourceDataParser";
import { AnimationContext } from "./UQMCommSourceDataParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UQMCommSourceDataParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UQMCommSourceDataVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UQMCommSourceDataParser.sourcedata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourcedata?: (ctx: SourcedataContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMCommSourceDataParser.locdata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocdata?: (ctx: LocdataContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMCommSourceDataParser.animation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimation?: (ctx: AnimationContext) => Result;
}

