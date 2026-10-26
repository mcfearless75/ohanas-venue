import { createFileRoute } from "@tanstack/react-router";
import { PackageView, seo } from "@/components/blocks";
import { occasionByPath } from "@/lib/site";

const page = occasionByPath("/gender-reveals")!;

export const Route = createFileRoute("/gender-reveals")({
  head: () => seo(page.seoTitle, page.seoDescription),
  component: () => <PackageView page={page} />,
});
