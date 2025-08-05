# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
[0.1.0]: https://github.com/mister-fix/nestwork/tree/v0.1.0
