// @ts-nocheck
// Generated from grammars/UQMTextSynchronization.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SynchronizationsContext } from "./UQMTextSynchronizationParser";
import { HeaderContext } from "./UQMTextSynchronizationParser";
import { TimingsContext } from "./UQMTextSynchronizationParser";
import { TimingContext } from "./UQMTextSynchronizationParser";
import { SynchronizationContext } from "./UQMTextSynchronizationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UQMTextSynchronizationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UQMTextSynchronizationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UQMTextSynchronizationParser.synchronizations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizations?: (ctx: SynchronizationsContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextSynchronizationParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextSynchronizationParser.timings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimings?: (ctx: TimingsContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextSynchronizationParser.timing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTiming?: (ctx: TimingContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMTextSynchronizationParser.synchronization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronization?: (ctx: SynchronizationContext) => Result;
}

