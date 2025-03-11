
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
        <TimelineItem 
          title="BS – Software Engineering" 
          subtitle="SZABIST Karachi Campus" 
          date="2023-2027" 
          description="Currently pursuing a bachelor's degree in Software Engineering, focusing on programming fundamentals, software design principles, and practical application development." 
          isLast={true} 
        />
      </div>
    </section>
  );
}
