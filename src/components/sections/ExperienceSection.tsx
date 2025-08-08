
import TimelineItem from "@/components/TimelineItem";
import SectionHeading from "@/components/SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="container-section bg-muted/30">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="My internships and work history" 
      />
      
      <div className="glass-card p-8 animate-fade-in">
        {/* EDITABLE: Experience items - Add new positions or modify existing ones */}
        <TimelineItem 
          title="Software Engineer (AI)" 
          subtitle="HexaVibes Solutions" 
          date="Present" 
          description={[
            "Working as Software Engineer with focus on AI technologies",
            "Developing AI-powered applications and solutions",
            "Contributing to innovative software development projects"
          ]} 
        />
        
        <TimelineItem 
          title="Remote Internships" 
          subtitle="CodSoft & Code Alpha" 
          date="06/2024 – 08/2024" 
          description={[
            "Completed one-month internship in Java (CodSoft) focusing on OOP and application development",
            "Completed one-month internship in C++ (Code Alpha) focusing on data structures and algorithms",
            "Engaged in debugging and code optimization exercises",
            "Collaborated with team members on virtual projects"
          ]} 
          isLast={true} 
        />
        
        {/* EDITABLE: To add more experience items, remove the isLast prop from the item above and add new TimelineItem components here
        <TimelineItem 
          title="New Position" 
          subtitle="Company Name" 
          date="Start – End Date" 
          description={[
            "Responsibility or achievement 1",
            "Responsibility or achievement 2"
          ]} 
          isLast={true} 
        />
        */}
      </div>
    </section>
  );
}
