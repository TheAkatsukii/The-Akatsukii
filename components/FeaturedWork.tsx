"use client";

import { useRef } from "react";
import Link from "next/link";

type Project = {
  title: string;
  industry: string;
  service: string;
  description: string;
  href: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Headless Commerce Platform for a Growing Retail Brand",
    industry: "eCommerce",
    service: "Platform Rebuild",
    description:
      "Rebuilt a legacy storefront with a modern architecture, improving performance, content flexibility and the overall customer experience.",
    image: "",
    href: "/work/storefront-rebuild",
  },
  {
    title: "Real-Time Operations Dashboard",
    industry: "Logistics",
    service: "Custom Software",
    description:
      "Designed a live operational dashboard that gave teams instant visibility into activity, performance and critical business metrics.",
    image: "",
    href: "/work/ops-dashboard",
  },
  {
    title: "Mobile Platform for Field Teams",
    industry: "Field Services",
    service: "Mobile Application",
    description:
      "Built an offline-capable mobile experience that enabled technicians to work efficiently regardless of network availability.",
    image: "",
    href: "/work/field-technician-app",
  },
  {
    title: "Multi-Region API Platform",
    industry: "SaaS",
    service: "Architecture & Scaling",
    description:
      "Engineered a scalable API layer connecting multiple regional systems while simplifying data access across the platform.",
    image: "",
    href: "/work/multi-region-api",
  },
  {
    title: "Internal Operations Platform",
    industry: "Supply Chain",
    service: "Custom Software",
    description:
      "Replaced manual spreadsheet-driven workflows with a purpose-built platform that streamlined day-to-day operations.",
    image: "",
    href: "/work/logistics-tooling",
  },
];

export default function FeaturedWorkSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const cardWidth = el.querySelector("a")?.clientWidth ?? 320;

    el.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className="surface-graphite py-16 md:py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="label-mono">Selected Work</span>

            <h2 className="mt-4">Software solving real business problems.</h2>

            <p className="mt-4 max-w-2xl text-lg text-graphite-ink-soft">
              A selection of products, platforms and systems designed to improve
              operations, customer experiences and business performance.
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-soft-dark text-graphite-ink transition-colors hover:border-signal"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-soft-dark text-graphite-ink transition-colors hover:border-signal"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group flex w-[320px] shrink-0 snap-start flex-col justify-between rounded-lg border border-steel-soft-dark bg-graphite-raised p-6 transition-all duration-base hover:-translate-y-1 hover:border-signal"
            >
              <div>
                <div className="label-mono flex items-center gap-2 text-graphite-ink-soft">
                  <span>{project.industry}</span>
                  <span>•</span>
                  <span>{project.service}</span>
                </div>

                <h3 className="mt-4 text-xl text-graphite-ink">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-graphite-ink-soft">
                  {project.description}
                </p>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-signal">
                View Project
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="rounded-md border border-steel-soft-dark px-6 py-3 text-sm font-medium text-graphite-ink transition-colors hover:border-signal"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
