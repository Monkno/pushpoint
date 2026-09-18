import Link from "next/link";

import { getSiteContent } from "@/content";

const content = getSiteContent();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{content.brand.name}</p>
          <p className="site-footer__summary">{content.footer.summary}</p>
        </div>
        <nav aria-label="Navegación del pie">
          <Link className="footer-link" href={content.footer.legalHref}>
            {content.footer.legalLabel}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
