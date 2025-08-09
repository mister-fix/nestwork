import path from 'path';

export default function (plop) {
	plop.setWelcomeMessage('Use this to generate new files\n');

	plop.setGenerator('file', {
		description: 'Create a file in a nested directory',
		prompts: [
			{
				type: 'input',
				name: 'fileName',
				message: 'File name (with extension):',
				validate: (value) => (value ? true : 'Required'),
			},
			{
				type: 'list',
				name: 'baseDir',
				message: 'Select base directory:',
				choices: [
					{ name: '🏠 Root', value: './' },
					{ name: '📄 Docs app', value: './apps/docs/' },
					{ name: '🌐 Web app', value: './apps/web/' },
					{ name: '🎨 UI package', value: './packages/ui/' },
				],
			},
			{
				type: 'input',
				name: 'subPath',
				message: (answers) => {
					const nameMap = {
						'./': 'root',
						'./apps/docs/': 'docs app',
						'./apps/web/': 'web app',
						'./packages/ui/': 'UI package',
					};

					return `Enter subpath inside the ${nameMap[answers.baseDir] || 'base'} (e.g. app/components/):`;
				},
				default: '',
			},
		],
		actions: (answers) => {
			const targetPath = path.join(
				answers.baseDir,
				answers.subPath || '',
				answers.fileName,
			);

			return [
				{
					type: 'add',
					path: targetPath,
					templateFile: '',
					abortOnFail: true,
				},
			];
		},
	});
}
