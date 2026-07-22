# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.1.0] - 2026-07-22

### Fixed

- TypeScript test files now run correctly in CI: added `ts-jest` transform and `moduleNameMapper` in `jest.config.cjs`, updated test imports to use explicit `.js` extensions and `@jest/globals`
- Renamed `jest.config.js` to `jest.config.cjs` so it works alongside `"type": "module"` in `package.json`
- Updated CI actions from `actions/checkout@v2` / `actions/setup-node@v1` to `@v4`
