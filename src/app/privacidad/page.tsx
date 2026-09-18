import { PageIntro } from "@/components/page-intro";
import { getSiteContent } from "@/content";

const content = getSiteContent();

export default function PrivacyPage() {
  return <PageIntro {...content.placeholders.privacy} />;
}
