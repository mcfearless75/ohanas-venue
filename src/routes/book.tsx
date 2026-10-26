import { createFileRoute } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { EnquiryForm } from "@/components/enquiry-form";
import { seo } from "@/components/blocks";
import { consultations } from "@/lib/site";

export const Route = createFileRoute("/book")({
  head: () =>
    seo(
      "Book a Consultation | Ohana's Venue Bebington",
      "Book a one-hour consultation at Ohana's in Bebington to talk through a wedding, party, baby shower, wake or meeting.",
    ),
  component: Book,
});

function Book() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/book", label: "Book a consultation" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm tracking-widest text-gold uppercase">One hour</p>
        <h1 className="mt-2 text-5xl sm:text-6xl">Book a consultation today</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Come in and talk through the event. Please note your booking is not confirmed until we email to say the enquiry has been received and an events manager is available.
        </p>
      </header>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 sm:grid-cols-2 lg:grid-cols-3">
        {consultations.map((item) => (
          <article key={item} className="border border-line bg-paper p-5">
            <h2 className="text-3xl">{item} booking</h2>
            <p className="mt-2 text-sm text-muted">Book an appointment to discuss your event · 1 hour</p>
          </article>
        ))}
      </section>
      <EnquiryForm
        heading="Request a viewing"
        event="Wedding"
        packages={[...consultations]}
        intro="Choose the kind of appointment. We will confirm the hour by email or WhatsApp."
      />
    </SiteShell>
  );
}
