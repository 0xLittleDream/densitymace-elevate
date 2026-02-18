import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  "Adobe Premiere Pro & After Effects",
  "DaVinci Resolve color grading",
  "Motion graphics & kinetic typography",
  "Sound design & audio mixing",
  "Shortform retention optimization",
  "YouTube SEO-aware editing",
  "Multi-platform formatting",
  "Animated captions & subtitles",
];

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8">About Me</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I'm a freelance video editor who specializes in creating high-retention content for creators, brands, and streamers. Every edit I deliver is built with one goal: keeping viewers engaged from the first second to the last.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          With a focus on modern pacing, platform-optimized formatting, and fast turnaround times, I help creators grow their audience through content that actually performs.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">Skills & Tools</h2>
        <ul className="space-y-3">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
};

export default About;
