import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function ContactPage() {
  return (
    <main className="page-shell" id="contenido">
      <section className="container page-intro" aria-labelledby="page-title">
        <p className="eyebrow">{content.contact.eyebrow}</p>
        <h1 id="page-title">{content.contact.title}</h1>
        <p className="page-intro__description">{content.contact.description}</p>
        <address className="contact-list">
          {content.contact.channels.map((channel) => (
            <a
              href={channel.href}
              key={channel.label}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
            </a>
          ))}
        </address>
      </section>
    </main>
  );
}
