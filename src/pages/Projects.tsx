import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const videos = [
  { id: "1165985518" },
  { id: "1165343854" },
  { id: "1165343725" },
  { id: "1165343663" },
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Featured Projects 🎬
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, i) => (
          <ScrollReveal key={video.id} delay={i * 0.1}>
            <div
              className="glass-hover overflow-hidden cursor-pointer"
              style={{ aspectRatio: "9/16" }}
              onClick={() => handleClick(video.id)}
            >
              {activeVideo === video.id ? (
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center relative group">
                  <img
                    src={`https://vumbnail.com/${video.id}.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-foreground ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
