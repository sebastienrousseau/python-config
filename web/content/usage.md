---
title: "Usage — @sebastienrousseau/python-config"
description: "How to use and configure @sebastienrousseau/python-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/python-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/python-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/python-config";
console.log(config.defaultPreset);
```
