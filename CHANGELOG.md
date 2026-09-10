# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.7] - 2026-09-10

### Added

- `engines.node` declaring the supported floor. The README and its badge advertised
  a floor that no manifest stated; CI now proves it across Node 20, 22, 24 on
  Linux, macOS and Windows.
- Shared conformance suite via `@sebastienrousseau/config-kit`, replacing the
  per-repository boilerplate. It checks packaging, declared types against runtime
  shapes, dependency resolvability, tarball contents, licence headers, version
  coherence and documentation links.
- `.github/CODEOWNERS`, `.pre-commit-config.yaml`, `docs/packaging.md` and
  `docs/adr/` architecture decision records.
- `sideEffects: false`, so bundlers can drop the package when it is unused.

### Changed

- `index.mjs` now re-exports `index.cjs` instead of duplicating it, which makes the
  two entrypoints identical by construction.
- CI, publish, security and docs workflows are thin callers of reusable workflows in
  `sebastienrousseau/config`, so a gate added once applies to the whole family.
- The release pipeline no longer marks the npm publish step `continue-on-error`; a
  failed publish now fails the job instead of reporting green.

### Fixed

- `index.d.ts` is asserted against the runtime export shape in CI.
- Rewrote Quick Start. It documented a `package.json` key and a `require()` call,
  neither of which any native toolchain resolves. It now shows copying the presets
  in, or passing their installed path to the tool.
- Added a `native-validate` CI job that installs the real toolchain (ruff, flake8) and validates the shipped presets.
- Corrected the OpenSSF Best Practices badge, which pointed at another project.
## [0.0.1] - 2026-09-09

### Added

- Initial release of `@sebastienrousseau/python-config` conforming to REPO-STANDARD.
- Standardized Python configuration presets: `pyproject.toml`, `ruff.toml`, `.flake8`.
- Full test coverage with Node.js test runner across unit, integration, and benchmark suites.
- Automated CI/CD pipelines with OpenSSF Scorecard, CodeQL, and OIDC trusted publishing.
