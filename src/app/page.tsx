import { ButtonLink } from "@/components/ui/button-link";
import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function HomePage() {
  return (
    <main className="page-shell" id="contenido">
      <section className="container foundation-hero" aria-labelledby="home-title">
        <div className="foundation-hero__copy">
          <p className="eyebrow">{content.home.eyebrow}</p>
          <h1 id="home-title">{content.home.title}</h1>
          <p className="foundation-hero__description">
            {content.home.description}
          </p>
          <div className="button-row">
            <ButtonLink href="/contacto">{content.primaryAction.label}</ButtonLink>
          </div>
        </div>

        <div className="delivery-path" aria-label={content.home.processLabel}>
          <p className="delivery-path__label">{content.home.processLabel}</p>
          <ol>
            {content.home.process.map((step) => (
              <li key={step.index}>
                <span className="delivery-path__index">{step.index}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
