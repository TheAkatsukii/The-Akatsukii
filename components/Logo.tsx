import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="relative h-8 w-8">
        <img
          src={"/logo.webp"}
          alt="The Akatsukii Logo"
          className="object-cover rounded-xl h-full w-full"
        />
      </div>

      <span
        className={`font-display text-lg font-medium tracking-tight ${
          inverted ? "text-graphite-ink" : "text-ink"
        }`}
      >
        The Akatsukii
      </span>
    </Link>
  );
}
