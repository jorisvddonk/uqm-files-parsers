grammar UQMCommSourceData;

/*
 * Grammar for parsing UQM Comm source (.c) files and extracting the LOCDATA.
 */

// Parser rules:

sourcedata:
	WHITESPACE_OR_NEWLINE* locdata WHITESPACE_OR_NEWLINE*;

locdata:
	BEGIN_LOCDATA WHITESPACE_OR_NEWLINE+ locdata_struct_name = SOMETHING WHITESPACE_OR_NEWLINE+ '='
		WHITESPACE_OR_NEWLINE* WHITESPACE_OR_NEWLINE* BLOCK_BEGIN WHITESPACE_OR_NEWLINE*
	// init_encounter_func:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// post_encounter_func:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// uninit_encounter_func:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienFrame:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienFont:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextFColor:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextBColor:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextBaseline:
	BLOCK_BEGIN WHITESPACE_OR_NEWLINE* INT WHITESPACE_OR_NEWLINE* COMMA WHITESPACE_OR_NEWLINE* INT
		WHITESPACE_OR_NEWLINE* BLOCK_END COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextWidth:
	INT COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextAlign:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienTextValign:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienColorMap:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienSong:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienAltSong:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// AlienSongFlags:
	(INT | SOMETHING) COMMA WHITESPACE_OR_NEWLINE*
	// PlayerPhrases:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// NumAnimations:
	INT COMMA WHITESPACE_OR_NEWLINE*
	// AlienAmbientArray
	BLOCK_BEGIN WHITESPACE_OR_NEWLINE*
	// a number of ambient array elements
	alien_ambient_animations += animation+ BLOCK_END WHITESPACE_OR_NEWLINE* COMMA
		WHITESPACE_OR_NEWLINE*
	// AlienTransitionDesc
	alien_transition_desc = animation
	// AlienTalkDesc
	alien_talk_desc = animation
	// AlienNumberSpeech:
	SOMETHING COMMA WHITESPACE_OR_NEWLINE*
	// Filler for loaded resources
	SOMETHING COMMA WHITESPACE_OR_NEWLINE* SOMETHING COMMA WHITESPACE_OR_NEWLINE* SOMETHING COMMA
		WHITESPACE_OR_NEWLINE* SOMETHING COMMA WHITESPACE_OR_NEWLINE* SOMETHING COMMA
		WHITESPACE_OR_NEWLINE*
	// end
	BLOCK_END SEMICOLON;

animation:
	WHITESPACE_OR_NEWLINE* BLOCK_BEGIN WHITESPACE_OR_NEWLINE* startIndex = INT WHITESPACE_OR_NEWLINE
		* COMMA WHITESPACE_OR_NEWLINE* numFrames = INT WHITESPACE_OR_NEWLINE* COMMA
		WHITESPACE_OR_NEWLINE* animFlags += (
		ANIMATION_TYPE
		| BINARY_OR
		| WHITESPACE_OR_NEWLINE
		| ANIMATION_FLAG
		| INT
	)+ COMMA WHITESPACE_OR_NEWLINE* frameRateLow += (
		SOMETHING
		| INT
		| BINARY_OR
		| SLASH
		| ASTERISK
		| WHITESPACE_OR_NEWLINE
	)+ COMMA WHITESPACE_OR_NEWLINE* frameRateHigh += (
		SOMETHING
		| INT
		| BINARY_OR
		| SLASH
		| ASTERISK
		| WHITESPACE_OR_NEWLINE
	)+ COMMA WHITESPACE_OR_NEWLINE* restartRateLow += (
		SOMETHING
		| INT
		| BINARY_OR
		| SLASH
		| ASTERISK
		| WHITESPACE_OR_NEWLINE
	)+ COMMA WHITESPACE_OR_NEWLINE* restartRateHigh += (
		SOMETHING
		| INT
		| BINARY_OR
		| SLASH
		| ASTERISK
		| WHITESPACE_OR_NEWLINE
	)+ COMMA WHITESPACE_OR_NEWLINE* blockMask += (
		SOMETHING
		| INT
		| BINARY_OR
		| WHITESPACE_OR_NEWLINE
		| BRACE_OPEN
		| BRACE_CLOSE
		| BITSHIFT
	)+ COMMA? WHITESPACE_OR_NEWLINE* BLOCK_END WHITESPACE_OR_NEWLINE* COMMA WHITESPACE_OR_NEWLINE*;

// Lexer rules:
fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];
fragment NUM: [0-9];
fragment NEGATIVE: '-';

HASH: '#';
AT: '@';
SLASH: '/';
ASTERISK: '*';
COMMA: ',';

BINARY_OR: '|';
BITSHIFT: '<<';
BRACE_OPEN: '(';
BRACE_CLOSE: ')';

BLOCK_BEGIN: '{';
BLOCK_END: '}';
SEMICOLON: ';';
COLON: ':';

WHITESPACE_OR_NEWLINE: (WHITESPACE | NEWLINE)+;
WHITESPACE: (' ' | '\t');

ANIMATION_TYPE:
	'YOYO_ANIM'
	| 'CIRCULAR_ANIM'
	| 'RANDOM_ANIM'
	| 'BACKGROUND_ANIM';
ANIMATION_FLAG: 'WAIT_TALKING';

NEWLINE: ('\r'? '\n' | '\r')+;

SOMETHING: (NULL | WORD);

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

BEGIN_LOCDATA: 'static' WHITESPACE+ 'LOCDATA';

COMMENT_START: SLASH SLASH;
ML_COMMENT_BEGIN: SLASH ASTERISK;
ML_COMMENT_END: ASTERISK SLASH;

MULTILINE_COMMENT:
	ML_COMMENT_BEGIN (.)*? ML_COMMENT_END -> skip;
COMMENT: COMMENT_START ~'\n'+ NEWLINE -> skip;

REST: 'static' WHITESPACE+ 'void' .* -> skip;

INCLUDE: '#include' WHITESPACE+ (.)*? NEWLINE -> skip;

NULL: 'NULL';
