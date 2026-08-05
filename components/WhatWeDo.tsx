import Image from "next/image";
import Link from "next/link";

type OfferCard = {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const cards: OfferCard[] = [
  {
    image: "/assets/customer_one.png",
    title: "Custom Software",
    description:
      "We design and build web applications, internal tools and business systems tailored to the way your company operates.",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
  },
  {
    image: "/assets/customer_two.png",
    title: "Commerce & Platform Growth",
    description:
      "From eCommerce experiences to platform improvements, we help businesses scale with better systems, integrations and architecture.",
    ctaLabel: "Explore Services",
    ctaHref: "/services",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="section">
      <div className="container">
        <span className="label-mono">
          Services
        </span>

        <h2 className="mt-4 max-w-[16ch]">
          Software built around business needs.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Whether you're launching a new product or improving an
          existing platform, we build software systems that support
          growth, efficiency and long-term maintainability.
        </p>

        <div className="mt-8 h-px w-full bg-border" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {cards.map((card, index) => (
            <article key={card.title}>
              <div className="relative aspect-[1192/755] overflow-hidden rounded-lg border border-border bg-paper-raised">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-6 text-xl">
                {card.title}
              </h3>

              <p className="mt-3 max-w-md text-ink-soft">
                {card.description}
              </p>

              <div className="mt-6">
                <Link
                  href={card.ctaHref}
                  className={
                    index === 1
                      ? "rounded-md border border-steel-soft bg-(--bg-primary) px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                      : "rounded-md border border-border bg-paper-raised px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                  }
                >
                  {card.ctaLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
