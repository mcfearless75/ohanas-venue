import { createFileRoute, Link } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";
import { projects, venue } from "@/lib/site";

export const Route = createFileRoute("/past-projects")({
  head: () =>
    seo(
      "Past Events & Celebrations | Ohana's Venue Bebington",
      "Discover past weddings, birthdays and celebrations at Ohana's Venue. Bespoke décor, themed styling and an exclusive garden venue in Bebington.",
    ),
  component: Past,
});

function Past() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/past-projects", label: "Past projects" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm tracking-widest text-gold uppercase">Past projects</p>
        <h1 className="mt-2 max-w-3xl text-5xl sm:text-6xl">Celebrations, styled around the people in the room</h1>
        <p className="mt-4 max-w-2xl text-muted">
          From milestone birthdays to weddings and baby showers, every celebration at Ohana's is styled to reflect the people at its heart. Full films of past projects live on Instagram.
        </p>
        <a className="mt-4 inline-block text-sm tracking-widest uppercase hover:text-gold" href={venue.instagram}>
          {venue.instagramHandle}
        </a>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16">
        {projects.map((project, index) => (
          <article key={project.title} className="grid items-center gap-6 border border-line bg-paper md:grid-cols-2">
            <img
              src={project.image}
              alt={project.alt}
              className={`h-full max-h-96 w-full object-cover ${index % 2 ? "md:order-2" : ""}`}
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-4xl">{project.title}</h2>
              <p className="mt-3 text-muted">{project.body}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-16 text-sm">
        Planning something in the same spirit? <Link to="/parties" className="underline">See party packages</Link> or <Link to="/book" className="underline">book a consultation</Link>.
      </p>
    </SiteShell>
  );
}
