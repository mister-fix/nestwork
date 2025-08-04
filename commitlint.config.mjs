/**
 * Commitlint configuration using conventional commits. Docs:
 * https://commitlint.js.org/reference/configuration.html
 */

import conventional from '@commitlint/config-conventional';

// Extract conventional commit types for customization
const conventionalTypes = conventional.rules['type-enum'][2];

const Configuration = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',

	rules: {
		// Type rules
		'type-enum': [2, 'always', [...conventionalTypes, 'wip', 'deps']],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],

		// Scope rules
		'scope-case': [2, 'always', 'lower-case'],

		// Subject rules
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],

		// Body rules
		'body-max-length': [2, 'always', 100],
		'body-leading-blank': [1, 'always'],

		// Footer rules
		'footer-max-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
	},

	// Custom ignore patterns
	ignores: [
		(commit) => commit.startsWith('WIP:'),
		(commit) => commit.includes('[skip ci]'),
	],

	defaultIgnores: true,

	prompt: {
		messages: {
			skip: '(press enter to skip)',
			min: '(%d min chars)',
			max: '(%d max chars)',
		},
		questions: {
			type: {
				description: 'Select commit type:',
				enum: {
					feat: {
						description: 'A new feature',
						title: 'Features',
						emoji: '✨',
					},
					fix: {
						description: 'A bug fix',
						title: 'Bug Fixes',
						emoji: '🐛',
					},
				},
			},
			scope: {
				description: 'What is the scope of this change?',
			},
			subject: {
				description: 'Write a short, imperative tense description:',
			},
			body: {
				description: 'Provide a longer description (optional):',
			},
			isBreaking: {
				description: 'Are there any breaking changes?',
			},
			breakingBody: {
				description: 'Describe the breaking changes:',
			},
			footer: {
				description: 'List any issues closed (e.g., "Closes #123"):',
			},
		},
	},

	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

export default Configuration;
