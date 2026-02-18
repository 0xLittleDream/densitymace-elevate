import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { icon: "🎮", label: "Discord", value: "@densitymace" },
  { icon: "🐦", label: "X", value: "@densitymace", href: "https://x.com/densitymace" },
  { icon: "✈️", label: "Telegram", value: "@densitymace", href: "https://t.me/densitymace" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", details: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Let's Connect 🤝
        </h1>
      </ScrollReveal>

      {/* Social cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {socials.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.1}>
            {s.href ? (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover p-6 text-center block"
              >
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-heading font-bold text-foreground mb-1">{s.label}</h3>
                <p className="text-muted-foreground text-sm font-mono">{s.value}</p>
              </a>
            ) : (
              <div className="glass-hover p-6 text-center">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-heading font-bold text-foreground mb-1">{s.label}</h3>
                <p className="text-muted-foreground text-sm font-mono">{s.value}</p>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

      {/* Contact Form */}
      <ScrollReveal delay={0.2}>
        <form onSubmit={handleSubmit} className="glass p-8 space-y-6 max-w-lg mx-auto relative">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Project Details</label>
            <textarea
              required
              rows={4}
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[hsl(200,90%,65%)] text-primary-foreground font-semibold text-sm btn-glow transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </ScrollReveal>

      {/* Success popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setSubmitted(false)} />
            <div className="glass glow-blue p-8 text-center relative max-w-sm">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Message Sent Successfully
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Appreciate you reaching out. I personally review every project and will respond within 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
