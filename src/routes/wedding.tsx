import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/wedding")({
  beforeLoad: () => {
    throw redirect({ to: "/weddings" });
  },
});
