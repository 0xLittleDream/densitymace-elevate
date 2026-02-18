import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Longform Editing",
    price: "$40+",
    features: [
      "YouTube videos",
      "Gaming content",
      "Podcasts",
      "Stream highlights",
      "Color grading",
      "Sound design",
      "Subtitles",
      "Engagement pacing",
      "Unlimited revisions",
    ],
  },
  {
    title: "Shortform / Reels",
    price: "$10 – $20",
    popular: true,
    features: [
      "Hook optimization",
      "Fast cuts",
      "Animated captions",
      "Motion effects",
      "Trend editing",
      "Platform formatting",
      "Retention pacing",
      "Unlimited revisions",
      "Fast turnaround (6–20 hrs)",
    ],
  },
  {
    title: "Custom Package",
    price: "Custom Pricing",
    features: [
      "Bulk editing",
      "Brand collaborations",
      "Strategy consultation",
      "Dedicated support",
      "Unlimited revisions",
      "Priority delivery",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Pricing 💰
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.title} delay={i * 0.12}>
            <div
              className={`glass-hover p-8 relative ${
                plan.popular
                  ? "glow-blue-strong border-primary/40 md:scale-105 md:-my-4"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground font-mono text-xs font-semibold">
                    Most Popular 🔥
                  </span>
                </div>
              )}
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{plan.title}</h3>
              <p className="text-2xl font-heading font-bold text-gradient mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
