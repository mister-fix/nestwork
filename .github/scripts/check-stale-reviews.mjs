import fs from 'fs/promises';
import pkg from 'glob';
import console from 'node:console';
import process from 'node:process';
import path from 'path';

const { glob } = pkg;

const REPO_ROOT = process.cwd();
const REVIEW_TAG = '@last-reviewed:';
const MAX_AGE_DAYS = 1; // ~6 months
const REPORT_FILE = path.join('.github', 'stale-files-report.md');

const getAllFiles = async () => {
	return await glob(
		[
			'**/*.ts',
			'**/*.tsx',
			'**/*.js',
			'**/*.json',
			'**/*.jsonc',
			'**/*.cjs',
			'**/*.mjs',
			'**/*.config',
		],
		{
			ignore: [
				'node_modules/**',
				'dist/**',
				'build/**',
				'.git/**',
				'.next/**',
				'.turbo/**',
				'public/**',
			],
			cwd: REPO_ROOT,
			absolute: true,
		},
	);
};

const parseReviewDate = (line) => {
	const match = line.match(/@last-reviewed:\s*(\d{4}-\d{2}-\d{2})/);
	return match ? new Date(match[1]) : null;
};

const isOlderThan = (date, days) => {
	const now = new Date();
	const diff = (now - date) / (1000 * 60 * 60 * 24);
	return diff > days;
};

const findStaleReviewedFiles = async () => {
	const files = await getAllFiles();
	const staleFiles = [];

	for (const file of files) {
		const content = await fs.readFile(file, 'utf-8');
		const lines = content.split('\n');

		const reviewLine = lines.find((line) => line.includes(REVIEW_TAG));
		if (!reviewLine) continue;

		const reviewDate = parseReviewDate(reviewLine);
		if (!reviewDate) continue;

		if (isOlderThan(reviewDate, MAX_AGE_DAYS)) {
			staleFiles.push(path.relative(REPO_ROOT, file));
		}
	}

	return staleFiles;
};

const writeReport = async (staleFiles) => {
	const lines = [
		'# 🔍 Review Needed: Stale Files',
		'',
		`These files haven’t been reviewed in over 6 months and contain a \`@last-reviewed\` comment.`,
		'',
		'Please check if they are still accurate, used, or need updates:',
		'',
		...staleFiles.map((f) => `- [ ] \`${f}\``),
		'',
		`> _Generated on ${new Date().toISOString().split('T')[0]}_`,
	];

	await fs.writeFile(REPORT_FILE, lines.join('\n'), 'utf-8');
};

const staleFiles = await findStaleReviewedFiles();
if (staleFiles.length > 0) {
	await writeReport(staleFiles);
	console.log(`Found ${staleFiles.length} stale files.`);
	console.log(`::set-env name=STALE_FILES_FOUND::true`);
}
else {
	console.log('No stale files found.');
}
