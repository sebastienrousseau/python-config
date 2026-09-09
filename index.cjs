const fs = require("fs");
const path = require("path");

const presets = ["pyproject.toml","ruff.toml",".flake8"];
const defaultPreset = "pyproject.toml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/python-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
