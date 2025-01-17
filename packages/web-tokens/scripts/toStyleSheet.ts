import fs from "fs";
import path from "path";

import { Metadata, MetadataGroup } from "../src";

const cssOutputDir = path.join(__dirname, "../dist/css");
const lessOutputDir = path.join(__dirname, "../dist/less");
const cssOutputPath = path.join(cssOutputDir, "styles.css");
const lessOutputPath = path.join(lessOutputDir, "styles.less");

/**
 * Creates static CSS custom properties.
 * Note: These values don't vary by color-scheme.
 */
export function getStaticCustomProperties(metadata: Metadata) {
  return Object.entries(metadata)
    .map(([_, tokenGroup]) => getCustomProperties(tokenGroup))
    .join("");
}

/**
 * Creates CSS custom properties for a given metadata object.
 */
export function getCustomProperties(tokenGroup: MetadataGroup) {
  return Object.entries(tokenGroup)
    .map(([token, { value }]) =>
      token.startsWith("keyframes") ? `--p-${token}:p-${token};` : `--p-${token}:${value};`,
    )
    .join("");
}

/**
 * Concatenates the `keyframes` token-group into a single string.
 */
export function getKeyframes(motion: MetadataGroup) {
  return Object.entries(motion)
    .filter(([token]) => token.startsWith("keyframes"))
    .map(([token, { value }]) => `@keyframes p-${token}${value}`)
    .join("");
}

export async function toStyleSheet(metadata: Metadata) {
  if (!fs.existsSync(cssOutputDir)) {
    await fs.promises.mkdir(cssOutputDir, { recursive: true });
  }
  if (!fs.existsSync(lessOutputDir)) {
    await fs.promises.mkdir(lessOutputDir, { recursive: true });
  }

  const styles = `
  :root{color-scheme:light;${getStaticCustomProperties(metadata)}}
  ${getKeyframes(metadata.motion)}
`;

  await fs.promises.writeFile(cssOutputPath, styles);
  await fs.promises.writeFile(lessOutputPath, styles);
}
