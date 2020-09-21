// @ts-nocheck
// Generated from grammars/UQMGraphics.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GraphicsContext } from "./UQMGraphicsParser";
import { Frame_partContext } from "./UQMGraphicsParser";
import { FrameContext } from "./UQMGraphicsParser";
import { AnimationnameContext } from "./UQMGraphicsParser";
import { AnimationdefinitionContext } from "./UQMGraphicsParser";
import { AnimationframeContext } from "./UQMGraphicsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UQMGraphicsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UQMGraphicsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.graphics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphics?: (ctx: GraphicsContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.frame_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrame_part?: (ctx: Frame_partContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.frame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrame?: (ctx: FrameContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.animationname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationname?: (ctx: AnimationnameContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.animationdefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationdefinition?: (ctx: AnimationdefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `UQMGraphicsParser.animationframe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationframe?: (ctx: AnimationframeContext) => Result;
}

