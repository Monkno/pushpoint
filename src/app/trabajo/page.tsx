import { PageIntro } from "@/components/page-intro";
import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function WorkPage() {
  return <PageIntro {...content.placeholders.work} />;
}
