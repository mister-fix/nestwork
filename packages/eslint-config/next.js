import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { config as baseConfig } from './base.js';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nextJsConfig = [
	...baseConfig,
	js.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	perfectionist.configs['recommended-natural'],
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
			},
		},
	},
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
		},
	},
	{
		plugins: {
			'react-hooks': pluginReactHooks,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			// React scope no longer necessary with new JSX transform.
			'react/react-in-jsx-scope': 'off',
		},
	},
	{
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'object', 'side-effect'],
					type: 'natural',
					order: 'asc',
					newlinesBetween: 'always',
					customGroups: [
						{
							groupName: 'object',
							elementNamePattern: '^@repo/assets/.*$',
						},
						{
							groupName: 'side-effect',
							elementNamePattern: '\\.css$',
						},
					],
				},
			],
			'perfectionist/sort-jsx-props': [
				'warn',
				{
					type: 'natural',
					order: 'asc',
					fallbackSort: { type: 'natural', order: 'asc' },
					ignoreCase: true,
					specialCharacters: 'keep',
					partitionByNewLine: false,
					groups: [
						'reactCore',
						'identifiers',
						'accessibility',
						'data',
						'linking',
						'visual',
						'form',
						'dimensions',
						'style',
						'event',
						'shorthand-prop',
						'multiline-prop',
						'children',
						'unknown',
					],
					customGroups: [
						{
							groupName: 'reactCore',
							elementNamePattern: '^(key|ref)$',
						},
						{
							groupName: 'identifiers',
							elementNamePattern: '^(id|name|className)$',
						},
						{
							groupName: 'accessibility',
							elementNamePattern: '^(aria-.+|role)$',
						},
						{
							groupName: 'data',
							elementNamePattern: '^data-.+',
						},
						{
							groupName: 'linking',
							elementNamePattern: '^(href|to|target|rel)$',
						},
						{
							groupName: 'visual',
							elementNamePattern: '^(src|alt|title|placeholder)$',
						},
						{
							groupName: 'form',
							elementNamePattern:
								'^(type|value|defaultValue|checked|disabled|readOnly)$',
						},
						{
							groupName: 'dimensions',
							elementNamePattern: '^(width|height|size)$',
						},
						{
							groupName: 'style',
							elementNamePattern: '^style$',
						},
						{
							groupName: 'event',
							elementNamePattern: '^on[A-Z].*',
						},
						{
							groupName: 'children',
							elementNamePattern: '^children$',
						},
					],
				},
			],
		},
	},
];
