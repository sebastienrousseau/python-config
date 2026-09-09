export interface ConfigPreset {
  name: string;
  version: string;
  presets: string[];
  defaultPreset: string;
  content: string;
}

declare const config: ConfigPreset;
export default config;
