import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/christening")({
  beforeLoad: () => {
    throw redirect({ to: "/christenings" });
  },
});
