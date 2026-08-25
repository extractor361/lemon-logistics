import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1) || location.pathname;

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-lemon-dark px-5 py-20">
      <div className="max-w-xl text-center">
        <div className="text-lemon-yellow font-heading font-black text-7xl tracking-tight">404</div>
        <h1 className="mt-5 text-white text-3xl sm:text-4xl font-heading font-black tracking-tight">
          Stranica nije pronađena
        </h1>
        <p className="mt-4 text-lemon-gray-light leading-relaxed">
          Tražena stranica {pageName ? `“${pageName}”` : ''} ne postoji ili je premještena.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-lemon-yellow text-lemon-dark font-heading font-bold text-sm px-7 py-4 rounded-sm hover:bg-white transition-colors"
        >
          Povratak na početnu
        </Link>
      </div>
    </section>
  );
}
