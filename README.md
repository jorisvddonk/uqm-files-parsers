# UQM Files Parsers

This repository contains parsers for various file formats in [The Ur-Quan Masters](http://sc2.sourceforge.net/).

The parsers are written using [ANTLR](https://www.antlr.org/), and ANTLR4 grammars for these file formats is available in this repository.

# Development

To regenerate the parser source files from the .g4 files, run:

`npm run antlr4ts`

(note: afterwards, you may need to apply [this workaround](https://github.com/tunnelvisionlabs/antlr4ts/issues/485#issuecomment-683409387)) to fix issues with the generated TypeScript code.
