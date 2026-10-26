import { createFileRoute } from "@tanstack/react-router";
import { PackageView, seo } from "@/components/blocks";
import { occasionByPath } from "@/lib/site";

const page = occasionByPath("/wakes")!;

export const Route = createFileRoute("/wakes")({
  head: () => seo(page.seoTitle, page.seoDescription),
  component: () => <PackageView page={page} />,
});
