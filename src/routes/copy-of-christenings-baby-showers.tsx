import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/copy-of-christenings-baby-showers")({
  beforeLoad: () => {
    throw redirect({ to: "/gender-reveals" });
  },
});
