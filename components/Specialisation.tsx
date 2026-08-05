import Image from "next/image";
import Link from "next/link";

type Specialisation = {
  label: string;
  description: string;
  image: string;
  href: string;
};

const specialisations: Specialisation[] = [
  {
    label: "Custom Software",
    description:
      "Business systems, internal tools and web applications tailored to your operations.",
    image: "/assets/moving.png",
    href: "/service/custom-software",
  },
  {
    label: "eCommerce Platforms",
    description:
      "Modern commerce experiences designed for performance, flexibility and growth.",
    image: "/assets/demo.png",
    href: "/service/ecommerce",
  },
  {
    label: "Mobile Applications",
    description:
      "Cross-platform mobile experiences built for real-world usage and long-term maintenance.",
    image: "/assets/mobile_app.png",
    href: "/service/mobile",
  },
  {
    label: "Product Development",
    description:
      "From idea validation to launch, we help bring digital products to market.",
    image: "/assets/implementing.png",
    href: "/service/product-development",
  },
  {
    label: "Architecture & Scaling",
    description:
      "Systems designed to remain reliable, maintainable and scalable as your business grows.",
    image: "/assets/designing.png",
    href: "/service/architecture",
  },
  {
    label: "Platform Integrations",
    description:
      "Connecting platforms, APIs and business tools into a cohesive ecosystem.",
    image: "/assets/testing.png",
    href: "/service/platform-integrations",
  },
];

export default function SpecialisationsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <span className="label-mono">
          Capabilities
        </span>

        <h2 className="mt-4 max-w-[14ch]">
          Expertise across the systems that power modern businesses.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          We design, build and maintain software, commerce platforms and
          digital infrastructure that help businesses operate more
          efficiently and grow with confidence.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialisations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group overflow-hidden rounded-lg border border-steel-soft bg-paper-raised transition-all duration-base hover:-translate-y-1 hover:border-signal"
            >
              <div className="flex items-end justify-center relative  aspect-[16/10] overflow-hidden bg-(--color-signal)">
                <img
                  src={item.image}
                  alt={item.label}
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg text-ink">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>

                <span className="bg-(--bg-primary) py-2 px-3 rounded-md mt-5 inline-flex items-center gap-2 text-sm font-medium text-signal">
                  Learn More →

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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
