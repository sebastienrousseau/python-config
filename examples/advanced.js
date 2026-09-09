const { presets } = require("../index.cjs");
const fs = require("fs");
const path = require("path");
console.log("=== Advanced Usage: @sebastienrousseau/python-config ===");
for (const p of presets) {
  const c = fs.readFileSync(path.join(__dirname, "..", p), "utf8");
  console.log(`Preset ${p} length: ${c.length}`);
}
