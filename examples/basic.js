// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

const config = require("../index.cjs");
console.log("=== Basic Usage: @sebastienrousseau/python-config ===");
console.log("Presets available:", config.presets);
console.log("Default preset content preview:", config.content.slice(0, 50));
