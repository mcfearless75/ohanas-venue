import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/party-packages")({
  beforeLoad: () => {
    throw redirect({ to: "/parties" });
  },
});
