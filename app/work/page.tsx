import Link from "next/link";

const engagements = [
  {
    title: "Custom Software Development",
    description:
      "Designing and building software tailored to a company's operations, workflows and growth plans.",
    outcomes: [
      "Reduced manual processes",
      "Improved operational visibility",
      "Scalable foundations for growth",
    ],
  },
  {
    title: "Commerce Platforms",
    description:
      "Modern commerce experiences built for performance, flexibility and long-term maintainability.",
    outcomes: [
      "Faster storefronts",
      "Improved customer experience",
      "Easier content management",
    ],
  },
  {
    title: "Platform Engineering",
    description:
      "Internal systems, tooling and infrastructure that help teams move faster.",
    outcomes: [
      "Better developer experience",
      "More reliable deployments",
      "Reduced operational overhead",
    ],
  },
  {
    title: "Architecture & Consulting",
    description:
      "Helping teams make better technical decisions before committing significant development effort.",
    outcomes: [
      "Reduced technical risk",
      "Clearer delivery plans",
      "Improved scalability",
    ],
  },
];

const principles = [
  {
    title: "Business First",
    description:
      "Technology decisions should support business objectives, not the other way around.",
  },
  {
    title: "Built To Last",
    description:
      "We favour maintainable systems over quick fixes that become future problems.",
  },
  {
    title: "Direct Collaboration",
    description:
      "Clients work directly with the people making technical decisions.",
  },
];

export default function WorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <span className="label-mono">Work</span>

          <h1 className="mt-4 max-w-[10ch]">
            Software built around real business needs.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-ink-soft">
            Every project is different, but the objective remains the same:
            create software that solves meaningful problems and continues
            delivering value over time.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="rounded-lg border border-steel-soft bg-paper-raised p-8 md:p-12">
            <h2>We don't build software for the sake of building software.</h2>

            <p className="mt-5 max-w-3xl text-ink-soft">
              We partner with businesses that need better systems, better
              processes and better digital experiences. Whether it's a new
              product, a commerce platform or an internal operational tool, the
              focus remains on measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <span className="label-mono">Recent Engagements</span>

          <h2 className="mt-4">The kinds of projects we help deliver.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {engagements.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-steel-soft bg-paper-raised p-8"
              >
                <h3>{item.title}</h3>

                <p className="mt-4 text-ink-soft">{item.description}</p>

                <ul className="mt-6 space-y-2">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm text-ink-soft">
                      • {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="surface-graphite py-16 md:py-24">
        <div className="container">
          <span className="label-mono">Approach</span>

          <h2 className="mt-4">How we think about projects.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>

                <p className="mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg border border-steel-soft bg-paper-raised p-8 md:p-12">
            <span className="label-mono">Start a Project</span>

            <h2 className="mt-4 max-w-[12ch]">
              Looking for a technical partner?
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Whether you're launching something new, improving an existing
              system or planning future growth, we'd be happy to explore the
              opportunity with you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal-dim"
              >
                Start a Conversation
              </Link>

              <Link
                href="/about"
                className="rounded-md border border-steel-soft px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Learn More About Architect.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
