// @ts-nocheck
// Generated from grammars/UQMTextSynchronization.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SynchronizationsContext } from "./UQMTextSynchronizationParser";
import { HeaderContext } from "./UQMTextSynchronizationParser";
import { TimingsContext } from "./UQMTextSynchronizationParser";
import { TimingContext } from "./UQMTextSynchronizationParser";
import { SynchronizationContext } from "./UQMTextSynchronizationParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UQMTextSynchronizationParser`.
 */
export interface UQMTextSynchronizationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UQMTextSynchronizationParser.synchronizations`.
	 * @param ctx the parse tree
	 */
	enterSynchronizations?: (ctx: SynchronizationsContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextSynchronizationParser.synchronizations`.
	 * @param ctx the parse tree
	 */
	exitSynchronizations?: (ctx: SynchronizationsContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextSynchronizationParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextSynchronizationParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextSynchronizationParser.timings`.
	 * @param ctx the parse tree
	 */
	enterTimings?: (ctx: TimingsContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextSynchronizationParser.timings`.
	 * @param ctx the parse tree
	 */
	exitTimings?: (ctx: TimingsContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextSynchronizationParser.timing`.
	 * @param ctx the parse tree
	 */
	enterTiming?: (ctx: TimingContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextSynchronizationParser.timing`.
	 * @param ctx the parse tree
	 */
	exitTiming?: (ctx: TimingContext) => void;

	/**
	 * Enter a parse tree produced by `UQMTextSynchronizationParser.synchronization`.
	 * @param ctx the parse tree
	 */
	enterSynchronization?: (ctx: SynchronizationContext) => void;
	/**
	 * Exit a parse tree produced by `UQMTextSynchronizationParser.synchronization`.
	 * @param ctx the parse tree
	 */
	exitSynchronization?: (ctx: SynchronizationContext) => void;
}

