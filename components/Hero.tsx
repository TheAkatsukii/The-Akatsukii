import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section" id="home">
      <div className="container grid items-center gap-16 md:grid-cols-2">
        {/* Left: Copy */}
        <div className="order-2 md:order-1">
          <h1 className=" max-w-[12ch]">
            Software, engineered properly.
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg">
            We architect, build and maintain software systems that streamline
            operations, unlock opportunities and create lasting business value.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Start a Project
            </Link>

            <Link
              href="#work"
              className="bg-(--bg-primary) rounded-md border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              View Our Work
            </Link>
          </div>

          {/* Service indicators */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft label-mono">
            <span>Custom Software</span>
            <span>eCommerce</span>
            <span>Mobile Apps</span>
            <span>Architecture & Scaling</span>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-lg">
            <img
              src="/assets/site/Fixing-Bugs--Streamline-Bruxelles.png"
              alt="Software engineering and product development illustration"
              className="object-contain w-2rem h-2rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
