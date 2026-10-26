import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Crumbs, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";

import gallery from "@/data/gallery.json";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seo(
      "Gallery | Ohana's Venue Bebington",
      "Ohana's venue, Wirral, Bebington. Photographs of weddings, parties and the rooms.",
    ),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/gallery", label: "Gallery" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl">Gallery</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Photographs saved from the original Ohana's site — the rooms, the styling, and the celebrations. Select any picture to look closer.
        </p>
      </header>
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-16 md:grid-cols-3">
        {gallery.map((file) => (
          <li key={file}>
            <button type="button" className="block w-full" onClick={() => setOpen(file)}>
              <img
                src={`/media/${file}`}
                alt="Celebration or room at Ohana's venue, Bebington"
                className="aspect-square w-full object-cover"
                loading="lazy"
                width={700}
                height={700}
              />
            </button>
          </li>
        ))}
      </ul>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph"
        >
          <button type="button" className="absolute inset-0" aria-label="Close" onClick={() => setOpen(null)} />
          <img
            src={`/media/${open}`}
            alt="Selected photograph from Ohana's, Bebington"
            className="relative max-h-[85vh] w-auto max-w-full object-contain"
          />
          <button
            type="button"
            className="absolute top-4 right-4 bg-ivory px-4 py-3 text-sm text-ink"
            onClick={() => setOpen(null)}
          >
            Close
          </button>
        </div>
      ) : null}
    </SiteShell>
  );
}
