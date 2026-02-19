
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

export default function AwardsSection() {
  return (
    <section className="container-section bg-muted/30">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Awards & Certifications</h2>
        <div className="h-px w-10 bg-primary" />
      </div>
      
      {/* EDITABLE: Awards grid - Add new awards or modify existing ones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 animate-slide-in">
          <h3 className="text-xl font-bold mb-3">ZABEfest 2024 Speed Coding and Debugging Competition</h3>
          <p className="text-muted-foreground mb-4">Certificate of Excellence at SZABIST University for demonstrating exceptional coding and problem-solving skills during the competition.</p>
          <Badge variant="outline" className="border-primary/30 bg-primary/5">Excellence Award</Badge>
        </div>
        
        <div className="glass-card p-6 animate-slide-in" style={{
          animationDelay: "0.2s"
        }}>
          <h3 className="text-xl font-bold mb-3">Object-Oriented Programming in Java</h3>
          <p className="text-muted-foreground mb-4">Coursera certification from University of California, San Diego with a score of 94%, demonstrating proficiency in Java OOP concepts.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/5">Coursera</Badge>
            <Badge variant="outline" className="border-primary/30 bg-primary/5">UC San Diego</Badge>
            <Badge variant="outline" className="border-primary/30 bg-primary/5">Score: 94%</Badge>
          </div>
        </div>
        
        {/* EDITABLE: Add more award cards here
        <div className="glass-card p-6 animate-slide-in" style={{
          animationDelay: "0.4s"
        }}>
          <h3 className="text-xl font-bold mb-3">New Award Title</h3>
          <p className="text-muted-foreground mb-4">Description of the award or certification.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/5">Badge Text</Badge>
          </div>
        </div>
        */}
      </div>
      
      <div className="mt-8 text-center text-muted-foreground text-sm">
        {/* EDITABLE: This area can be used for an awards footnote or additional information */}
      </div>
    </section>
  );
}
