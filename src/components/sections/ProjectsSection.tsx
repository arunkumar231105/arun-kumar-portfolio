
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

// Define a proper interface for project objects
interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  imagePath?: string;
}

export default function ProjectsSection() {
  // EDITABLE: Projects array - Add new projects or update existing ones here
  const projects: Project[] = [
    {
      title: "SZABIST Timetable Website",
      description: "A tool for university students to easily find and manage their class schedules with a user-friendly interface.",
      tags: ["React", "UI/UX", "Web App", "Education"],
      repoUrl: "https://github.com/arunkumar231105/BSSE-Timetable.git",
      // EDITABLE: Add liveUrl when the project is deployed
      // liveUrl: "https://example.com",
      // EDITABLE: Add imagePath when you have a project screenshot
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Food App (UI/UX)",
      description: "Designed an intuitive food ordering prototype in Figma with a focus on user experience and visual appeal.",
      tags: ["UI/UX", "Figma", "Prototyping", "Mobile App"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Gym App (UI/UX)",
      description: "Developed a fitness application with workout tracking features, progress monitoring, and personalized routines.",
      tags: ["UI/UX", "Figma", "Mobile App", "Fitness"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Small Business Loyalty Program",
      description: "Built a React-based AI-powered web app for customer loyalty management and rewards tracking.",
      tags: ["React", "AI", "Web App", "Business Solution"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Library Management System",
      description: "Created a Java GUI-based system for book and user management with search, check-out, and analytics features.",
      tags: ["Java", "GUI", "Database", "OOP"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Meteor Mash Game",
      description: "Developed a fun C++ game with interactive features, collision detection, and scoring mechanisms.",
      tags: ["C++", "Game Development", "GUI", "OOP"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }, 
    {
      title: "Shoes E-commerce Website",
      description: "Designed and built a responsive e-commerce platform using HTML/CSS with product listings and cart functionality.",
      tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
      // EDITABLE: Add repoUrl or liveUrl when available
      // repoUrl: "https://github.com/yourusername/repo.git",
      // liveUrl: "https://example.com",
      // imagePath: "/path-to-image.jpg"
    }
    // EDITABLE: Add new projects here
    // Example:
    // {
    //   title: "Personal Blog",
    //   description: "A React-based blog with markdown support and a custom CMS for content management.",
    //   tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    //   repoUrl: "https://github.com/yourusername/blog-project",
    //   liveUrl: "https://your-blog-site.com",
    //   imagePath: "/path-to-project-image.jpg"
    // }
  ];

  return (
    <section id="projects" className="container-section">
      <SectionHeading 
        title="Projects" 
        subtitle="A showcase of my recent work and creations" 
        alignment="center" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            tags={project.tags} 
            repoUrl={project.repoUrl} 
            liveUrl={project.liveUrl} 
            imagePath={project.imagePath}
            className="animate-fade-in" 
            style={{
              animationDelay: `${index * 0.1}s`
            }} 
          />
        ))}
      </div>
      
      <div className="mt-12 text-center text-muted-foreground text-sm">
        {/* EDITABLE: This area can be used for a projects footnote or call-to-action */}
      </div>
    </section>
  );
}
