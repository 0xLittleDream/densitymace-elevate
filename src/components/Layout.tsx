import { ReactNode, lazy, Suspense } from "react";
import Navbar from "./Navbar";

const FloatingPlanets = lazy(() => import("./FloatingPlanets"));

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Floating planets */}
      <Suspense fallback={null}>
        <FloatingPlanets />
      </Suspense>

      {/* Ambient grid */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none z-[1]" />

      {/* Single subtle radial glow */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-[1]" />

      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
