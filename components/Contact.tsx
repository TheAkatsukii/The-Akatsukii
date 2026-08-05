import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-lg border border-steel-soft bg-paper-raised p-8 md:p-12">
          <span className="label-mono">
            Let's Talk
          </span>

          <div className="mt-6 max-w-3xl">
            <h2>
              Have a project in mind?
            </h2>

            <p className="mt-5 text-lg text-ink-soft">
              Whether you're starting from scratch, improving an
              existing system, or planning your next phase of
              growth, we'd be happy to talk through it.
            </p>

            <p className="mt-4 text-ink-soft">
              You'll work directly with Yonela Johannes,
              founder and software architect.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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
  );
}
