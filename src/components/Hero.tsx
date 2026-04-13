import { emitEvent } from "@/events/emit";
import { usePersonalization } from "@/personalization/usePersonalization";

export function Hero() {
  const { config, verticalId } = usePersonalization();
  const { hero } = config;

  return (
    <section className="hero card">
      <div className="hero__text">
        <h1>{hero.headline}</h1>
        <p className="hero__sub">{hero.subhead}</p>
        <a
          className="btn btn--primary"
          href={hero.ctaHref}
          onClick={() =>
            emitEvent("hero_cta_click", { verticalId, href: hero.ctaHref })
          }
        >
          {hero.ctaLabel}
        </a>
      </div>
      {hero.imageUrl ? (
        <div className="hero__media">
          <img src={hero.imageUrl} alt="" />
        </div>
      ) : null}
    </section>
  );
}
