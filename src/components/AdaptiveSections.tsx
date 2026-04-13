import { usePersonalization } from "@/personalization/usePersonalization";
import { visibleAdaptiveSections } from "@/personalization/selectors";

export function AdaptiveSections() {
  const { config, segment } = usePersonalization();
  const sections = visibleAdaptiveSections(config, segment);
  if (!sections.length) return null;

  return (
    <section className="adaptive card">
      <h2>Adaptive content</h2>
      <p className="muted small">
        Segment: <strong>{segment}</strong> — mock resolver shows sections whose{" "}
        <code>showWhen</code> rules match (or no rule).
      </p>
      <div className="adaptive__grid">
        {sections.map((s) => (
          <article key={s.id} className="adaptive__card">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
