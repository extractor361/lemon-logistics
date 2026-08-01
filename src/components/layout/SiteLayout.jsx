import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileCTA from "@/components/site/MobileCTA";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-lemon-dark">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}