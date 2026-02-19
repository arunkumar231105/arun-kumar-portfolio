
import TimelineItem from "@/components/TimelineItem";
import SectionHeading from "@/components/SectionHeading";

export default function OrganizationsSection() {
  return (
    <section className="container-section">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Organizations & Leadership</h2>
        <div className="h-px w-10 bg-primary" />
      </div>
      
      <div className="glass-card p-8 animate-fade-in">
        {/* EDITABLE: Organization items - Add new positions or modify existing ones */}
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
        />
        
        <TimelineItem 
          title="Zab-e-fest 2025" 
          subtitle="IT Department Team Member" 
          date="2025" 
          description="Contributing to the technical aspects of the festival organization and supporting IT operations for the event." 
          isLast={true} 
        />
        
        {/* EDITABLE: To add more organization items, remove the isLast prop from the item above and add new TimelineItem components here
        <TimelineItem 
          title="New Organization" 
          subtitle="Your Role" 
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
