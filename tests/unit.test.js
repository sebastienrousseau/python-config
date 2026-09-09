const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/python-config Unit Tests", () => {
  it("should load CommonJS module successfully", () => {
    const config = require("../index.cjs");
    assert(config !== null && typeof config === "object");
    assert.strictEqual(config.name, "@sebastienrousseau/python-config");
    assert.strictEqual(config.version, "0.0.1");
    assert(Array.isArray(config.presets) && config.presets.length > 0);
  });

  it("should load root index.js entrypoint successfully", () => {
    const config = require("../index.js");
    assert(config !== null && typeof config === "object");
    assert.strictEqual(config.name, "@sebastienrousseau/python-config");
  });

  it("should load ESM module entrypoint successfully", async () => {
    const esm = await import("../index.mjs");
    assert(esm.default !== null && typeof esm.default === "object");
    assert.strictEqual(esm.default.name, "@sebastienrousseau/python-config");
  });

  it("should have valid package.json metadata", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));
    assert.strictEqual(pkg.name, "@sebastienrousseau/python-config");
    assert.strictEqual(pkg.version, "0.0.1");
    assert.strictEqual(pkg.license, "Apache-2.0 OR MIT");
  });

  it("should include TypeScript declarations file", () => {
    const dtsPath = path.join(__dirname, "../index.d.ts");
    assert(fs.existsSync(dtsPath));
    const content = fs.readFileSync(dtsPath, "utf8");
    assert(content.length > 0);
  });

  it("should verify preset files exist and are readable", () => {
    const { presets } = require("../index.cjs");
    for (const p of presets) {
      const pPath = path.join(__dirname, "..", p);
      assert(fs.existsSync(pPath), `Preset file ${p} must exist`);
      assert(fs.readFileSync(pPath, "utf8").length > 0);
    }
  });
});
