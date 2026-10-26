import { createFileRoute } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { EnquiryForm } from "@/components/enquiry-form";
import { seo } from "@/components/blocks";
import { nights } from "@/lib/site";

export const Route = createFileRoute("/whats-on")({
  head: () =>
    seo(
      "Party Nights & Events | Ohana's Venue Bebington",
      "Christmas party nights, live shows and bingo at Ohana's Venue, Bebington. See what is on and book spaces.",
    ),
  component: WhatsOn,
});

function WhatsOn() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/whats-on", label: "Party nights & events" }]} />
      <header className="mx-auto grid max-w-6xl items-end gap-8 px-4 py-12 lg:grid-cols-2">
        <div>
          <p className="text-sm tracking-widest text-gold uppercase">What's on</p>
          <h1 className="mt-2 text-5xl sm:text-6xl">Book your party night at Ohana's</h1>
          <p className="mt-4 text-muted">
            Christmas party nights, live shows and events. Below is what is coming up. Book spaces at the bottom of the page. Some nights sell out — the Halloween bingo on the original site was already on last call.
          </p>
        </div>
        <img src="/media/c859789bcef342b6.jpg" alt="A party night at Ohana's" className="w-full object-cover" />
      </header>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 md:grid-cols-2">
        {nights.map((night) => (
          <article key={night.name} className="border border-line bg-paper p-6">
            <h2 className="text-3xl">{night.name}</h2>
            <p className="mt-2 text-sm tracking-wide text-gold uppercase">{night.when}</p>
            <p className="mt-3 text-muted">{night.detail}</p>
          </article>
        ))}
      </section>
      <video
        className="mx-auto mb-8 w-full max-w-6xl px-4"
        controls
        playsInline
        preload="none"
        poster="/video/blog.jpg"
      >
        <source src="/video/blog.mp4" type="video/mp4" />
      </video>
      <EnquiryForm
        showPartyNights
        event="Party night"
        heading="Book a party night"
        intro="Choose the night and tell us how many guests. We confirm by email — a space is not held until then."
      />
    </SiteShell>
  );
}
