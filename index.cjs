// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

const fs = require("fs");
const path = require("path");

const presets = ["pyproject.toml", "ruff.toml", ".flake8"];
const defaultPreset = "pyproject.toml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/python-config",
  version: "0.0.7",
  presets,
  defaultPreset,
  content,
};
