import { createFileRoute, Link } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { EnquiryForm } from "@/components/enquiry-form";
import { seo } from "@/components/blocks";
import { photos, venue } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About | Ohana's Venue Bebington",
      "Ohana's is an exclusive venue hire for weddings, birthdays and christenings in Bebington, with a bar, party space and garden.",
    ),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/about", label: "About" }]} />
      <header className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 lg:grid-cols-2">
        <div>
          <p className="text-sm tracking-widest text-gold uppercase">About us</p>
          <h1 className="mt-2 text-5xl sm:text-6xl">Welcome to Ohana's</h1>
          <p className="mt-4 text-muted">
            Welcome to Ohana's, a beautifully designed, multi-use venue on the Wirral, ready for a baby shower, bridal party, pop-up, wellness class, private function or creative workshop. The setting is modern and intimate, and it can be tailored to the brief.
          </p>
          <p className="mt-4 text-muted">
            Conveniently located on the Wirral Peninsula, and easy to reach from Birkenhead, Wallasey, West Kirby and Hoylake, it has become one of the peninsula's popular choices for private hire. Flexible bookings, styled décor, and a relaxed room.
          </p>
        </div>
        <img src={photos.room} alt="The function room at Ohana's, Bebington" className="w-full object-cover" />
      </header>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl">Weddings at Ohana's</h2>
            <p className="mt-4 text-muted">
              Ohana's in Bebington is a boutique wedding setting with flexible packages and a personal touch. Central, near Port Sunlight and Birkenhead, it suits couples who want a modern, intimate celebration guests can actually get to.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Elegant interiors and a neutral palette that takes any theme.</li>
              <li>A layout for a quieter ceremony moment and a lively reception.</li>
              <li>Exclusive hire, so the day stays private.</li>
              <li>Décor, catering, entertainment and timings shaped around you.</li>
              <li>An in-house styling team, and pricing explained before you commit.</li>
            </ul>
            <Link to="/weddings" className="mt-6 inline-block bg-ink px-5 py-3 text-sm text-ivory hover:bg-gold">
              Wedding packages
            </Link>
          </div>
          <img src={photos.tables} alt="White floral wedding tables at Ohana's" className="w-full object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl">A useful local address</h2>
        <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          {[
            "Private venue hire, Wirral",
            "Event space hire, Birkenhead",
            "Party venue hire, Wirral",
            "Baby shower venue, Wirral",
            "Workshop space, Wirral",
            "Pop-up venue hire, Merseyside",
          ].map((item) => (
            <li key={item} className="border border-line px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-muted">
          {venue.name} is run as a family venue: warm service, and the sort of night people still talk about. Cheryl, the business director, is part of the team in front of and behind the room. Book the next event somewhere that feels like home — {venue.address.street}, {venue.address.postalCode}.
        </p>
      </section>
      <EnquiryForm heading="Contact us" event="Other" />
    </SiteShell>
  );
}
