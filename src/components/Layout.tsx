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

      {/* Multiple radial glows */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/8 rounded-full blur-[150px] pointer-events-none z-[1]" />
      <div className="fixed top-[40%] right-[-200px] w-[600px] h-[600px] bg-[hsl(270,80%,50%)]/5 rounded-full blur-[120px] pointer-events-none z-[1]" />
      <div className="fixed bottom-[-100px] left-[-200px] w-[500px] h-[500px] bg-[hsl(180,80%,50%)]/5 rounded-full blur-[100px] pointer-events-none z-[1]" />

      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
