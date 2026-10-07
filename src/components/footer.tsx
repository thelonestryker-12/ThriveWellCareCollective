import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-teal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
            {siteConfig.brandLine}
          </p>
          <p className="mt-4 text-sm text-eucalyptus">{siteConfig.location}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-sm text-white underline decoration-coral/80 underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-eucalyptus">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/90 hover:text-coral">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/schedule" className="text-white/90 hover:text-coral">
                Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-eucalyptus">
            Begin
          </p>
          <p className="mt-4 text-sm leading-7 text-white/85">
            There is no one right way to restore. You choose what feels right for
            you.
          </p>
          <Link
            href="/schedule"
            className="mt-5 inline-flex rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-charcoal"
          >
            Schedule Your Experience
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-xs leading-6 text-white/75">
          {siteConfig.disclaimer}
        </p>
      </div>
    </footer>
  );
}
