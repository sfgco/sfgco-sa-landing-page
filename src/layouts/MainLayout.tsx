import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "../hooks/useLanguage";

/**
 * Root layout wrapping every page.
 * Renders the persistent Navbar and Footer around page content.
 * Also syncs dir/lang on <html> via useLanguage.
 */
export default function MainLayout() {
  // Side-effect: keeps document.documentElement.dir in sync with language
  useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
