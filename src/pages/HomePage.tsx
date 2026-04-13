import { Link } from "react-router-dom";
import { DemoDisclaimer } from "@/components/DemoDisclaimer";
import type { VerticalId } from "@/model/verticalConfig";
import { usePageView } from "@/hooks/usePageView";

const verticals: { id: VerticalId; blurb: string }[] = [
  { id: "provider", blurb: "Health systems & clinics" },
  { id: "payer", blurb: "Plans & member experience" },
  { id: "pharma", blurb: "Education & access (demo)" },
  { id: "medtech", blurb: "Devices & diagnostics" },
  { id: "custom", blurb: "SE-configured storyline" },
];

export function HomePage() {
  usePageView("HC Personalization Demo — Home");

  return (
    <div className="page home">
      <header className="home__hero card">
        <h1>Healthcare personalization demo</h1>
        <p className="lead">
          Mock marketing site for Salesforce personalization: anonymous browsing, exit intent,
          hero and blog, chat, and adaptive sections — with engagement events for Data Cloud.
        </p>
        <DemoDisclaimer />
      </header>
      <section>
        <h2>Choose a vertical</h2>
        <ul className="vertical-grid">
          {verticals.map((v) => (
            <li key={v.id}>
              <Link to={`/v/${v.id}`} className="vertical-card card">
                <span className="vertical-card__title">{v.id}</span>
                <span className="muted">{v.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
