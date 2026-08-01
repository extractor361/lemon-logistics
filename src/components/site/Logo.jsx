import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Lemon Logistics — početna">
      <span className="relative inline-flex h-8 w-8 items-center justify-center shrink-0">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#FFCC00" />
          <path d="M16 6c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6z" fill="#111111" />
          <path d="M16 6a10 10 0 0 1 0 20" fill="#FFCC00" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-white font-heading font-extrabold tracking-tight text-[15px]">
          Lemon<span className="text-lemon-yellow">.</span>
        </span>
        <span className="text-lemon-gray-light font-heading font-semibold tracking-[0.22em] text-[9px] uppercase mt-0.5">
          Logistics
        </span>
      </span>
    </Link>
  );
}