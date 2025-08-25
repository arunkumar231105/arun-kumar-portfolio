
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12 border-t border-border mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-display font-bold cursor-pointer text-gradient"
            >
              Arun Kumar
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Software Engineering student passionate about creating efficient, user-centric solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a 
                  href="https://github.com/arunkumar231105" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a 
                  href="https://www.linkedin.com/in/arun-kumar-b578a128b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a 
                  href="mailto:arunkumarjuswani12@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arun Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
