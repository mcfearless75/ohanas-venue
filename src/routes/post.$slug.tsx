import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/journal/$slug", params });
  },
});
