import { createFileRoute } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { EnquiryForm } from "@/components/enquiry-form";
import { seo } from "@/components/blocks";
import { addressLine, mapEmbed, venue } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact | Ohana's Venue Bebington",
      `Contact Ohana's at ${addressLine}. Call ${venue.phoneDisplay} or email ${venue.email}.`,
    ),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/contact", label: "Contact" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Please fill out this form and we will get back to you shortly. You can also WhatsApp {venue.phoneDisplay} or email {venue.email}.
        </p>
        <p className="mt-2">{addressLine}</p>
      </header>
      <iframe
        title="Map of Ohana's, 2c Bromborough Road, Bebington"
        src={mapEmbed}
        className="mx-auto mb-4 h-80 w-full max-w-6xl border border-line px-4"
        loading="lazy"
      />
      <EnquiryForm heading="General inquiry form" />
    </SiteShell>
  );
}
