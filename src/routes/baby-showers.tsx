import { createFileRoute } from "@tanstack/react-router";
import { PackageView, seo } from "@/components/blocks";
import { occasionByPath } from "@/lib/site";

const page = occasionByPath("/baby-showers")!;

export const Route = createFileRoute("/baby-showers")({
  head: () => seo(page.seoTitle, page.seoDescription),
  component: () => <PackageView page={page} />,
});
