import glob from "glob";
import fs from "fs";

glob.sync("./src/*/UQM*.ts").forEach(fname => {
  let src = fs.readFileSync(fname).toString();
  src = `// @ts-nocheck\n${src}`;
  fs.writeFileSync(fname, src, { encoding: 'utf-8' });
});
