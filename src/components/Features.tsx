import { Calendar, Calculator, FileText, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Custom Timetable",
    description: "Create and customize your perfect schedule with flexible time blocks, color coding, and drag-and-drop simplicity.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Calculator,
    title: "Built-in Calculator",
    description: "Powerful calculator at your fingertips for quick calculations without leaving your timetable.",
    gradient: "from-accent to-orange-400",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description: "Keep all your notes organized and linked to your schedule. Never lose track of important information.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Beautiful, intuitive interface that makes productivity feel effortless. Dark mode included.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to Stay{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Organized</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you manage your time effectively and boost your productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
