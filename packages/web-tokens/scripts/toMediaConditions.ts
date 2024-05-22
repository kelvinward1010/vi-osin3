import fs from "fs";
import path from "path";

import { getMediaConditions, removeMetadata, MetaBreakpointsTokenGroup } from "../src";

const lessOutputDir = path.join(__dirname, "../dist/less");
const lessOutputPath = path.join(lessOutputDir, "media-queries.less");

export async function toMediaConditions(breakpoints: MetaBreakpointsTokenGroup) {
  if (!fs.existsSync(lessOutputDir)) {
    await fs.promises.mkdir(lessOutputDir, { recursive: true });
  }

  const mediaConditionEntries = Object.entries(getMediaConditions(removeMetadata(breakpoints)));

  const styles = mediaConditionEntries
    .map(([token, mediaConditions]) =>
      Object.entries(mediaConditions)
        .map(([direction, mediaCondition]) => `@p-${token}-${direction}: '${mediaCondition}';`)
        .join("\n"),
    )
    .join("\n\n");

  await fs.promises.writeFile(lessOutputPath, styles);
}
