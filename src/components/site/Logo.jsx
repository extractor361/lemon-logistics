import { Link } from "react-router-dom";
import { LOGO } from "@/lib/siteData";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center group ${className}`} aria-label="Lemon Logistics — početna">
      <img
        src={LOGO}
        alt="Lemon Logistics"
        className="h-8 lg:h-9 w-auto transition-opacity group-hover:opacity-80"
      />
    </Link>
  );
}