import { createFileRoute } from "@tanstack/react-router";
import { PackageView, seo } from "@/components/blocks";
import { occasionByPath } from "@/lib/site";

const page = occasionByPath("/christenings")!;

export const Route = createFileRoute("/christenings")({
  head: () => seo(page.seoTitle, page.seoDescription),
  component: () => <PackageView page={page} />,
});
