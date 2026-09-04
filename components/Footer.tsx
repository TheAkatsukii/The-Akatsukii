import Link from "next/link";
import { Logo } from "./Logo";

const serviceLinks = [
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "eCommerce Platforms", href: "/services/ecommerce" },
  { label: "Mobile Applications", href: "/services/mobile-apps" },
  { label: "Software Architecture", href: "/services/software-architecture" },
  { label: "Technical Consulting", href: "/services/technical-consulting" },
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-graphite">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">
          {/* Brand */}
          <div>
            <Logo inverted />

            <p className="mt-6 max-w-md text-graphite-ink-soft">
              An independent software collective building products,
              platforms and experiments from the ground up.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal transition-colors hover:text-graphite-ink"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Services */}
          <div>
            <span className="label-mono">
              Capabilities
            </span>

            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-graphite-ink-soft transition-colors hover:text-graphite-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="label-mono">
              Company
            </span>

            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-graphite-ink-soft transition-colors hover:text-graphite-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <span className="label-mono block">
                Contact
              </span>

              <a
                href="mailto:hello@theakatsukii.com"
                className="mt-4 block text-sm text-graphite-ink-soft transition-colors hover:text-graphite-ink"
              >
                hello@theakatsukii.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-steel-soft-dark pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-graphite-ink-soft">
              © {year} The Akatsukii. Built with intention.
            </span>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-graphite-ink-soft transition-colors hover:text-graphite-ink"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-graphite-ink-soft transition-colors hover:text-graphite-ink"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
