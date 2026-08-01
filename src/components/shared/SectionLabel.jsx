export default function SectionLabel({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-lemon-yellow" />
      <span className="text-lemon-yellow font-heading font-bold text-xs uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}