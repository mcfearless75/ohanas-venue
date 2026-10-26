import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/partynights")({
  beforeLoad: () => {
    throw redirect({ to: "/whats-on" });
  },
});
