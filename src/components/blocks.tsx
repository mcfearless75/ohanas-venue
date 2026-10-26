import { Link } from "@tanstack/react-router";
import type { Occasion, Photo } from "@/lib/site";
import { EnquiryForm } from "@/components/enquiry-form";
import { Crumbs, JsonLd, SiteShell } from "@/components/chrome";
import { breadcrumbJsonLd } from "@/lib/site";

export function Hero({
  image,
  alt,
  kicker,
  title,
  children,
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-ink text-ivory">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        width={1400}
        height={1050}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 py-16">
        <p className="text-sm tracking-widest text-gold-soft uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-5xl sm:text-7xl">{title}</h1>
        {children ? <div className="mt-6 max-w-xl text-stone">{children}</div> : null}
      </div>
    </section>
  );
}

export function PackageView({ page }: { page: Occasion }) {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd("", [
          { name: "Home", path: "/" },
          { name: page.label, path: page.path },
        ])}
      />
      <Crumbs items={[{ to: page.path, label: page.label }]} />
      <Hero image={page.hero} alt={page.heroAlt} kicker={page.kicker} title={page.title}>
        <p>{page.intro}</p>
      </Hero>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {page.packages.map((item) => (
            <article key={item.name} className="flex flex-col border border-line bg-paper p-6">
              <h2 className="text-3xl">{item.name}</h2>
              {item.hire ? <p className="mt-2 text-sm tracking-wide text-gold uppercase">{item.hire}</p> : null}
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {item.items.map((line) => (
                  <li key={line} className="border-b border-stone/70 py-2">
                    {line}
                  </li>
                ))}
              </ul>
              <Link to={page.path} hash="enquire" className="mt-6 inline-block text-sm tracking-widest uppercase hover:text-gold">
                Enquire about this package
              </Link>
            </article>
          ))}
        </div>
        {page.footnotes?.map((note) => (
          <p key={note} className="mt-8 max-w-3xl text-muted">
            {note}
          </p>
        ))}
      </section>
      {page.includes ? (
        <section className="bg-ink text-ivory">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
            {page.includes.map((item) => (
              <div key={item.title}>
                <h2 className="text-3xl">{item.title}</h2>
                <p className="mt-3 text-stone">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
      {page.extras ? (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-4xl">Add your extras</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Add extras onto your wedding package to enhance the celebration.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.extras.map((extra) => (
              <article key={extra.title} className="border border-line p-5">
                <h3 className="text-2xl">{extra.title}</h3>
                <p className="mt-2 text-sm text-muted">{extra.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      <PhotoRow images={page.images} />
      {page.video ? (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="mb-4 text-4xl">Watch</h2>
          <video
            className="w-full bg-ink"
            controls
            playsInline
            preload="none"
            poster={page.video.poster}
          >
            <source src={page.video.src} type="video/mp4" />
          </video>
          <p className="mt-2 text-sm text-muted">{page.video.label}</p>
        </section>
      ) : null}
      <EnquiryForm
        event={page.event}
        packages={page.packages.map((item) => item.name)}
        heading={`${page.label} enquiry`}
      />
    </SiteShell>
  );
}

export function PhotoRow({ images }: { images: Photo[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="aspect-4/3 h-full w-full object-cover"
            width={700}
            height={525}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "geo.region", content: "GB-ENG" },
      { name: "geo.placename", content: "Bebington, Wirral" },
      { name: "geo.position", content: "53.3500552;-3.0026059" },
      { name: "ICBM", content: "53.3500552, -3.0026059" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Ohana's Venue" },
    ],
  };
}
