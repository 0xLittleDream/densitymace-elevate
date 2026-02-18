import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const editServices = [
  { title: "Shortform Content", desc: "Reels, TikTok, Shorts optimized for high retention." },
  { title: "Longform YouTube Videos", desc: "Engaging long-format content built for watch time." },
  { title: "Stream Highlights", desc: "Best moments from streams edited into fast-paced content." },
  { title: "Podcast Edits", desc: "Professional podcast production with clean cuts and sound design." },
  { title: "Gaming Content", desc: "High-energy gaming videos with dynamic pacing." },
];

const whyMe = [
  { title: "Retention-Focused", desc: "Every edit is designed to keep viewers watching." },
  { title: "Fast Turnaround", desc: "Quick delivery without compromising quality." },
  { title: "Modern Pacing", desc: "Trendy cuts and transitions that feel current." },
  { title: "Platform-Optimized", desc: "Formatted perfectly for each platform's algorithm." },
  { title: "Unlimited Revisions", desc: "Until you're 100% satisfied with the result.", glow: true },
];

const Index = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24">
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-28 h-28 rounded-full bg-secondary border-2 border-primary/30 glow-blue animate-float flex items-center justify-center">
            <span className="font-heading font-bold text-3xl text-primary">D</span>
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass font-mono text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-green" />
            Available for New Projects
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-heading font-900 text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
        >
          DENSITY
          <br />
          <span className="text-gradient">FREELANCE VIDEO EDITOR</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-xl text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
        >
          I specialize in high-retention shortform content and engaging longform videos designed to increase watch time, engagement, and growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[hsl(200,90%,65%)] text-primary-foreground font-semibold text-sm btn-glow transition-all duration-300"
          >
            Work With Me 🚀
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-xl glass border-primary/20 text-foreground font-semibold text-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
          >
            View My Work 🎬
          </Link>
        </motion.div>
      </section>

      {/* What I Edit */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            What I Edit 🎥
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="glass-hover p-8 h-full">
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            Why Work With Me 💡
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className={`glass-hover p-8 h-full ${item.glow ? "glow-blue border-primary/30" : ""}`}>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
