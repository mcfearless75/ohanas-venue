import { createFileRoute, Link } from "@tanstack/react-router";
import { Crumbs, SiteShell } from "@/components/chrome";
import { seo } from "@/components/blocks";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/journal")({
  head: () =>
    seo(
      "News & Blog | Ohana's Venue Bebington",
      "News and writing from Ohana's on weddings and events on the Wirral.",
    ),
  component: Journal,
});

function Journal() {
  return (
    <SiteShell>
      <Crumbs items={[{ to: "/journal", label: "News & blog" }]} />
      <header className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm tracking-widest text-gold uppercase">News & blog</p>
        <h1 className="mt-2 text-5xl">All posts</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          These are the introductions published on the original Ohana's journal. The old Wix pages loaded the rest of each article in the browser only, so the full essays were not in the page we could save. The openings are here, word for word.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16">
        {posts.map((post) => (
          <article key={post.slug} className="border border-line bg-paper p-6">
            <p className="text-xs tracking-widest text-gold uppercase">{post.niceDate}</p>
            <h2 className="mt-2 text-3xl">
              <Link to="/journal/$slug" params={{ slug: post.slug }} className="hover:text-gold">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-muted">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
