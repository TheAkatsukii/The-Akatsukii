import Image from "next/image";
import Link from "next/link";

const featuredPost = {
  title: "Why We Plan Before We Build",
  excerpt:
    "The architectural decisions made early in a project often determine its long-term success. Here's why planning remains the highest-leverage part of software development.",
  image: "/assets/site/insight-featured.jpg",
  href: "/insights/why-we-plan-before-we-build",
  tag: "Architecture",
  date: "2026-07-01",
};

const posts = [
  {
    title: "When Custom Software Becomes the Right Choice",
    excerpt:
      "A practical guide to knowing when off-the-shelf tools stop supporting growth.",
    image: "/assets/site/insight-1.jpg",
    href: "/insights/custom-software-right-choice",
    tag: "Strategy",
    date: "2026-06-18",
  },
  {
    title: "Designing Systems That Scale With Your Team",
    excerpt: "Growth introduces complexity. Good architecture helps absorb it.",
    image: "/assets/site/insight-2.jpg",
    href: "/insights/designing-scalable-systems",
    tag: "Engineering",
    date: "2026-05-27",
  },
  {
    title: "Building Better Commerce Experiences",
    excerpt:
      "What modern commerce teams should focus on beyond conversion rates.",
    image: "/assets/site/insight-3.jpg",
    href: "/insights/better-commerce-experiences",
    tag: "Commerce",
    date: "2026-05-03",
  },
  {
    title: "The Cost of Technical Debt",
    excerpt: "How small shortcuts compound into expensive business problems.",
    image: "/assets/site/insight-4.jpg",
    href: "/insights/the-cost-of-technical-debt",
    tag: "Architecture",
    date: "2026-04-14",
  },
  {
    title: "Choosing the Right Architecture Early",
    excerpt: "The decisions that matter most before development begins.",
    image: "/assets/site/insight-5.jpg",
    href: "/insights/right-architecture-early",
    tag: "Engineering",
    date: "2026-03-29",
  },
  {
    title: "Building Software That Lasts",
    excerpt: "Maintainability isn't accidental. It's designed from day one.",
    image: "/assets/site/insight-6.jpg",
    href: "/insights/building-software-that-lasts",
    tag: "Product Development",
    date: "2026-03-10",
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <span className="label-mono">Insights</span>

          <h1 className="mt-4 max-w-[10ch]">Ideas from the work.</h1>

          <p className="mt-6 max-w-3xl text-lg text-ink-soft">
            Thoughts on software architecture, product development, commerce
            platforms and building systems that continue to create value over
            time.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <Link
            href={featuredPost.href}
            className="group grid gap-8 overflow-hidden rounded-lg border border-steel-soft bg-paper-raised md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="label-mono">Featured Insight</span>

              <h2 className="mt-4">{featuredPost.title}</h2>

              <p className="mt-4 text-ink-soft">{featuredPost.excerpt}</p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal">
                Read Article →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-steel-soft">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="label-mono">{post.tag}</span>

                  <span className="text-xs text-ink-soft">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mt-3 text-lg transition-colors group-hover:text-signal">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="rounded-lg border border-steel-soft bg-paper-raised p-8 md:p-12">
            <span className="label-mono">Let's Talk</span>

            <h2 className="mt-4 max-w-[12ch]">Have a project in mind?</h2>

            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Whether you're exploring an idea, modernising an existing platform
              or planning your next stage of growth, we'd be happy to talk
              through it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal-dim"
              >
                Start a Conversation
              </Link>

              <a
                href="mailto:hello@tamayaz.dev"
                className="rounded-md border border-steel-soft px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                hello@tamayaz.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
