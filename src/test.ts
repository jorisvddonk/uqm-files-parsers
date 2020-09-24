import { parseTextLocalizationFile } from ".";
import assert from "assert";
import fs from "fs";
import { parseTextSynchronizationFile } from "./parseTextSynchronization";
import { parseGraphics } from "./parseGraphics";
import { AnimationType } from "./interfaces";

function assertJSONEquals(input, expect) {
  assert(JSON.stringify(input) === JSON.stringify(expect));
}

const localizations = parseTextLocalizationFile(fs.readFileSync("./src/test.txt").toString());

assert(localizations.get("FOO").audioFile === "foo.ogg");
assert(localizations.get("BAR").audioFile === "bar.ogg");
assert(localizations.get("BAZ").audioFile === undefined);

assert(localizations.get("one").audioFile === undefined);
assert(localizations.get("two").audioFile === undefined);
assert(localizations.get("three").audioFile === undefined);

assert(localizations.get("FOO").identifier === "FOO");
assert(localizations.get("BAR").identifier === "BAR");
assert(localizations.get("BAZ").identifier === "BAZ");
assert(localizations.get("one").identifier === "one");
assert(localizations.get("two").identifier === "two");
assert(localizations.get("three").identifier === "three");


assert(localizations.get("FOO").localizedText === "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui leo, iaculis in arcu vitae, fringilla bibendum nisi. Donec eget sollicitudin augue. Nulla sit amet ultrices erat. Nulla viverra suscipit neque, quis tincidunt ex. Aliquam erat volutpat. Donec eu ipsum non quam porttitor pharetra ac vitae turpis. Maecenas sed ipsum eu nisi laoreet pretium id et nibh. Quisque semper sit amet justo et placerat. Quisque pharetra lorem mauris, vel accumsan leo pretium id.\r\nUt sapien mi, rhoncus nec vehicula nec, convallis vel sapien. Mauris suscipit commodo sapien, eget aliquam ex accumsan quis. Fusce ut rhoncus ligula. Nulla consequat, massa a euismod bibendum, orci est volutpat lectus, id consequat orci massa et magna. Integer vel porttitor mi, non semper dui. Suspendisse potenti. Nam euismod ligula a tellus volutpat aliquet. Vestibulum lobortis diam non sagittis mollis. Sed ut vehicula lectus. Praesent consectetur dapibus venenatis. Ut iaculis leo risus, eget ultricies diam ultrices eget. Fusce at euismod arcu, ac euismod ante.");
assert(localizations.get("BAR").localizedText === "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui leo, iaculis in arcu vitae, fringilla bibendum nisi. Donec eget sollicitudin augue. Nulla sit amet ultrices erat. Nulla viverra suscipit neque, quis tincidunt ex. Aliquam erat volutpat. Donec eu ipsum non quam porttitor pharetra ac vitae turpis. Maecenas sed ipsum eu nisi laoreet pretium id et nibh. Quisque semper sit amet justo et placerat. Quisque pharetra lorem mauris, vel accumsan leo pretium id.\r\nUt sapien mi, rhoncus nec vehicula nec, convallis vel sapien. Mauris suscipit commodo sapien, eget aliquam ex accumsan quis. Fusce ut rhoncus ligula. Nulla consequat, massa a euismod bibendum, orci est volutpat lectus, id consequat orci massa et magna. Integer vel porttitor mi, non semper dui. Suspendisse potenti. Nam euismod ligula a tellus volutpat aliquet. Vestibulum lobortis diam non sagittis mollis. Sed ut vehicula lectus. Praesent consectetur dapibus venenatis. Ut iaculis leo risus, eget ultricies diam ultrices eget. Fusce at euismod arcu, ac euismod ante.");
assert(localizations.get("BAZ").localizedText === "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui leo, iaculis in arcu vitae, fringilla bibendum nisi. Donec eget sollicitudin augue. Nulla sit amet ultrices erat. Nulla viverra suscipit neque, quis tincidunt ex. Aliquam erat volutpat. Donec eu ipsum non quam porttitor pharetra ac vitae turpis. Maecenas sed ipsum eu nisi laoreet pretium id et nibh. Quisque semper sit amet justo et placerat. Quisque pharetra lorem mauris, vel accumsan leo pretium id.");
assert(localizations.get("one").localizedText === "One.");
assert(localizations.get("two").localizedText === "Two?!");
assert(localizations.get("three").localizedText === "Three!!");

const synchronizations = parseTextSynchronizationFile(fs.readFileSync("./src/test_textSync.txt").toString());

assertJSONEquals(synchronizations.get("FOO").timings, []);
assertJSONEquals(synchronizations.get("BAR").timings, [4643]);
assertJSONEquals(synchronizations.get("BAZ").timings, [3510, 3758]);

assertJSONEquals(synchronizations.get("one").timings, []);
assertJSONEquals(synchronizations.get("two").timings, []);
assertJSONEquals(synchronizations.get("three").timings, []);

const graphics = parseGraphics(fs.readFileSync("./src/test.ani").toString());

assert(graphics.frames[0].filename === "test.0.png");
assert(graphics.frames[0].transparent_color === -1);
assert(graphics.frames[0].colormap_index === 10);
assert(graphics.frames[0].hotspot.x === 0);
assert(graphics.frames[0].hotspot.y === 0);
assert(graphics.frames[1].filename === "test.1.png");
assert(graphics.frames[1].transparent_color === -1);
assert(graphics.frames[1].colormap_index === 10);
assert(graphics.frames[1].hotspot.x === -36);
assert(graphics.frames[1].hotspot.y === -54);
assert(graphics.frames[2].filename === "test.2.png");
assert(graphics.frames[3].filename === "test.3.png");
assert(graphics.frames[4].filename === "test.4.png");
assert(graphics.frames[5].filename === "test.5.png");
assert(graphics.frames[5].transparent_color === -1);
assert(graphics.frames[5].colormap_index === 10);
assert(graphics.frames[5].hotspot.x === -77);
assert(graphics.frames[5].hotspot.y === -54);
const sbAnim = graphics.animations.get("Static background");
assert(sbAnim.name === "Static background");
assert(sbAnim.type === AnimationType.BACKGROUND);
assert(sbAnim.do_not_play_when_other_anim.length === 0);
assert(sbAnim.frames[0].duration === -1.0);
assert(sbAnim.frames[0].frame_index === 0);
const rbAnim = graphics.animations.get("Random bits");
assert(rbAnim.name === "Random bits");
assert(rbAnim.type === AnimationType.RANDOM);
assert(rbAnim.do_not_play_when_other_anim.length === 0);
assert(rbAnim.frames[0].duration === 0.1);
assert(rbAnim.frames[0].frame_index === 1);
assert(rbAnim.frames[1].duration === 0.1);
assert(rbAnim.frames[1].frame_index === 2);
assert(rbAnim.frames[2].duration === 0.1);
assert(rbAnim.frames[2].frame_index === 3);
assert(rbAnim.frames[3].duration === 0.1);
assert(rbAnim.frames[3].frame_index === 4);
assert(rbAnim.base_restart_rate === undefined);
assert(rbAnim.random_restart_rate === undefined);
const yyAnim = graphics.animations.get("Yoyo");
assert(yyAnim.name === "Yoyo");
assert(yyAnim.type === AnimationType.YO_YO);
assert(yyAnim.base_restart_rate = 0.25);
assert(yyAnim.random_restart_rate = 0.75);
assert(yyAnim.block_mask === 2);
assert(yyAnim.do_not_play_when_other_anim.length === 1);
assert(yyAnim.do_not_play_when_other_anim[0] === "Random bits");
assert(yyAnim.frames[0].frame_index === 9);
assert(yyAnim.frames[1].frame_index === 10);
assert(yyAnim.frames[2].frame_index === 11);
const tbm1 = graphics.animations.get("Test blockmask 1");
assert(tbm1.do_not_play_when_other_anim.length === 3);
assert(tbm1.do_not_play_when_other_anim[0] === "Random bits");
assert(tbm1.do_not_play_when_other_anim[1] === "Yoyo");
assert(tbm1.do_not_play_when_other_anim[2] === "Test blockmask 2");
const tbm2 = graphics.animations.get("Test blockmask 2");
assert(tbm2.do_not_play_when_other_anim.length === 2);
assert(tbm2.do_not_play_when_other_anim[0] === "Yoyo");
assert(tbm2.do_not_play_when_other_anim[1] === "Test blockmask 1");
const tbm3 = graphics.animations.get("Test blockmask 3");
assert(tbm3.do_not_play_when_other_anim.length === 1);
assert(tbm3.do_not_play_when_other_anim[0] === "Static background");