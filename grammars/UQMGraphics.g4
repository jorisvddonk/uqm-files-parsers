grammar UQMGraphics;

/*
 * Grammar for parsing UQM Graphics (.ani) files. Supports UQMAnimationTool's animation extensions.
 */

// Parser rules:
graphics: (frame | animationdefinition | animationframe)+ EOF;

frame_part:
	filename = WORD WHITESPACE+ transparent_color = INT WHITESPACE+ colormap_index = INT WHITESPACE+
		hotspot_x = INT WHITESPACE+ hotspot_y = INT WHITESPACE*;

frame: frame_part NEWLINE;

animationname: ( WORD | WHITESPACE | INT | FLOAT)+;

animationdefinition:
	HASH AT WHITESPACE+ ANIDEF_HEADER WHITESPACE+ animation_number = INT WHITESPACE+ animation_type
		= ANIM_TYPE (
		WHITESPACE+ base_restart_rate = (INT | FLOAT) WHITESPACE+ random_restart_rate = (
			INT
			| FLOAT
		) WHITESPACE+ block_mask = INT
	)? WHITESPACE+ BLOCK_BEGIN name = animationname BLOCK_END WHITESPACE* NEWLINE;

animationframe:
	HASH AT WHITESPACE+ ANIFRAME_HEADER WHITESPACE+ animation_number_reference = INT WHITESPACE+
		frame_duration = (INT | FLOAT) WHITESPACE+ BLOCK_BEGIN frameref = frame_part BLOCK_END
		WHITESPACE* NEWLINE;

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
INT: NEGATIVE? (NUM)+;
FLOAT: NEGATIVE? (NUM | '.')+;

COMMENT: HASH ~'@' ~('\n' | '\r')* NEWLINE -> skip;