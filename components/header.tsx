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
  name: "The Akatsukii",
  tagline: "Software Collective",
  location: "Cape Town, South Africa",
  email: "hello@theakatsukii.com",
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
    description: "From concept validation to launch and ongoing improvement.",
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
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileNav = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
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
                      className={`transition-transform duration-200 ${
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
                      <div className="grid grid-cols-[240px_1fr] overflow-hidden rounded-xl border border-border bg-paper-raised shadow-xl">
                        {/* Intro */}
                        <div className="border-r border-border p-6">
                          <span className="label-mono">Services</span>

                          <h3 className="mt-4 text-xl font-medium text-ink">
                            Software built for growth.
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                            We design, build and maintain software, systems and
                            commerce experiences that support long-term business
                            growth.
                          </p>

                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-70"
                          >
                            View all services
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>

                        {/* Services */}
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="group rounded-lg p-3 transition-colors hover:bg-signal-tint"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <span className="text-sm font-medium text-ink">
                                  {service.label}
                                </span>

                                <span
                                  aria-hidden="true"
                                  className="mt-0.5 text-xs text-ink-soft opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                                >
                                  →
                                </span>
                              </div>

                              <span className="mt-1.5 block text-xs leading-relaxed text-ink-soft">
                                {service.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            );
          })}
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
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>

            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-all duration-200 ${
                  mobileOpen ? "top-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px w-6 bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-px w-6 bg-current transition-all duration-200 ${
                  mobileOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-paper-raised md:hidden"
        >
          <div className="container py-5">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div key={link.href} className="border-b border-border/70">
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink"
                      >
                        Services
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
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

                      {mobileServicesOpen && (
                        <div className="pb-4">
                          <Link
                            href="/services"
                            onClick={closeMobileNav}
                            className="mb-2 block rounded-md px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-signal-tint"
                          >
                            All Services
                          </Link>

                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={closeMobileNav}
                              className="block rounded-md px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-signal-tint hover:text-ink"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileNav}
                    className="border-b border-border/70 py-4 text-sm font-medium text-ink transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Contact */}
            <div className="mt-7">
              <span className="label-mono">Contact</span>

              <p className="mt-3 text-sm text-ink-soft">{company.location}</p>

              <a
                href={`mailto:${company.email}`}
                className="mt-1.5 inline-block text-sm text-ink transition-opacity hover:opacity-70"
              >
                {company.email}
              </a>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              onClick={closeMobileNav}
              className="mt-7 flex w-full items-center justify-center rounded-md bg-ink px-5 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
