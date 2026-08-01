import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  yellow: "bg-lemon-yellow text-lemon-dark hover:bg-white",
  outline: "border border-white/20 text-white hover:border-lemon-yellow hover:text-lemon-yellow",
  dark: "bg-lemon-gray text-white hover:bg-lemon-gray-md",
  ghost: "text-lemon-gray-light hover:text-lemon-yellow",
};

export default function CTAButton({ to, children, variant = "yellow", className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 font-heading font-bold text-sm px-6 py-3.5 rounded-sm transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}