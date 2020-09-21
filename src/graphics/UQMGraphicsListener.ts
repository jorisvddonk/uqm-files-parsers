// @ts-nocheck
// Generated from grammars/UQMGraphics.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { GraphicsContext } from "./UQMGraphicsParser";
import { Frame_partContext } from "./UQMGraphicsParser";
import { FrameContext } from "./UQMGraphicsParser";
import { AnimationdefinitionContext } from "./UQMGraphicsParser";
import { AnimationframeContext } from "./UQMGraphicsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UQMGraphicsParser`.
 */
export interface UQMGraphicsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UQMGraphicsParser.graphics`.
	 * @param ctx the parse tree
	 */
	enterGraphics?: (ctx: GraphicsContext) => void;
	/**
	 * Exit a parse tree produced by `UQMGraphicsParser.graphics`.
	 * @param ctx the parse tree
	 */
	exitGraphics?: (ctx: GraphicsContext) => void;

	/**
	 * Enter a parse tree produced by `UQMGraphicsParser.frame_part`.
	 * @param ctx the parse tree
	 */
	enterFrame_part?: (ctx: Frame_partContext) => void;
	/**
	 * Exit a parse tree produced by `UQMGraphicsParser.frame_part`.
	 * @param ctx the parse tree
	 */
	exitFrame_part?: (ctx: Frame_partContext) => void;

	/**
	 * Enter a parse tree produced by `UQMGraphicsParser.frame`.
	 * @param ctx the parse tree
	 */
	enterFrame?: (ctx: FrameContext) => void;
	/**
	 * Exit a parse tree produced by `UQMGraphicsParser.frame`.
	 * @param ctx the parse tree
	 */
	exitFrame?: (ctx: FrameContext) => void;

	/**
	 * Enter a parse tree produced by `UQMGraphicsParser.animationdefinition`.
	 * @param ctx the parse tree
	 */
	enterAnimationdefinition?: (ctx: AnimationdefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `UQMGraphicsParser.animationdefinition`.
	 * @param ctx the parse tree
	 */
	exitAnimationdefinition?: (ctx: AnimationdefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `UQMGraphicsParser.animationframe`.
	 * @param ctx the parse tree
	 */
	enterAnimationframe?: (ctx: AnimationframeContext) => void;
	/**
	 * Exit a parse tree produced by `UQMGraphicsParser.animationframe`.
	 * @param ctx the parse tree
	 */
	exitAnimationframe?: (ctx: AnimationframeContext) => void;
}

