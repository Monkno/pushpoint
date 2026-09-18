import { PageIntro } from "@/components/page-intro";
import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function ServicesPage() {
  return <PageIntro {...content.placeholders.services} />;
}
