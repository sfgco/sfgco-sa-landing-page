import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// ── Lazy-loaded pages (code splitting per route) ──────────────────────────────
const Home     = lazy(() => import('../pages/Home'));
const About    = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact  = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

/** Full-page loading fallback shown while a lazy chunk is being fetched. */
function PageLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#060f08',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '3px solid rgba(200,168,75,0.2)',
          borderTopColor: '#c8a84b',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/** Centralized router — all routes live here, making the tree easy to audit. */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true,        element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: 'about',      element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
      { path: 'services',   element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
      { path: 'contact',    element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
      { path: '*',          element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense> },
    ],
  },
]);

/** Drop this into App.tsx — it owns the entire routing tree. */
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
