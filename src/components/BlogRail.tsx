import { usePersonalization } from "@/personalization/usePersonalization";

export function BlogRail() {
  const { config } = usePersonalization();
  if (!config.blog.length) return null;

  return (
    <section className="blog-rail card">
      <h2>Recommended reading</h2>
      <ul className="blog-rail__list">
        {config.blog.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.title}</a>
            <p className="muted small">{item.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
