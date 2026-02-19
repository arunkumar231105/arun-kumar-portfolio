import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <NavLink to="/" className="text-xl font-display font-bold text-gradient">
              Arun Kumar
            </NavLink>
            <p className="text-muted-foreground text-sm mt-1.5 max-w-xs">
              Backend Developer · AI Integration · Cloud & Data Engineering
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-1">
              <Button asChild variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <a href="https://github.com/arunkumar231105" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <a href="https://www.linkedin.com/in/arun-kumar-b578a128b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <a href="mailto:arunkumarjuswani12@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">© {currentYear} Arun Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
