import { config as baseConfig } from '@repo/eslint-config/base';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
	...baseConfig,
	globalIgnores([
		'node_modules/*',
		'dist/*',
		'.turbo/*',
		'**/.next/*',
		'.next/*',
	]),
]);
