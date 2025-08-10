# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Re-initialized entire repository due to Turborepo dependency degradation.
- Re-added branding material in the root `assets/` folder.

### Fixed

- Location for local icons needed in the `apps/docs/app/page.tsx` file.

## [0.1.1] - 2025-08-07

### Added

- `.github/`:
  - Added `labels.json` local store for labels used in the GitHub repository
  - Added `workflows/config-review.yml`: checks for stale configuration files (config files that haven't been updated in 3 months)
- CodeRabbit configuration file

### Changed

- `README.md`:
  - Added [quick start](./README.md#quick-start) section
  - Added [managing labels](./README.md#managing-labels) section
  - Updated project structure diagram in `README.md` to reflect file changes
- `cspell.json`:
  - Added `coderabbit` and `coderabbitai` to dictionary
    - Removed conflicting of "coderabbit" in the `ignoreWords` list
- CodeRabbit configuration:
  - Explicit declaration of `auto_review` option as `enabled: true`
- `.github/labels.json`:
  - Reformatted alignment of keys and values in document
  - Updated color values for the following labels:
    - `needs view`, `refactor`, `scope: onboarding`, `scope: dev-dependencies`, and `scope: ci/cd`
  - Added `bug`, `maintenance`, and `automation` labels
- `.github/dependabot.yml`:
  - Added `automation` to list of applied labels
- Formatted `LICENSE` file
- Version changes for dependencies:
  - Bumped `@next/eslint-plugin-next` from v15.4.5 to v15.4.6
  - Bumped `next` from v15.4.5 to v15.4.6
  - Bumped `lucide-react` from v0.546.0 to v0.537.0

## [0.1.0] - 2025-08-05

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
- Configured `.env` files for `apps/web` and `apps/docs`, added tracking for environment variables in `turbo.json`
- ESLint config in root directory to work with `lint-staged` and the `pre-commit` hook

### Changed

- Updated `lint`, `commitlint`, and `build` workflows:
  - Aligned called scripts inside each workflow YAML file
  - Updated Node.js version to match the current project
- Updated `cspell.yml` workflow:
  - Renamed workflow file name to `spell-check.yml` to avoid CSPell interpreting file as local config
  - Refactored the workflow's `on` command to `on: [push, pull_request]`
- Updated `package.json`:
  - Removed `engines` and experimental metadata fields
- Updated `commitlint.config.mjs`:
  - Add ignore for dependabot
  - Modified `body-max-length`, `body-max-line-length`, `footer-max-length`, and `footer-max-line-length` rules
- Updated `pre-commit` hook:
  - Add step to ensure spell check is run on staged files

### Removed

- Locally loaded fonts from `apps/docs`

[Unreleased]: https://github.com/mister-fix/nestwork/compare/v0.1.0...HEAD
[0.1.1]: https://github.com/mister-fix/nestwork/compare/0.1.0...0.1.1
[0.1.0]: https://github.com/mister-fix/nestwork/tree/v0.1.0
