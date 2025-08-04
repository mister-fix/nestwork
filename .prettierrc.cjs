/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: 'lf',
	requirePragma: false,
	insertPragma: false,
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	experimentalTernaries: true,
	experimentalOperatorPosition: 'start',
	proseWrap: 'preserve',
	embeddedLanguageFormatting: 'auto',
	singleAttributePerLine: true,
	braceStyle: 'stroustrup',
	attributeGroups: ['^class$', '^(id|name)$', '$DEFAULT', '^aria-'],
	plugins: [
		'prettier-plugin-organize-imports',
		'prettier-plugin-brace-style',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-merge',
	],
	overrides: [
		{ files: '*.{cmp,page}', options: { parser: 'html' } },
		{
			files: ['*.json', '*.jsonc'],
			options: { printWidth: 100, parser: 'json' },
		},
		{
			files: '*.{yaml,yml}',
			options: {
				useTabs: false,
				tabWidth: 2,
				singleQuote: false,
				bracketSpacing: false,
			},
		},
		{
			files: '*.txt',
			options: {
				useTabs: false,
				tabWidth: 2,
				singleQuote: false,
				bracketSpacing: false,
			},
		},
	],
};
