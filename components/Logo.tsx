import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 10L52 52H12L32 10Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="32"
          cy="42"
          r="4"
          fill="var(--color-signal)"
        />
      </svg>

      <span
        className={`font-display text-lg font-medium tracking-tight ${
          inverted ? "text-graphite-ink" : "text-ink"
        }`}
      >
        Architect<span className="text-(--bg-primary)">.</span>
      </span>
    </Link>
  );
}
