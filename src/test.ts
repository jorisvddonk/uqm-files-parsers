import { parseTextLocalizationFile } from ".";
import assert from "assert";
import fs from "fs";

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

