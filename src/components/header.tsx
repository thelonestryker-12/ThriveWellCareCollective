"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@/components/contact-icons";
import { navLinks, serviceLinks, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

function pathMatches(pathname: string, href: string) {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRootRef = useRef<HTMLDivElement>(null);
  const servicesActive = serviceLinks.some((link) => pathMatches(pathname, link.href));

  useEffect(() => {
    if (!servicesOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      const root = servicesRootRef.current;
      if (root && event.target instanceof Node && !root.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sage/25 bg-ivory/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-coral focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.legalName} home`} onClick={() => setOpen(false)}>
          <Image
            src="/logo-full.png"
            alt={`${siteConfig.legalName} logo`}
            width={1952}
            height={646}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-x-3 gap-y-1 lg:flex xl:gap-x-4" aria-label="Primary">
          <Link
            href="/"
            className={`whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px] ${
              pathname === "/" ? "text-teal" : "text-charcoal hover:text-teal"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px] ${
              pathMatches(pathname, "/about") ? "text-teal" : "text-charcoal hover:text-teal"
            }`}
          >
            About
          </Link>
          <div
            ref={servicesRootRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="inline-flex items-center">
              <Link
                href="/services"
                aria-current={pathMatches(pathname, "/services") ? "page" : undefined}
                className={`whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal ${
                  servicesActive ? "text-teal" : "text-charcoal hover:text-teal"
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                className={`inline-flex h-8 w-7 items-center justify-center text-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                  servicesActive || servicesOpen ? "text-teal" : "text-charcoal hover:text-teal"
                }`}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                aria-haspopup="true"
                aria-label={servicesOpen ? "Close Services menu" : "Open Services menu"}
                onClick={() => setServicesOpen((value) => !value)}
              >
                <span aria-hidden="true">{servicesOpen ? "▴" : "▾"}</span>
              </button>
            </div>
            {servicesOpen ? (
              <div id="services-menu" className="absolute left-0 top-full z-50 min-w-52 pt-2">
                <ul className="rounded-2xl border border-sage/30 bg-ivory p-2 shadow-[0_12px_32px_rgba(31,45,42,0.08)]">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={pathMatches(pathname, link.href) ? "page" : undefined}
                        className={`block rounded-xl px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                          pathMatches(pathname, link.href)
                            ? "bg-eucalyptus/50 font-semibold text-teal"
                            : "text-charcoal hover:bg-eucalyptus/40 hover:text-teal"
                        }`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <Link
            href="/for-organizations"
            className={`whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px] ${
              pathMatches(pathname, "/for-organizations") ? "text-teal" : "text-charcoal hover:text-teal"
            }`}
          >
            For Organizations
          </Link>
          <Link
            href="/blog"
            className={`whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors xl:text-[13px] ${
              pathMatches(pathname, "/blog") ? "text-teal" : "text-charcoal hover:text-teal"
            }`}
          >
            The ThriveWell Journal
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.phoneTel}
            className="hidden items-center justify-center gap-2 whitespace-nowrap rounded-full border border-sage/70 bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-teal transition-colors hover:bg-eucalyptus/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:inline-flex"
            aria-label={`Call or text ThriveWell at ${siteConfig.phoneDisplay}`}
          >
            <PhoneIcon />
            Call or Text
          </a>
          <div className="hidden sm:block">
            <ButtonLink href="/schedule">Schedule</ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/50 text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => {
              setOpen((value) => !value);
              setMobileServicesOpen(servicesActive);
            }}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-sage/20 bg-ivory px-4 pt-4 pb-24 sm:pb-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link href="/" onClick={() => setOpen(false)} className={`rounded-lg px-2 py-2 text-base ${pathname === "/" ? "font-semibold text-teal" : "text-charcoal hover:bg-eucalyptus/40"}`}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className={`rounded-lg px-2 py-2 text-base ${pathMatches(pathname, "/about") ? "font-semibold text-teal" : "text-charcoal hover:bg-eucalyptus/40"}`}>
              About
            </Link>
            <div className="flex items-center">
              <Link
                href="/services"
                aria-current={pathMatches(pathname, "/services") ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex-1 rounded-lg px-2 py-2 text-base ${
                  servicesActive ? "font-semibold text-teal" : "text-charcoal hover:bg-eucalyptus/40"
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                aria-haspopup="true"
                aria-label={mobileServicesOpen ? "Close Services menu" : "Open Services menu"}
                onClick={() => setMobileServicesOpen((value) => !value)}
              >
                <span aria-hidden="true">{mobileServicesOpen ? "▴" : "▾"}</span>
              </button>
            </div>
            {mobileServicesOpen ? (
              <ul id="mobile-services-menu" className="mb-1 ml-3 flex flex-col gap-1 border-l border-sage/30 pl-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathMatches(pathname, link.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-2 py-2 text-base ${
                        pathMatches(pathname, link.href) ? "font-semibold text-teal" : "text-charcoal hover:bg-eucalyptus/40"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {navLinks.filter((link) => link.href !== "/" && link.href !== "/about").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 text-base ${
                  pathMatches(pathname, link.href) ? "font-semibold text-teal" : "text-charcoal hover:bg-eucalyptus/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/schedule" className="mt-2 w-full">
              Schedule Your Experience
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
