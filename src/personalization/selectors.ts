import type { VerticalConfig } from "@/model/verticalConfig";
import type { DemoSegment } from "@/personalization/context";

/** Mock “adapter” surface: resolve visible adaptive sections for segment */
export function visibleAdaptiveSections(
  config: VerticalConfig,
  segment: DemoSegment,
) {
  return config.adaptiveSections.filter((section) => {
    const segs = section.showWhen?.segments;
    if (!segs?.length) return true;
    return segs.includes(segment);
  });
}
