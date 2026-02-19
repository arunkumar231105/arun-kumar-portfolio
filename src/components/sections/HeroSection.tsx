
import { Mail, Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 container mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 space-y-8">

          {/* Social Icons */}
          <div className="flex items-center gap-4 animate-fade-in">
            <a
              href="https://github.com/arunkumar231105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.linkedin.com/in/arun-kumar-b578a128b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-gradient">Arun Kumar</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/80 tracking-wide animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Backend Developer&nbsp;&nbsp;·&nbsp;&nbsp;AI Integration&nbsp;&nbsp;·&nbsp;&nbsp;Cloud & Data Engineering
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/40 pl-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            I build scalable backend systems, production-grade ETL pipelines, and AI-powered applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button size="lg" className="rounded-md gap-2 font-semibold">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="/arun-kumar-cv.pdf" download>
              <Button variant="outline" size="lg" className="rounded-md gap-2 font-semibold">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="ghost" size="lg" className="rounded-md gap-2 font-semibold">
                <Mail className="h-4 w-4" /> Contact Me
              </Button>
            </Link>
          </div>

          {/* Stats Strip */}
          <div className="flex flex-wrap gap-8 pt-4 animate-fade-in border-t border-border/40" style={{ animationDelay: "0.55s" }}>
            {[
              { value: "MERN", label: "Full-Stack" },
              { value: "ETL", label: "Pipelines" },
              { value: "AI/ML", label: "Integration" },
              { value: "Cloud", label: "Engineering" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-lg font-bold text-primary">{item.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl opacity-60 animate-pulse-slow" />
            {/* Border frame */}
            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-primary/50 via-transparent to-accent/50 z-0" />
            <img
              src="/lovable-uploads/67c40829-c58a-4f60-a54f-5518fbdb5f63.png"
              alt="Arun Kumar"
              className="rounded-3xl shadow-2xl h-80 w-80 object-cover object-center relative z-10"
            />
            {/* Corner accents */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary/10 rounded-2xl z-0" />
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-accent/10 rounded-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
