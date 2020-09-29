// @ts-nocheck
// Generated from grammars/UQMCommSourceData.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourcedataContext } from "./UQMCommSourceDataParser";
import { LocdataContext } from "./UQMCommSourceDataParser";
import { AnimationContext } from "./UQMCommSourceDataParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UQMCommSourceDataParser`.
 */
export interface UQMCommSourceDataListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UQMCommSourceDataParser.sourcedata`.
	 * @param ctx the parse tree
	 */
	enterSourcedata?: (ctx: SourcedataContext) => void;
	/**
	 * Exit a parse tree produced by `UQMCommSourceDataParser.sourcedata`.
	 * @param ctx the parse tree
	 */
	exitSourcedata?: (ctx: SourcedataContext) => void;

	/**
	 * Enter a parse tree produced by `UQMCommSourceDataParser.locdata`.
	 * @param ctx the parse tree
	 */
	enterLocdata?: (ctx: LocdataContext) => void;
	/**
	 * Exit a parse tree produced by `UQMCommSourceDataParser.locdata`.
	 * @param ctx the parse tree
	 */
	exitLocdata?: (ctx: LocdataContext) => void;

	/**
	 * Enter a parse tree produced by `UQMCommSourceDataParser.animation`.
	 * @param ctx the parse tree
	 */
	enterAnimation?: (ctx: AnimationContext) => void;
	/**
	 * Exit a parse tree produced by `UQMCommSourceDataParser.animation`.
	 * @param ctx the parse tree
	 */
	exitAnimation?: (ctx: AnimationContext) => void;
}

