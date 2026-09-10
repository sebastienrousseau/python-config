# `@sebastienrousseau/python-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/python-config`.

---

## Description

Shareable Python configuration standards providing hardened Ruff, Black, Flake8, and MyPy rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/python-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. ruff.toml

- **Description**: Exhaustive Ruff configuration with strict linter rule selection, isort import sorting, and py312 target.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. pyproject.toml

- **Description**: Standardized pyproject.toml preset declaring MyPy strict settings and build system specifications.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. .flake8

- **Description**: Legacy compatibility preset for CI environments running classic Flake8 test batteries.
- **Scope**: Production & Development
- **Status**: Stable & Active
