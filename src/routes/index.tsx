import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../layouts/ScrollToTop";

// ── Lazy-loaded pages (code splitting per route) ──────────────────────────────
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Vision = lazy(() => import("../pages/Vision"));
const Mission = lazy(() => import("../pages/Mission"));
const Values = lazy(() => import("../pages/Values"));
const StrategicGoals = lazy(() => import("../pages/StrategicGoals"));
const Services = lazy(() => import("../pages/Services"));
const InvestmentSectors = lazy(() => import("../pages/InvestmentSectors"));
const WhyUs = lazy(() => import("../pages/WhyUs"));
const Projects = lazy(() => import("../pages/Projects"));
const Opportunities = lazy(() => import("../pages/Opportunities"));
const Partners = lazy(() => import("../pages/Partners"));
const NewsList = lazy(() => import("../pages/NewsList"));
const NewsArticle = lazy(() => import("../pages/NewsArticle"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

/** Full-page loading fallback shown while a lazy chunk is being fetched. */
function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#060f08",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "3px solid rgba(200,168,75,0.2)",
          borderTopColor: "#c8a84b",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function withSuspense(node: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{node}</Suspense>;
}

/** Centralized router — every major section is its own dedicated route. */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    ),
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: "about", element: withSuspense(<About />) },
      { path: "vision", element: withSuspense(<Vision />) },
      { path: "mission", element: withSuspense(<Mission />) },
      { path: "values", element: withSuspense(<Values />) },
      { path: "strategic-goals", element: withSuspense(<StrategicGoals />) },
      { path: "services", element: withSuspense(<Services />) },
      { path: "investment-sectors", element: withSuspense(<InvestmentSectors />) },
      { path: "why-us", element: withSuspense(<WhyUs />) },
      { path: "projects", element: withSuspense(<Projects />) },
      { path: "opportunities", element: withSuspense(<Opportunities />) },
      { path: "partners", element: withSuspense(<Partners />) },
      { path: "news", element: withSuspense(<NewsList />) },
      { path: "news/:slug", element: withSuspense(<NewsArticle />) },
      { path: "contact", element: withSuspense(<Contact />) },
      { path: "*", element: withSuspense(<NotFound />) },
    ],
  },
]);

/** Drop this into App.tsx — it owns the entire routing tree. */
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
