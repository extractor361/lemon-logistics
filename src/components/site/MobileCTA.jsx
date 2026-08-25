import { Link } from "react-router-dom";
import { Phone, Send } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-white/10">
      <a
        href="tel:+38220662266"
        className="flex items-center justify-center gap-2 bg-lemon-gray text-white font-heading font-bold text-sm py-3.5 active:bg-lemon-gray-md transition-colors"
      >
        <Phone className="h-4 w-4" />
        Pozovite
      </a>
      <Link
        to="/kontakt"
        className="flex items-center justify-center gap-2 bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm py-3.5 active:bg-white transition-colors"
      >
        <Send className="h-4 w-4" />
        Pošaljite upit o prevozu
      </Link>
    </div>
  );
}