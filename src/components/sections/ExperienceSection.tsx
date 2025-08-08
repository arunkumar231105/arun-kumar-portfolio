
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
          title="Software Engineer (AI) Intern" 
          subtitle="HexaVibes Solutions" 
          date="08/2025 – Present" 
          description={[
            "Working as Software Engineer with focus on AI technologies",
            "Developing AI-powered applications and solutions",
            "Contributing to innovative software development projects"
          ]} 
        />
        
        <TimelineItem 
          title="Web Designer (Front End Developer)" 
          subtitle="High Tech Software House & Training Centre" 
          date="08/2025 – Present" 
          description={[
            "Gained hands-on experience in front-end development",
            "Worked on responsive web design and user interface development",
            "Applied modern web technologies and design principles",
            "Collaborated with development team on various projects"
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
