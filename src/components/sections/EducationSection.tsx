
import TimelineItem from "@/components/TimelineItem";
import SectionHeading from "@/components/SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="container-section">
      <SectionHeading 
        title="Education" 
        subtitle="My academic journey and qualifications" 
      />
      
      <div className="glass-card p-8 animate-fade-in">
        {/* EDITABLE: Education items - Add new degrees or modify existing ones */}
        <TimelineItem 
          title="BS – Software Engineering" 
          subtitle="SZABIST Karachi Campus" 
          date="2023-2027" 
          description="Currently pursuing a bachelor's degree in Software Engineering, focusing on programming fundamentals, software design principles, and practical application development." 
          isLast={false} 
        />
        
        <TimelineItem 
          title="Cloud Data Engineering" 
          subtitle="Saylani Mass I.T. Training" 
          date="June 2025 – May 2026" 
          description="Comprehensive training program focusing on cloud technologies, data engineering principles, and modern data pipeline development." 
          isLast={true} 
        />
        
        {/* EDITABLE: To add more education items, remove the isLast prop from the item above and add new TimelineItem components here
        <TimelineItem 
          title="New Degree" 
          subtitle="Institution Name" 
          date="Start – End Year" 
          description="Description of your education, focus areas, achievements, etc." 
          isLast={true} 
        />
        */}
      </div>
    </section>
  );
}
