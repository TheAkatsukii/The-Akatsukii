"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

type ServiceLink = {
  label: string;
  href: string;
  description: string;
};

const company = {
  name: "Architect.",
  tagline: "Software. Systems. Commerce.",
  location: "Cape Town, South Africa",
  email: "hello@architect.dev",
};

const services: ServiceLink[] = [
  {
    label: "Custom Software",
    href: "/services/custom-software",
    description:
      "Web platforms, internal tools and business systems built around your operations.",
  },
  {
    label: "eCommerce Solutions",
    href: "/services/ecommerce",
    description:
      "Storefronts, integrations and growth-focused commerce experiences.",
  },
  {
    label: "Mobile Applications",
    href: "/services/mobile-apps",
    description:
      "iOS and Android apps built with performance and longevity in mind.",
  },
  {
    label: "Product Development",
    href: "/services/product-development",
    description:
      "From concept validation to launch and ongoing improvement.",
  },
  {
    label: "Architecture & Scaling",
    href: "/services/architecture",
    description:
      "Systems designed for reliability, maintainability and growth.",
  },
  {
    label: "Platform & Integrations",
    href: "/services/platforms",
    description:
      "APIs, automation and infrastructure connecting your business tools.",
  },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Services

              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4"
              >
                <div className="grid grid-cols-[240px_1fr] overflow-hidden rounded-lg border border-border bg-paper-raised shadow-lg">
                  {/* Intro Column */}
                  <div className="border-r border-border p-6">
                    <span className="label-mono">
                      Services
                    </span>

                    <h3 className="mt-4 text-xl">
                      Software built for growth.
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed">
                      We design, build and maintain software,
                      systems and commerce experiences that
                      support long-term business growth.
                    </p>
                  </div>

                  {/* Service Grid */}
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-md p-3 transition-colors hover:bg-signal-tint"
                      >
                        <span className="block text-sm font-medium text-ink">
                          {service.label}
                        </span>

                        <span className="mt-1 block text-xs leading-snug text-ink-soft">
                          {service.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks
            .filter((link) => link.label !== "Services")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal md:inline-flex"
          >
            Start a Project
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex items-center justify-center p-2 md:hidden"
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M0 1H24" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 9H24" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 17H24" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-paper-raised md:hidden"
        >
          <div className="container py-4">
            <span className="label-mono block px-2 pb-2">
              Services
            </span>

            <div className="flex flex-col gap-1">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-signal-tint hover:text-ink"
                >
                  {service.label}
                </Link>
              ))}
            </div>

            <span className="label-mono mt-6 block px-2 pb-2">
              Navigation
            </span>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-signal-tint hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <span className="label-mono">
                Contact
              </span>

              <p className="mt-3 text-sm text-ink-soft">
                {company.location}
              </p>

              <a
                href={`mailto:${company.email}`}
                className="mt-2 block text-sm text-ink"
              >
                {company.email}
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 block rounded-md bg-ink px-5 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
