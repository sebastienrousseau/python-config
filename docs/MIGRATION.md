# Migration Guide for `@sebastienrousseau/python-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/python-config`.

## Upgrading from Previous Versions

1. Update package version:

   ```bash
   npm install --save-dev @sebastienrousseau/python-config@latest
   ```

1. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/python-config` in your project configuration or config entrypoint.
