import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ivory px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
        Page not found
      </p>
      <h1 className="mt-4 font-serif text-4xl text-teal">This page is not here.</h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-8">
        The page you were looking for may have moved. You can return home or
        explore ThriveWell services instead.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <ButtonLink href="/">Return home</ButtonLink>
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-teal">
          View services
        </Link>
      </div>
    </section>
  );
}
