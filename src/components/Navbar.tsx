import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="group relative font-heading font-bold text-xl text-foreground">
          <img src={logoImg} alt="DensityMace" className="h-7 brightness-0 invert" />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors duration-200 relative",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 pb-6 pt-2 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
