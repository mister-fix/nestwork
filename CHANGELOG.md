# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initialized Turborepo monorepo structure
- Set up base apps: `web` and `docs`
- Added shared packages: `assets`, `ui`, `eslint-config`, `typescript-config`
- Configured Tailwind CSS v4 with PostCSS
- Integrated `shadcn/ui` components into `@repo/ui`
- Configured global styling with `globals.css`
- Added basic branding assets (logo, wordmark, color variants)
- Set up `plop` for file generation with dynamic directory selection
- Added `.editorconfig`, `Prettier`, and `ESLint` setup with custom plugin support
- Added `.npmrc` with custom package manager settings
- Configured `husky` for Git hooks support, and `cspell` for spell checking
- Added `.nvmrc` with Node version specified
- Added GitHub Actions for linting, type, and spell checking
- Added `stale.yml` to automatically mark inactive issues, and `dependabot.yml` for dependency management
- Added `.vscode/settings.json` with project-level editor defaults and plugin recommendations
- Pre-commit Git hook using `lint-staged` and `husky`

### Changed

- Updated `lint`, `commitlint`, and `build` workflows:
  - Aligned called scripts inside each workflow YAML file
  - Updated Node.js version to match the current project
- Updated `package.json`:
  - Removed `engines` and experimental metadata fields

[Unreleased]: https://github.com/mister-fix/nestwork/compare/initial-commit...HEAD

<!-- [v0.1.0]: https://github.com/mister-fix/breadnotes-app/releases/v0.1.0 -->
