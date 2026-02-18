import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Ambient grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      {/* Radial glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
