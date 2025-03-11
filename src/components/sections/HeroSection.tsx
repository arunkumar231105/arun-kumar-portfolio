
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          {/* EDITABLE: Update this badge text to reflect your current status */}
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1 border-primary/30 bg-primary/5 animate-fade-in">
            Software Engineering Student
          </Badge>
          
          {/* EDITABLE: Update the heading with your name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight animate-slide-in">
            Hello, I'm <span className="text-gradient">Arun Kumar</span>
          </h1>
          
          {/* EDITABLE: Update this introduction text to reflect your current focus */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-in" style={{ animationDelay: "0.2s" }}>
            Passionate Software Engineering student with strong problem-solving skills and a keen interest in front-end and back-end development. Seeking opportunities to apply my knowledge in real-world projects and grow as a developer
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button size="lg" className="rounded-md">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outline" size="lg" className="rounded-md">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
        
        {/* EDITABLE: Update the image path to your profile picture */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-accent/30 blur-3xl opacity-70 animate-pulse-slow" />
            <img src="/lovable-uploads/86bca9b3-f78c-40b1-a03e-e08f0b602d57.png" alt="Arun Kumar" className="rounded-3xl shadow-2xl h-80 w-80 object-cover object-center relative z-10" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 bg-primary/10 rounded-full z-0 animate-float" />
            <div className="absolute -top-5 -left-5 h-24 w-24 bg-accent/10 rounded-full z-0 animate-float" style={{
              animationDelay: "1s"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
