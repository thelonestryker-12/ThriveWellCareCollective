import { PhoneIcon, TextIcon } from "@/components/contact-icons";
import { siteConfig } from "@/lib/site";

export function MobileContactBar() {
  return (
    <nav
      aria-label="Call or text"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sage/30 bg-ivory/95 px-3 pt-2 backdrop-blur-md pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={siteConfig.phoneTel}
          aria-label={`Call ThriveWell at ${siteConfig.phoneDisplay}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          <PhoneIcon />
          Call
        </a>
        <a
          href={siteConfig.phoneSms}
          aria-label={`Text ThriveWell at ${siteConfig.phoneDisplay}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-coral text-sm font-semibold text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <TextIcon />
          Text
        </a>
      </div>
    </nav>
  );
}
