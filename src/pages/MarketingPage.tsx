import { usePersonalization } from "@/personalization/usePersonalization";
import { Hero } from "@/components/Hero";
import { BlogRail } from "@/components/BlogRail";
import { AdaptiveSections } from "@/components/AdaptiveSections";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { ChatPanel } from "@/components/ChatPanel";
import { usePageView } from "@/hooks/usePageView";

export function MarketingPage() {
  const { config, segment } = usePersonalization();
  usePageView(`${config.displayName} — Home`);

  const segmentLabel =
    config.segmentLabels.find((s) => s.key === segment)?.label ?? segment;

  return (
    <div className="page marketing">
      <p className="segment-pill card">
        <strong>Mock segment:</strong> {segmentLabel}
      </p>
      <Hero />
      <div className="two-col">
        <BlogRail />
        <AdaptiveSections />
      </div>
      <ExitIntentModal />
      <ChatPanel />
    </div>
  );
}
