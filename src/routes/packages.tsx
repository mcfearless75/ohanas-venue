import { createFileRoute, Link } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";
import { occasions, photos } from "@/lib/site";

export const Route = createFileRoute("/packages")({
  head: () =>
    seo(
      "Venue Hire Packages | Ohana's Bebington",
      "Private venue hire packages at Ohana's, Bebington: weddings, parties, christenings, baby showers, gender reveals and wakes.",
    ),
  component: Packages,
});

function Packages() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/packages", label: "Venue hire packages" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm tracking-widest text-gold uppercase">Venue hire</p>
        <h1 className="mt-2 text-5xl sm:text-6xl">Packages for the way you celebrate</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Enjoy full use of Ohana's. Every package below is the one published on the original site. Prices are confirmed when you enquire — numbers, food and date change the quote.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2">
        {occasions.map((item) => (
          <Link key={item.path} to={item.path} className="grid border border-line bg-paper sm:grid-cols-2">
            <img src={item.hero} alt="" className="h-full min-h-48 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <h2 className="text-3xl">{item.label}</h2>
              <p className="mt-2 text-sm text-muted">{item.packages.length} packages · up to 80 guests</p>
              <p className="mt-4 text-sm tracking-widest uppercase">Read more</p>
            </div>
          </Link>
        ))}
      </div>
      <img src={photos.sign} alt="Ohana's signage at the Bebington venue" className="mx-auto mb-16 max-h-80 w-full max-w-6xl object-cover px-4" loading="lazy" />
    </SiteShell>
  );
}
