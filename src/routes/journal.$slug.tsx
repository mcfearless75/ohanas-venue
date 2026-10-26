import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Crumbs, JsonLd, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";
import { postBySlug, posts } from "@/lib/site";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    seo(`${loaderData?.title ?? "Journal"} | Ohana's Venue Bebington`, loaderData?.excerpt ?? ""),
  component: Article,
});

function Article() {
  const post = Route.useLoaderData();
  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          articleBody: post.excerpt,
          author: { "@type": "Organization", name: "Ohana's" },
          publisher: { "@type": "Organization", name: "Ohana's Venue Bebington" },
          inLanguage: "en-GB",
        }}
      />
      <Crumbs
        items={[
          { to: "/journal", label: "News & blog" },
          { to: `/journal/${post.slug}`, label: post.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm tracking-widest text-gold uppercase">{post.niceDate}</p>
        <h1 className="mt-3 text-5xl">{post.title}</h1>
        <p className="mt-8 text-lg leading-relaxed">{post.excerpt}</p>
        <p className="mt-8 text-sm text-muted">
          This is the introduction saved from the original post. Ask the team if you want the longer version talked through on a viewing.
        </p>
        <Link to="/book" className="mt-6 inline-block bg-ink px-5 py-3 text-sm text-ivory hover:bg-gold">
          Book a viewing
        </Link>
      </article>
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="text-3xl">More from the journal</h2>
        <ul className="mt-4 space-y-3">
          {more.map((item) => (
            <li key={item.slug}>
              <Link to="/journal/$slug" params={{ slug: item.slug }} className="hover:text-gold">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
