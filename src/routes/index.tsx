import { createFileRoute, Link } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";
import {
  addressLine,
  faqs,
  faqJsonLd,
  mapEmbed,
  nights,
  occasions,
  photos,
  posts,
  spaces,
  venue,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Ohana's | Private venue hire Wirral | 2c Bromborough Rd, Bebington, Wirral CH63 7RE",
      venue.description,
    ),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <JsonLd data={faqJsonLd()} />
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink text-ivory">
        <img
          src={photos.hero}
          alt="Black-tie tables and white florals in the Ohana's function room, Bebington"
          className="absolute inset-0 h-full w-full object-cover"
          width={1400}
          height={1050}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 py-16">
          <p className="text-sm tracking-widest text-gold-soft uppercase">Bebington · Wirral</p>
          <h1 className="mt-3 max-w-4xl text-5xl sm:text-7xl">{venue.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-stone">
            Planning a wedding, event or party? Private hire of the main room, conservatory and garden — styled, hosted and yours alone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquire" className="bg-ivory px-5 py-3 text-sm tracking-wide text-ink hover:bg-gold-soft">
              Leave your enquiry
            </a>
            <Link to="/weddings" className="border border-ivory px-5 py-3 text-sm tracking-wide hover:bg-ivory hover:text-ink">
              Wedding packages
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm tracking-widest text-gold uppercase">The venue</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">A family room, dressed for the occasion</h2>
          <p className="mt-4 text-muted">
            Ohana's is a beautifully designed multi-use venue on the Wirral. Baby showers, bridal parties, birthdays, wakes, workshops and weddings all use the same private rooms — tailored, not shared with a public bar.
          </p>
          <p className="mt-4 text-muted">
            You are a few minutes from Port Sunlight and Birkenhead, and easy to reach from Hoylake, West Kirby, Wallasey and Liverpool. Up to 80 guests. A late licensed bar. An LED dance floor when the package calls for it.
          </p>
        </div>
        <img
          src={photos.candles}
          alt="Candlelit wedding place setting at Ohana's"
          className="aspect-4/3 w-full object-cover"
          width={1400}
          height={1050}
        />
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-4xl">The rooms</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {spaces.map((space) => (
              <article key={space.name} className="border border-line p-6">
                <h3 className="text-3xl">{space.name}</h3>
                <p className="mt-3 text-sm text-muted">{space.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl">Packages</h2>
          <Link to="/packages" className="text-sm tracking-widest uppercase hover:text-gold">
            All hire
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item) => (
            <Link key={item.path} to={item.path} className="group border border-line bg-paper">
              <img src={item.hero} alt="" className="aspect-4/3 w-full object-cover" width={700} height={525} loading="lazy" />
              <div className="p-5">
                <p className="text-xs tracking-widest text-gold uppercase">{item.kicker}</p>
                <h3 className="mt-1 text-3xl group-hover:text-gold">{item.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest text-gold-soft uppercase">Book Christmas 2026</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Party nights & events</h2>
            <ul className="mt-6 space-y-4">
              {nights.map((night) => (
                <li key={night.name} className="border-b border-stone/30 pb-4">
                  <p className="font-display text-2xl">{night.name}</p>
                  <p className="text-sm text-stone">{night.when}</p>
                </li>
              ))}
            </ul>
            <Link to="/whats-on" className="mt-6 inline-block border border-ivory px-5 py-3 text-sm hover:bg-ivory hover:text-ink">
              See what's on
            </Link>
          </div>
          <figure>
            <video className="w-full" controls playsInline preload="none" poster="/video/home.jpg">
              <source src="/video/home.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-sm text-stone">A film of the venue, from the original Ohana's site.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl">From the journal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug} className="border border-line bg-paper p-5">
              <p className="text-xs tracking-widest text-gold uppercase">{post.niceDate}</p>
              <h3 className="mt-2 text-2xl">
                <Link to="/journal/$slug" params={{ slug: post.slug }} className="hover:text-gold">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-4 text-sm text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <EnquiryForm />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl">Find us</h2>
          <p className="mt-3 text-muted">{addressLine}, UK</p>
          <dl className="mt-6 space-y-3 text-sm">
            {faqs.slice(0, 4).map((item) => (
              <div key={item.q}>
                <dt className="font-medium">{item.q}</dt>
                <dd className="mt-1 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <iframe
          title="Map of Ohana's at 2c Bromborough Road, Bebington"
          src={mapEmbed}
          className="min-h-80 w-full border border-line"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </SiteShell>
  );
}
