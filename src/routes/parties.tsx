import { createFileRoute } from "@tanstack/react-router";
import { PackageView, seo } from "@/components/blocks";
import { occasionByPath } from "@/lib/site";

const page = occasionByPath("/parties")!;

export const Route = createFileRoute("/parties")({
  head: () => seo(page.seoTitle, page.seoDescription),
  component: () => <PackageView page={page} />,
});
