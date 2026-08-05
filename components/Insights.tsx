import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  tag: string;
  date: string;
};

const posts: Post[] = [
  {
    title: "Why We Plan Before We Build",
    excerpt:
      "The architectural decisions made early in a project often determine its long-term success.",
    href: "/insights/why-we-plan-before-we-build",
    image: "/assets/site/insight-1.jpg",
    tag: "Architecture",
    date: "2026-07-01",
  },
  {
    title: "When Custom Software Becomes the Right Choice",
    excerpt:
      "A practical guide to deciding when off-the-shelf tools stop supporting business growth.",
    href: "/insights/custom-software-right-choice",
    image: "/assets/site/insight-2.jpg",
    tag: "Strategy",
    date: "2026-06-18",
  },
  {
    title: "Designing Systems That Scale With Your Team",
    excerpt:
      "Growth creates complexity. Good architecture helps absorb it without slowing the business down.",
    href: "/insights/designing-scalable-systems",
    image: "/assets/site/insight-3.jpg",
    tag: "Engineering",
    date: "2026-05-27",
  },
  {
    title: "Building Better Commerce Experiences",
    excerpt:
      "What modern eCommerce teams should focus on beyond conversion rates and visual design.",
    href: "/insights/better-commerce-experiences",
    image: "/assets/site/insight-4.jpg",
    tag: "Commerce",
    date: "2026-05-03",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="label-mono">
              Insights
            </span>

            <h2 className="mt-4">
              Ideas, systems and lessons from the work.
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              Thoughts on software architecture, product development,
              commerce platforms and building systems that last.
            </p>
          </div>

          <Link
            href="/insights"
            className="hidden text-sm font-medium text-signal transition-colors hover:text-signal-dim md:inline-flex"
          >
            View all insights →
          </Link>
        </div>

        <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group w-[300px] shrink-0 snap-start sm:w-[360px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-steel-soft bg-paper-raised">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="label-mono">
                  {post.tag}
                </span>

                <span className="text-xs text-ink-soft">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h3 className="mt-3 text-lg leading-snug text-ink transition-colors group-hover:text-signal">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>

              <span className="bg-(--bg-info) p-2 rounded-md mt-5 inline-flex items-center gap-2 text-sm font-medium text-signal">
                Read Article

                <svg
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-fast group-hover:translate-x-1"
                >
                  <path
                    d="M1 1L5 4.5L1 8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/insights"
          className="mt-8 inline-flex text-sm font-medium text-signal transition-colors hover:text-signal-dim md:hidden"
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}
