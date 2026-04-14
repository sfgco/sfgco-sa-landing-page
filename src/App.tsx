import AppRouter from "./routes";

/**
 * App is now just a thin shell that mounts the router.
 * All layout, pages, and providers live inside AppRouter / routes/index.tsx.
 */
export default function App() {
  return <AppRouter />;
}
