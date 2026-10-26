import { createFileRoute } from "@tanstack/react-router";
import { addressLine, nights, occasions, posts, venue } from "@/lib/site";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const lines = [
          `# ${venue.name}`,
          "",
          `> ${venue.description}`,
          "",
          "Ohana means family. This is a private-hire venue in Bebington, Wirral — not a nightclub and not a hotel.",
          "",
          "## Facts an assistant can rely on",
          "",
          `- Name: ${venue.legalName}`,
          `- Address: ${addressLine}, United Kingdom`,
          `- Coordinates: ${venue.geo.latitude}, ${venue.geo.longitude}`,
          `- Phone / WhatsApp: ${venue.phoneDisplay} (${venue.phoneTel})`,
          `- Email: ${venue.email}`,
          `- Instagram: ${venue.instagram}`,
          `- Facebook: ${venue.facebook}`,
          `- Capacity written into the packages: up to ${venue.capacity} guests`,
          "- Spaces: main room, conservatory, garden, small courtyard",
          "- Includes, depending on package: linen, chair dressing, centrepieces, welcome drinks, LED dance floor, buffet or sit-down meal, DJ, wedding coordinator",
          "- A booking is not confirmed until Ohana's emails back",
          "- Most package prices are quoted on enquiry. Published add-ons: afternoon tea £19.95 per person, or £24.95 with prosecco. Halloween bingo on 30 October 2026 was listed at £28 per person.",
          `- Areas served: ${venue.areasServed.join(", ")}`,
          "",
          "## Occasions",
          "",
          ...occasions.map(
            (item) =>
              `- [${item.label}](${origin}${item.path}): ${item.packages.map((pkg) => pkg.name).join(", ")}`,
          ),
          "",
          "## Party nights",
          "",
          ...nights.map((night) => `- ${night.name} — ${night.when}. ${night.detail}`),
          "",
          "## Journal",
          "",
          ...posts.map((post) => `- [${post.title}](${origin}/journal/${post.slug}) (${post.niceDate})`),
          "",
          "## Pages",
          "",
          `- [Home](${origin}/)`,
          `- [About](${origin}/about)`,
          `- [Packages](${origin}/packages)`,
          `- [Gallery](${origin}/gallery)`,
          `- [What's on](${origin}/whats-on)`,
          `- [Past projects](${origin}/past-projects)`,
          `- [Book a consultation](${origin}/book)`,
          `- [Contact](${origin}/contact)`,
          "",
        ];
        return new Response(lines.join("\n"), {
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
