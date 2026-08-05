import Link from "next/link";

const process = [
  {
    title: "Discover",
    description:
      "Understand the business, users and objectives before discussing solutions.",
  },
  {
    title: "Architect",
    description:
      "Design systems, workflows and technical foundations with clarity and purpose.",
  },
  {
    title: "Build",
    description:
      "Develop maintainable software using modern tools and proven engineering practices.",
  },
  {
    title: "Evolve",
    description:
      "Support growth through continuous improvement, refinement and long-term partnership.",
  },
];

const capabilities = [
  "Custom Software",
  "eCommerce Platforms",
  "Mobile Applications",
  "Software Architecture",
  "Platform Engineering",
  "Technical Consulting",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <span className="label-mono">About</span>

          <h1 className="mt-4 max-w-[12ch]">Software built with intention.</h1>

          <p className="mt-6 max-w-3xl text-lg text-ink-soft">
            Architect. exists to help businesses make better technology
            decisions and build software that continues to create value long
            after launch.
          </p>

          <p className="mt-4 max-w-3xl text-lg text-ink-soft">
            We partner with ambitious companies to design, build and maintain
            products, platforms and digital infrastructure that support
            sustainable growth.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[320px_1fr] md:items-start">
            <div>
              <div className="aspect-square rounded-lg border border-steel-soft bg-paper-raised" />
            </div>

            <div>
              <span className="label-mono">Founder</span>

              <h2 className="mt-4">Meet the Architect.</h2>

              <p className="mt-6 text-lg text-ink-soft">
                I'm Yonela Johannes, a software architect and engineer focused
                on building systems that solve real business problems.
              </p>

              <p className="mt-4 text-ink-soft">
                My experience spans product development, commerce platforms,
                APIs, mobile applications and platform engineering. Across every
                project, the principle remains the same: understand the problem
                before designing the solution.
              </p>

              <p className="mt-4 text-ink-soft">
                Today I work directly with founders, operators and teams to help
                turn ideas, requirements and operational challenges into
                software that creates measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="surface-graphite py-16 md:py-24">
        <div className="container">
          <span className="label-mono">How We Work</span>

          <h2 className="mt-4 max-w-[14ch]">Architecture comes first.</h2>

          <p className="mt-6 max-w-3xl text-lg">
            Many projects begin with technology decisions.
          </p>

          <p className="mt-4 max-w-3xl">We start with business decisions.</p>

          <p className="mt-4 max-w-3xl">
            Understanding the goals, constraints and users behind a project
            allows us to design solutions that remain useful, maintainable and
            scalable long after launch.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <span className="label-mono">Process</span>

          <h2 className="mt-4">A structured approach to building software.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-steel-soft bg-paper-raised p-6"
              >
                <span className="label-mono">0{index + 1}</span>

                <h3 className="mt-4 text-xl">{step.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <span className="label-mono">Capabilities</span>

          <h2 className="mt-4">Where we can help.</h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-steel-soft bg-steel-soft md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="bg-paper-raised p-6">
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg border border-steel-soft bg-paper-raised p-8 md:p-12">
            <span className="label-mono">Let's Talk</span>

            <h2 className="mt-4 max-w-[12ch]">
              Let's build something that lasts.
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Whether you're launching a new product, modernising an existing
              platform or exploring an idea, we'd be happy to talk through it.
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
