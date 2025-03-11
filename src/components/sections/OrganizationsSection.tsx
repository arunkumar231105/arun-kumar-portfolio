
import TimelineItem from "@/components/TimelineItem";
import SectionHeading from "@/components/SectionHeading";

export default function OrganizationsSection() {
  return (
    <section id="organizations" className="container-section bg-muted/30">
      <SectionHeading 
        title="Organizations & Leadership" 
        subtitle="My contributions to communities and organizations" 
      />
      
      <div className="glass-card p-8 animate-fade-in">
        <TimelineItem 
          title="IEEE Society - SZABIST" 
          subtitle="Assistant Director" 
          date="09/2024 – Present" 
          description={[
            "Organized Git/GitHub workshops for students to enhance version control skills", 
            "Led programming fundamentals sessions focused on Java and C++", 
            "Coordinated team projects and initiatives to promote technical learning", 
            "Contributed to increasing society engagement and membership"
          ]} 
        />
        
        <TimelineItem 
          title="DHoR (Development of Human Resources)" 
          subtitle="Volunteer Member" 
          date="2022 – 2023" 
          description={[
            "Assisted underprivileged students in educational initiatives", 
            "Participated in community outreach programs", 
            "Represented the organization at Educational Expos (2022 & 2023)", 
            "Helped develop educational resources for community programs"
          ]} 
          isLast={true} 
        />
      </div>
    </section>
  );
}
