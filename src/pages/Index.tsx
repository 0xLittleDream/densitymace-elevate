import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Film, Youtube, Tv, Mic, Gamepad2, Zap, Clock, TrendingUp, MonitorSmartphone, RotateCcw, ArrowRight, Play, Sparkles, Eye, Star } from "lucide-react";
import profileImg from "@/assets/profile.png";

/* ─── data ─── */
const editServices = [
  { title: "Shortform Content", desc: "Reels, TikTok, Shorts optimized for high retention.", icon: Film },
  { title: "Longform YouTube Videos", desc: "Engaging long-format content built for watch time.", icon: Youtube },
  { title: "Stream Highlights", desc: "Best moments from streams edited into fast-paced content.", icon: Tv },
  { title: "Podcast Edits", desc: "Professional podcast production with clean cuts and sound design.", icon: Mic },
  { title: "Gaming Content", desc: "High-energy gaming videos with dynamic pacing.", icon: Gamepad2 },
];

const whyMe = [
  { title: "Retention-Focused", desc: "Every edit is designed to keep viewers watching.", icon: Eye },
  { title: "Fast Turnaround", desc: "Quick delivery without compromising quality.", icon: Clock },
  { title: "Modern Pacing", desc: "Trendy cuts and transitions that feel current.", icon: TrendingUp },
  { title: "Platform-Optimized", desc: "Formatted perfectly for each platform's algorithm.", icon: MonitorSmartphone },
  { title: "Unlimited Revisions", desc: "Until you're 100% satisfied with the result.", icon: RotateCcw, glow: true },
];

const stats = [
  { label: "Projects Delivered", end: 150, suffix: "+" },
  { label: "Happy Clients", end: 45, suffix: "+" },
  { label: "Hours of Content", end: 500, suffix: "+" },
  { label: "Avg Turnaround", end: 24, suffix: "hrs" },
];

const process = [
  { step: "01", title: "Brief", desc: "Share your vision, footage, and references." },
  { step: "02", title: "Edit", desc: "I craft your content with precision and style." },
  { step: "03", title: "Review", desc: "You review and request any changes." },
  { step: "04", title: "Deliver", desc: "Final files delivered, ready to publish." },
];

const marqueeItems = [
  "SHORTFORM", "LONGFORM", "GAMING", "PODCASTS", "STREAMS", "YOUTUBE", "TIKTOK", "REELS",
  "SHORTFORM", "LONGFORM", "GAMING", "PODCASTS", "STREAMS", "YOUTUBE", "TIKTOK", "REELS",
];

const testimonials = [
  { quote: "Density completely transformed my channel. My retention doubled after working with him.", name: "Gaming Creator", handle: "@streamer" },
  { quote: "Fastest editor I've ever worked with. Quality is insane for the turnaround time.", name: "YouTube Creator", handle: "@youtuber" },
  { quote: "The shortform edits are fire. Every single one performs. Can't recommend enough.", name: "Content Brand", handle: "@brand" },
];

/* ─── animated counter ─── */
const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          animate(count, end, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ─── floating CSS glow orbs (decorative between sections) ─── */
const GlowOrb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── floating particles ─── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${i % 3 === 0 ? 'w-1.5 h-1.5 bg-primary/30' : i % 3 === 1 ? 'w-1 h-1 bg-[hsl(270,80%,70%)]/25' : 'w-0.5 h-0.5 bg-[hsl(180,80%,60%)]/30'}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, (Math.random() - 0.5) * 30, 0],
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* ─── page ─── */
const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ═══ Decorative glow orbs scattered throughout ═══ */}
      <GlowOrb className="w-40 h-40 bg-primary/15 blur-[60px] top-[5%] right-[5%]" />
      <GlowOrb className="w-32 h-32 bg-[hsl(270,80%,60%)]/12 blur-[50px] top-[15%] left-[8%]" />
      <GlowOrb className="w-24 h-24 bg-[hsl(180,80%,50%)]/10 blur-[40px] top-[35%] right-[12%]" />
      <GlowOrb className="w-36 h-36 bg-[hsl(330,80%,55%)]/8 blur-[55px] top-[50%] left-[3%]" />
      <GlowOrb className="w-28 h-28 bg-primary/10 blur-[45px] top-[65%] right-[7%]" />
      <GlowOrb className="w-44 h-44 bg-[hsl(270,70%,55%)]/10 blur-[65px] top-[80%] left-[10%]" />
      <GlowOrb className="w-20 h-20 bg-[hsl(160,70%,50%)]/10 blur-[35px] top-[90%] right-[20%]" />

      {/* ═══ HERO ═══ */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 relative">
        <Particles />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10 pointer-events-none" />

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-card border-2 border-primary/30 glow-blue animate-float overflow-hidden relative z-10">
            <img src={profileImg} alt="DensityMace" className="w-full h-full object-cover" />
          </div>
          {/* Orbit ring */}
          <motion.div
            className="absolute inset-[-12px] rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary glow-blue" />
          </motion.div>
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
          className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
        >
          DENSITY
          <br />
          <span className="text-gradient">VIDEO EDITOR</span>
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
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[hsl(200,90%,65%)] text-primary-foreground font-semibold text-sm btn-glow transition-all duration-300 flex items-center gap-2"
          >
            Work With Me
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="group px-8 py-3.5 rounded-xl glass border-primary/20 text-foreground font-semibold text-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Play size={16} />
            View My Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <section className="py-8 border-y border-border/30 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-heading font-bold text-2xl md:text-3xl text-muted-foreground/20 select-none flex items-center gap-8">
              {item}
              <Sparkles size={14} className="text-primary/30" />
            </span>
          ))}
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center glass p-6">
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-gradient mb-2">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ WHAT I EDIT ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal>
          <p className="text-center font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Services</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            What I Edit 🎥
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="glass-hover p-8 h-full group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ MY PROCESS ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <ScrollReveal>
          <p className="text-center font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Workflow</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            How It Works ⚡
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delay={i * 0.12}>
              <div className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="font-mono font-bold text-sm text-primary">{p.step}</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ WHY WORK WITH ME ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal>
          <p className="text-center font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Advantages</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            Why Work With Me 💡
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className={`glass-hover p-8 h-full group ${item.glow ? "glow-blue border-primary/30" : ""}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${item.glow ? "bg-primary/20 group-hover:bg-primary/30" : "bg-primary/10 group-hover:bg-primary/20"}`}>
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <ScrollReveal>
          <p className="text-center font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Testimonials</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            What Clients Say ⭐
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="glass-hover p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-mono">{t.handle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="glass glow-blue-strong p-12 md:p-16 text-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 relative z-10">
              Ready to <span className="text-gradient">level up</span> your content?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg mx-auto relative z-10">
              Let's create something that stops the scroll and keeps viewers hooked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/contact"
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(200,90%,65%)] text-primary-foreground font-semibold btn-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start a Project
                <Zap size={18} className="transition-transform group-hover:rotate-12" />
              </Link>
              <Link
                to="/pricing"
                className="px-10 py-4 rounded-xl glass border-primary/20 text-foreground font-semibold transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
