grammar UQMGraphics;

/*
 * Grammar for parsing UQM Graphics (.ani) files. Supports UQMAnimationTool's animation extensions.
 */

// Parser rules:
graphics: (frame | animationdefinition | animationframe)+ EOF;

frame_part:
	filename = WORD WHITESPACE+ NUMBER WHITESPACE+ NUMBER WHITESPACE+ NUMBER WHITESPACE+ NUMBER
		WHITESPACE*;

frame: frame_part NEWLINE;

animationdefinition:
	HASH AT WHITESPACE+ ANIDEF_HEADER WHITESPACE+ NUMBER WHITESPACE+ ANIM_TYPE WHITESPACE+
		BLOCK_BEGIN name = (WORD | WHITESPACE | NUMBER)+ BLOCK_END WHITESPACE* NEWLINE;

animationframe:
	HASH AT WHITESPACE+ ANIFRAME_HEADER WHITESPACE+ NUMBER WHITESPACE+ NUMBER WHITESPACE+
		BLOCK_BEGIN frameref = frame_part BLOCK_END WHITESPACE* NEWLINE;

// Lexer rules:
fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];
fragment NUM: [0-9];
fragment NEGATIVE: '-';

HASH: '#';
AT: '@';

ANIDEF_HEADER: 'anidef';
ANIFRAME_HEADER: 'aniframe';

ANIM_TYPE:
	'BACKGROUND'
	| 'CIRCULAR'
	| 'YO_YO'
	| 'TALK'
	| 'RANDOM';

BLOCK_BEGIN: '[';
BLOCK_END: ']';

WHITESPACE: (' ' | '\t');

NEWLINE: ('\r'? '\n' | '\r')+;

WORD: (LOWERCASE | UPPERCASE) (
		LOWERCASE
		| UPPERCASE
		| NUM
		| '_'
		| '-'
		| '.'
	)+;
NUMBER: NEGATIVE? (NUM | '.')+;

COMMENT: HASH ~'@' ~('\n' | '\r')* NEWLINE -> skip;