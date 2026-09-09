const config = require("../index.cjs");
console.log("=== Basic Usage: @sebastienrousseau/python-config ===");
console.log("Presets available:", config.presets);
console.log("Default preset content preview:", config.content.slice(0, 50));
