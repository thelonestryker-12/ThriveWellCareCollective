type SvgProps = {
  className?: string;
};

export function LeafSprig({ className = "" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 240 360"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M118 340c6-78-8-150 8-250"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M126 86c-38 8-62-16-54-48 28 6 52 22 54 48Z"
        opacity="0.85"
      />
      <path
        d="M124 128c34-2 58 22 48 50-28-2-46-18-48-50Z"
        opacity="0.7"
      />
      <path
        d="M122 176c-40 4-64-14-58-46 30 4 54 20 58 46Z"
        opacity="0.62"
      />
      <path
        d="M128 214c36 6 52 32 36 58-26-8-40-28-36-58Z"
        opacity="0.55"
      />
      <path
        d="M120 258c-34 10-48 40-28 64 24-12 36-34 28-64Z"
        opacity="0.45"
      />
      <path
        d="M126 72c8-28 28-42 46-36-8 24-24 36-46 36Z"
        opacity="0.75"
      />
    </svg>
  );
}

export function LeafDivider({ className = "" }: SvgProps) {
  return (
    <div className={`flex items-center justify-center gap-4 text-sage ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-sage/50 sm:w-24" />
      <svg viewBox="0 0 28 28" className="h-5 w-5" fill="currentColor">
        <path d="M14 24c1-8-1-14 2-20-6 2-10 0-12-4 2 8 6 12 10 14-4 1-8 4-8 10 3-2 6-2 8 0Z" />
        <path d="M14 24c-1-8 1-14-2-20 6 2 10 0 12-4-2 8-6 12-10 14 4 1 8 4 8 10-3-2-6-2-8 0Z" opacity="0.8" />
      </svg>
      <span className="h-px w-16 bg-sage/50 sm:w-24" />
    </div>
  );
}

export function SproutIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M24 40V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M24 26c-2-8-8-12-16-12 1 8 7 13 16 14Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 22c2-8 9-11 16-10-1 8-8 12-16 13Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M24 38s-12-7.4-16.2-14.2C5.2 20 6.4 14 11.6 12.2 15.6 10.8 19 12.6 24 17.4c5-4.8 8.4-6.6 12.4-5.2 5.2 1.8 6.4 7.8 3.8 11.6C36 30.6 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WavesIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M8 18c4 0 4-5 8-5s4 5 8 5 4-5 8-5 4 5 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 26c4 0 4-5 8-5s4 5 8 5 4-5 8-5 4 5 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 34c4 0 4-5 8-5s4 5 8 5 4-5 8-5 4 5 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M24 8v5M24 35v5M8 24h5M35 24h5M12.5 12.5l3.5 3.5M32 32l3.5 3.5M12.5 35.5 16 32M32 16l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LotusIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M24 34c-2-6-2-12 0-18 2 6 2 12 0 18Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M24 32c-6-1-11-6-12-12 6 1 10 6 12 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24 32c6-1 11-6 12-12-6 1-10 6-12 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24 34c-8 1-14 2-16 6 8-1 14-2 16-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24 34c8 1 14 2 16 6-8-1-14-2-16-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function BreathIcon({ className = "h-8 w-8" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M10 16c6 4 10 4 14 0s8-4 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 24c7 5 12 5 16 0s9-5 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 32c5 4 9 4 12 0s7-4 12 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = "mt-0.5 h-4 w-4 shrink-0 text-sage" }: SvgProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none">
      <path d="M3 8.2 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
