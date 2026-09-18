import { PageIntro } from "@/components/page-intro";
import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function ApproachPage() {
  return <PageIntro {...content.placeholders.approach} />;
}
