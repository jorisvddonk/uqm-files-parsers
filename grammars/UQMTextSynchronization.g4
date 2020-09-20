grammar UQMTextSynchronization;

/*
 * Grammar for parsing UQM Text Synchronization files
 */

// Parser rules:
synchronizations: synchronization+ EOF;

header:
	HEADER_START identifier = (
		WORD
		| LOWERCASE_WORD
		| UPPERCASE_WORD
	) HEADER_END WHITESPACE;

timings: (timing | COMMA | WHITESPACE)+;

timing: (NUMBER)+;

synchronization: header timings? WHITESPACE? NEWLINE;

// Lexer rules:
fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];
fragment NUM: [0-9];

HEADER_START: '#(';
HEADER_END: ')';

WHITESPACE: (' ' | '\t');

NEWLINE: ('\r'? '\n' | '\r')+;

NUMBER: (NUM)+;
LOWERCASE_WORD: (LOWERCASE | NUM | '_' | '-')+;
UPPERCASE_WORD: (UPPERCASE | NUM | '_' | '-')+;
WORD: (LOWERCASE | UPPERCASE | NUM | '_' | '-')+;
COMMA: ',';
