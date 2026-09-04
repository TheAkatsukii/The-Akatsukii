"use client";

import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "ThatDev",
    realName: "Lukhanyo Vakele",
    role: "Backend Hacker",
    image: "/assets/ThatDev.png",
    github: "https://github.com/LukhanyoV",
    side: "left",
  },
  {
    name: "ThatG33k",
    realName: "Yonela Johannes",
    role: "Frontend Hacker",
    image: "/assets/ThatG33k.png",
    github: "https://github.com/Yonela-Johannes",
    side: "right",
  },
];

export function AboutSection() {
  return (
    <section className="section relative overflow-hidden" id="about">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="label-mono">Origin</span>

            <h2 className="mt-5 max-w-3xl text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
              Started in school.
              <br />
              <span className="text-ink-soft">Still building.</span>
            </h2>
          </div>

          <span className="hidden font-mono text-sm text-ink-soft md:block">
            EST. 2022
          </span>
        </div>
        <span className="label-mono text-graphite-ink-soft">Founders</span>

        {/* Origin story */}
        <div className="relative mt-16 md:mt-24">
          {/* Decorative year */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 right-0 select-none font-mono text-[clamp(7rem,18vw,15rem)] font-bold leading-none tracking-[-0.08em] text-steel-soft/40"
          >
            22
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* ThatDev */}
            <Founder founder={founders[0]} align="left" />

            {/* Center */}
            <div className="order-first flex flex-col items-center lg:order-none">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-steel-soft bg-paper-raised md:h-24 md:w-24">
                <span className="font-mono text-xs text-ink-soft">2022</span>

                <span className="absolute inset-[-7px] rounded-full border border-steel-soft/50" />
              </div>

              <div className="my-5 hidden h-24 w-px bg-steel-soft lg:block" />

              <span className="max-w-[150px] text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Two developers
                <br />
                one idea
              </span>
            </div>

            {/* ThatG33k */}
            <Founder founder={founders[1]} align="right" />
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex flex-col gap-6 border-t border-steel-soft pt-8 md:mt-28 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            What started as two developers experimenting after school became
            something bigger: a shared identity for building things that
            shouldn&apos;t stay ideas.
          </p>

          <Link
            href="https://github.com/TheAkatsukii"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 font-mono text-sm transition-colors hover:text-signal"
          >
            <span>The Akatsukii</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

type FounderProps = {
  founder: (typeof founders)[number];
  align: "left" | "right";
};

function Founder({ founder, align }: FounderProps) {
  const isRight = align === "right";

  return (
    <Link
      href={founder.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-5 ${
        isRight ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-full border border-steel-soft h-36 w-36 md:h-64 md:w-64 ">
        <img
          src={founder.image}
          alt={`${founder.name} — ${founder.realName}`}
          className="object-cover"
        />

        <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
      </div>

      <div>
        <span className="label-mono text-signal">{founder.role}</span>

        <h3 className="mt-1 text-2xl md:text-2xl">{founder.name}</h3>

        <p className="mt-1 text-sm text-ink-soft">{founder.realName}</p>
      </div>
    </Link>
  );
}
