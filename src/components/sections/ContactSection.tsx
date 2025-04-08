
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="container-section bg-muted/30">
      <SectionHeading 
        title="Contact Me" 
        subtitle="Get in touch for collaborations or opportunities" 
        alignment="center" 
      />
      
      <div className="flex justify-center">
        <div className="animate-slide-in max-w-2xl w-full">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out to me through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:arunkumarjuswani12@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>arunkumarjuswani12@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/arun-kumar-b578a128b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/arun-kumar-b578a128b</span>
              </a>
              <a href="https://github.com/arunkumar231105" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span>github.com/arunkumar231105</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
