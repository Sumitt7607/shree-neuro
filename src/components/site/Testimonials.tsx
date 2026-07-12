import * as React from "react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    category: "Migraine Relief",
    categoryBg: "bg-rose-600",
    name: "Anjali Sharma",
    qualification: "Chronic Migraine Patient",
    detail: "Treated by Dr. R. K. Sen • 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "I had years of intense migraines that disrupted my work. The custom therapy plan here was life-changing. I am now fully migraine-free and back to my routine!",
  },
  {
    category: "Stroke Care",
    categoryBg: "bg-orange-600",
    name: "Priya Patel",
    qualification: "Rehabilitation Success",
    detail: "Underwent 3-Month Rehab • 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "My father lost movement on his left side after a stroke. The dedication of the physical therapy team here was beyond words. He is now walking independently!",
  },
  {
    category: "Spine Health",
    categoryBg: "bg-red-700",
    name: "Amit Verma",
    qualification: "Spinal Decompression",
    detail: "Post-op Care Plan • 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "The spinal treatment was precise and clear. They guided me through every recovery milestone. I felt cared for as a human, not just a clinical case number.",
  },
  {
    category: "General Neuro",
    categoryBg: "bg-amber-600",
    name: "Vikram Malhotra",
    qualification: "Sleep Disorder Therapy",
    detail: "Neurological Sleep Analysis • 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Persistent insomnia was ruining my focus. Their diagnostic study identified the neurological cause and helped rewire my sleep cycle. Restorative sleep is back!",
  },
  {
    category: "Pediatric",
    categoryBg: "bg-rose-500",
    name: "Meera Deshmukh",
    qualification: "Parent of Patient",
    detail: "Developmental Care • 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Finding a compassionate pediatric neurologist was crucial. Dr. Sen's warmth and patience made my child feel completely safe and excited for visits.",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(1); // Priya Patel active by default
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getIndexDiff = (index: number, current: number, total: number) => {
    let diff = index - current;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  const getCardStyles = (diff: number) => {
    if (diff === 0) {
      return {
        scale: 1.02,
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 30,
      };
    }

    const xOffset = isMobile ? 30 : 280;
    const rotation = isMobile ? 3 : 6;

    if (diff === -1) {
      return {
        scale: isMobile ? 0.85 : 0.9,
        rotate: -rotation,
        x: -xOffset,
        y: isMobile ? 10 : 20,
        opacity: isMobile ? 0.2 : 0.6,
        zIndex: 20,
      };
    }
    if (diff === 1) {
      return {
        scale: isMobile ? 0.85 : 0.9,
        rotate: rotation,
        x: xOffset,
        y: isMobile ? 10 : 20,
        opacity: isMobile ? 0.2 : 0.6,
        zIndex: 20,
      };
    }

    // Hidden cards
    return {
      scale: 0.75,
      rotate: diff < 0 ? -12 : 12,
      x: diff < 0 ? -xOffset * 1.6 : xOffset * 1.6,
      y: 35,
      opacity: 0,
      zIndex: 10,
    };
  };

  return (
    <section id="testimonials" className="relative py-10 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— Patient stories</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl mx-auto">
              What our patients <span className="italic text-gradient">say.</span>
            </h2>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[380px] md:h-[340px] flex items-center justify-center">
          {testimonials.map((t, i) => {
            const diff = getIndexDiff(i, activeIndex, testimonials.length);
            const isCenter = diff === 0;

            return (
              <motion.div
                key={i}
                animate={getCardStyles(diff)}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(i);
                  }
                }}
                className={cn(
                  "absolute w-[88%] sm:w-[440px] md:w-[500px] h-[300px] md:h-[260px]",
                  "glass rounded-3xl p-6 md:p-8 flex flex-col justify-between select-none cursor-pointer",
                  "shadow-elegant transition-all duration-300",
                  isCenter
                    ? "shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-primary/20 bg-background/90"
                    : "shadow-sm border-border/40 bg-background/60 hover:bg-background/80"
                )}
              >
                {/* Soft gradient flare in the top right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 via-rose-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

                {/* Category Pill */}
                <span
                  className={cn(
                    "absolute -top-3.5 left-8 px-4 py-1 rounded-full text-xs font-semibold text-white shadow-md z-40 transition-transform duration-300",
                    t.categoryBg,
                    isCenter ? "scale-100" : "scale-90"
                  )}
                >
                  {t.category}
                </span>

                {/* Header Profile Row */}
                <div className="flex gap-4 items-center relative z-10">
                  {/* Avatar Circle with Badge */}
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/20 overflow-hidden bg-muted">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Checkmark Badge */}
                    <span className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-white flex items-center justify-center border-2 border-background shadow-sm">
                      <svg className="w-3 h-3 fill-none stroke-current stroke-[3px]" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>

                  {/* Name and Professional details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground truncate leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-primary font-semibold text-xs md:text-sm mt-0.5">
                      {t.qualification}
                    </p>
                    <p className="text-muted-foreground text-[10px] md:text-xs">
                      {t.detail}
                    </p>

                    {/* Stars */}
                    <div className="flex gap-0.5 mt-1.5">
                      {Array.from({ length: t.rating }).map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-4 h-4 fill-primary text-primary"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="relative mt-4 flex-1 flex items-center z-10">
                  <span className="absolute -left-2 -top-3 font-serif text-3xl text-orange-500/20 pointer-events-none">
                    “
                  </span>
                  <p className="font-display italic text-sm md:text-base text-muted-foreground/90 pl-3 pr-3 leading-relaxed line-clamp-3">
                    {t.text}
                  </p>
                  <span className="absolute -right-2 -bottom-2 font-serif text-3xl text-orange-500/20 pointer-events-none">
                    ”
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls at the Bottom */}
        <div className="flex items-center justify-center gap-6 mt-12 relative z-40">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-border bg-background/50 hover:bg-muted flex items-center justify-center text-foreground hover:border-primary/30 transition shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-border bg-background/50 hover:bg-muted flex items-center justify-center text-foreground hover:border-primary/30 transition shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}


