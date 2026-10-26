import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  addressLine,
  allNav,
  mapLink,
  primaryNav,
  venue,
  venueJsonLd,
} from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <JsonLd data={venueJsonLd()} />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-ink text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{addressLine}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={`tel:${venue.phoneTel}`} className="underline-offset-4 hover:underline">
            {venue.phoneDisplay}
          </a>
          <a href={`mailto:${venue.email}`} className="underline-offset-4 hover:underline">
            {venue.email}
          </a>
        </p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="shrink-0" aria-label="Ohana's home">
          <img
            src="/media/508e9f34eeb54cc9.png"
            alt="Ohana's venue and function hire"
            className="h-12 w-auto sm:h-14"
            width={220}
            height={80}
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-ink hover:text-gold"
              activeProps={{ className: "text-sm tracking-wide text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-ink px-4 py-3 text-sm tracking-wide text-ivory hover:bg-gold"
          >
            Book a viewing
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="border-t border-line bg-paper lg:hidden" aria-label="All pages">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4">
            {allNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block min-h-11 py-2 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <nav className="hidden border-t border-line lg:block" aria-label="All pages">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-4 gap-y-2 px-4 py-2 text-xs tracking-wide text-muted uppercase">
          {allNav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-ink" activeProps={{ className: "text-ink" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src="/media/e589e6be2df34a43.png"
            alt=""
            className="mb-4 h-12 w-auto"
            width={160}
            height={48}
          />
          <p className="max-w-sm text-stone">{venue.short}</p>
          <p className="mt-4 text-sm text-stone">
            In Hawaiian, ohana means family. Nobody gets left out, and nothing is left to chance.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm tracking-widest text-gold-soft uppercase">Visit</h2>
          <address className="mt-3 text-sm not-italic text-stone">
            {venue.address.street}
            <br />
            {venue.address.locality}, {venue.address.region}
            <br />
            {venue.address.postalCode}
            <br />
            United Kingdom
          </address>
          <a className="mt-3 inline-block text-sm underline-offset-4 hover:underline" href={mapLink}>
            Open in Google Maps
          </a>
        </div>
        <div>
          <h2 className="font-sans text-sm tracking-widest text-gold-soft uppercase">Talk to us</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${venue.phoneTel}`}>{venue.phoneDisplay}</a>
            </li>
            <li>
              <a href={venue.whatsapp}>WhatsApp</a>
            </li>
            <li>
              <a href={`mailto:${venue.email}`}>{venue.email}</a>
            </li>
            <li>
              <a href={venue.instagram}>{venue.instagramHandle}</a>
            </li>
            <li>
              <a href={venue.facebook}>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone/30">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-stone">
          © {new Date().getFullYear()} Ohana's Venue, Bebington. Private hire · weddings · parties · wakes.
        </p>
      </div>
    </footer>
  );
}

export function Crumbs({ items }: { items: { to: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.to} className="flex gap-2">
            <span aria-hidden>/</span>
            <Link to={item.to} className="hover:text-ink">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
