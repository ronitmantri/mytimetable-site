import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Productivity?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and professionals who have already organized their lives with mytimetable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5" />
              Download Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Try Web Version
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10k+
              </span>
              <span className="text-muted-foreground">Downloads</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                4.9★
              </span>
              <span className="text-muted-foreground">User Rating</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Free
              </span>
              <span className="text-muted-foreground">Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
