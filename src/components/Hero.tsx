import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-75" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Your Time, Organized</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Master Your Schedule with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                mytimetable
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              The all-in-one productivity app that combines a custom timetable, powerful calculator, 
              organized notes, and a sleek modern interface to keep you on track.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://mytimetable.neocities.org/Liquid_Glass_OS_Updated" target="_blank" rel="noopener noreferrer">
                  Try Web Version
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mockup image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroMockup} 
                alt="mytimetable app interface mockup" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating accent cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-soft animate-bounce delay-100">
              <div className="text-2xl">📅</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-soft animate-bounce">
              <div className="text-2xl">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
