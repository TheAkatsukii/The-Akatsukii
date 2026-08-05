import Image from "next/image";
import Link from "next/link";

export default function ApproachSection() {
  return (
    <section className="bg-paper-raised">
      <div className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        {/* Left: image */}
        <div className="order-1">
          <div className="relative aspect-[1026/802] w-full overflow-hidden rounded-lg">
            <div role="img" aria-label="Tamayaz Development illustration">
              <img
                className="w-3rem h-4rem"
                src="/assets/site/Listening-To-Feedback--Streamline-Djakarta.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-2">
          <h2 className="text-3xl text-ink">
            Built with clarity from day one.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-snug text-ink-soft">
            Good software starts with understanding how a business operates. We
            design systems, workflows and platforms that solve real problems—not
            just technical ones.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal-dim"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-(--bg-primary) rounded-md border border-steel-soft px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
