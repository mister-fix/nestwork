# <img src="./assets/branding/nestwork-primary.svg#gh-light-mode-only" alt="Nestwork logo dark" height="30" /><img src="./assets/branding/nestwork-light.svg#gh-dark-mode-only" alt="Nestwork logo light" height="30" />

![License](https://img.shields.io/github/license/mister-fix/nestwork?color=blue)
![Version](https://img.shields.io/github/v/tag/mister-fix/nestwork?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/mister-fix/nestwork/build.yml)
![Last Commit](https://img.shields.io/github/last-commit/mister-fix/nestwork?color=yellow)
![Contributors](https://img.shields.io/github/contributors/mister-fix/nestwork?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/mister-fix/nestwork?color=ff0000)
![GitHub Repo stars](https://img.shields.io/github/stars/mister-fix/nestwork)

**Nestwork** is a full-stack monorepo task management application (inspired by Linear/Trello), built for learning, portfolio, and eventual production use.

This monorepo is powered by [Turborepo](https://turbo.build/repo) and leverages a modular architecture for scalable app and package development.

## Quick Start

You can view and interact with the application on your browser by [clicking here](https://nestwork-web.vercel.app/). You can also view Nestwork's accompanying documentations app by [clicking here](https://nestwork-docs.vercel.app/).

## Project Structure

```ASCII
nestwork/
├─ .github/                    # GitHub configuration (actions, issue templates, etc.)
│  ├─ workflows/               # CI/CD workflow definitions for GitHub Actions
│  ├─ dependabot.yml           # Config for Dependabot to automate dependency updates
│  ├─ labels.json              # Label definitions live here
│  └─ stale.yml                # Automatically mark old issues/PRs as stale
├─ .husky/                     # Git hooks for enforcing code quality and commit standards
├─ .vscode/                    # VSCode workspace settings (e.g., extensions, debug configs)
│  ├─ extensions.json          # Recommended VSCode extensions for the project
│  └─ settings.json            # Workspace-specific editor preferences (e.g., formatters)
├─ apps/                       # Applications in the monorepo (Next.js, docs, etc.)
│  ├─ docs/                    # Documentation app
│  └─ web/                     # Main Next.js app
├─ assets/                     # Static files for repository documentation (images, screenshots, etc.)
├─ packages/                   # Reusable packages/libraries (shared across apps)
│  ├─ assets/                  # Shared asset files (images, illustrations, branding, etc.)
│  ├─ eslint-config/           # Centralized ESLint configuration
│  ├─ typescript-config/       # Shared TS config for consistency
│  └─ ui/                      # Shared UI components (shadcn/ui, Tailwind v4)
├─ .coderabbit.yaml            # CodeRabbit configuration
├─ .editorconfig               # Coding style guide to maintain consistency across editors
├─ .gitattributes              # Git attribute settings (e.g. line endings, diff behavior)
├─ .gitignore                  # Files and directories to exclude from Git tracking
├─ .npmrc                      # npm configuration (registry, lockfile, scripts, etc.)
├─ .nvmrc                      # Node.js version to use with Node Version Manager (nvm)
├─ .prettierignore             # Files/folders to exclude from Prettier formatting
├─ .prettierrc                 # Prettier configuration (formatting rules)
├─ CHANGELOG.md                # Project changelog following Keep a Changelog format
├─ commitlint.config.mjs       # Commit message linting configuration
├─ cspell.json                 # Configuration for Code Spell Checker
├─ eslint.config.mjs           # Root ESLint configuration
├─ LICENSE                     # Open-source license (MIT)
├─ package-lock.json           # Lockfile for exact dependency versions (npm)
├─ package.json                # Project metadata, scripts, and dependencies
├─ plopfile.mjs                # Code generation templates (e.g., components, hooks)
├─ README.md                   # Project overview, setup instructions, and usage guide
└─ turbo.json                  # Turborepo configuration
```

## Managing GitHub Labels

To maintain a consistent labeling system across issues and pull requests, this repository uses a predefined set of labels stored in `.github/labels.json`.

These labels help us categorize changes in the repository by:

- Type: What kind of issue is it (e.g., feature, bug, enhancement, etc.)
- Status: The current progress/state of the issue
- Priority: Urgency and importance
- Scope: The area of the codebase or domain affected

### Syncing labels

If you're maintaining or contributing to project tooling, you can sync or update labels locally using the GitHub CLI:

```bash
gh auth login # if not already authenticated
gh api --method PUT /repos/{owner}/{repo}/labels \
  --input .github/labels.json
```

## Author

Created and maintained by [@mister-fix](https://github.com/mister-fix/).

## Contributors

- [@mister-fix](https://github.com/mister-fix/) 🐉

## License

[MIT](./LICENSE) © 2025 Nestwork

You can learn more about open-source licenses here: [choosealicense.com](https://choosealicense.com/).

## Contact

For questions, suggestions, or contributions, open an issue or email: [hellostephenwm@gmail.com](mailto:hellostephenwm@gmail.com).

## Miscellaneous

- Thanks to [@rxaviers](https://github.com/rxaviers/) for the emoji's used in this project, you can [check them out here](https://gist.github.com/rxaviers/7360908).
- Badges and shields used in the project markdown files are generated by [img.shields.io](https://img.shields.io/).
