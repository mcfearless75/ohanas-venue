import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/babyshowers")({
  beforeLoad: () => {
    throw redirect({ to: "/baby-showers" });
  },
});
