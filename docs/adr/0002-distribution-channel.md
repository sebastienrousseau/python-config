<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# 0002 — Distribution channel

## Status

Accepted.

## Context

This package carries configuration for a toolchain that has nothing to do with
npm. ruff, flake8 read their configuration from files on disk,
resolved relative to the project, and have no concept of `node_modules`. Shipping
such presets on npm is therefore a genuine question, not an obvious choice.

## Decision

Publish to npm, and document the real consumption path honestly.

npm is chosen because the whole configuration family is versioned and released
together: one registry, one version number, one provenance story, one update
mechanism. A polyglot repository can pull every standard it needs from a single
place, which is the actual problem being solved.

What this decision explicitly does **not** claim is that the native tool resolves
the package. It does not. The README documents copying the preset out, or
pointing the tool at the installed path with its own configuration flag. Earlier
releases documented a `require()`-based usage that could never have worked; that
was corrected in 0.0.7.

## Consequences

Consumers need one extra, explicit step — a copy or a `--config` flag — and the
README has to keep stating it. In exchange, the preset is versioned, signed and
auditable like everything else in the family. If a native registry for these
presets becomes worth the duplication, this ADR gets superseded rather than
quietly amended.
