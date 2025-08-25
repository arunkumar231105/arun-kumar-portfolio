
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="container-section bg-muted/30">
      <SectionHeading 
        title="Contact Me" 
        subtitle="Get in touch for collaborations or opportunities" 
        alignment="center" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-slide-in">
          <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out to me through the form or via my social profiles.
            </p>
            
            {/* EDITABLE: Contact information - Update these links and text as needed */}
            <div className="space-y-4">
              <a href="mailto:arunkumarjuswani12@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>arunkumarjuswani12@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/arun-kumar-b578a128b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>www.linkedin.com/in/arun-kumar-b578a128b</span>
              </a>
              <a href="https://github.com/arunkumar231105" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span>github.com/arunkumar231105</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-in" style={{
          animationDelay: "0.2s"
        }}>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
