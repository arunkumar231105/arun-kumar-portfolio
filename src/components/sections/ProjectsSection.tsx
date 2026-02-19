import SectionHeading from "@/components/SectionHeading";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  impact: string;
  tech: string[];
  contributions: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Airflow ETL Pipeline",
    impact: "Built automated production-style ETL workflow from S3 to Snowflake with alerting.",
    tech: ["Airflow", "AWS S3", "Snowflake", "SMTP", "Python"],
    contributions: [
      "Automated CSV file detection from S3 using FileSensor triggers",
      "Dynamic Snowflake table creation and schema-aware data loading",
      "SMTP email failure alerts integrated into DAG error hooks",
    ],
    repoUrl: "https://github.com/arunkumar231105",
  },
  {
    title: "MERN Chat App",
    impact: "Real-time messaging platform supporting one-to-one and group chat at scale.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    contributions: [
      "WebSocket architecture with Socket.io for low-latency message delivery",
      "JWT-based authentication with protected routes and session management",
      "Group chat rooms with dynamic user management and online presence indicators",
    ],
    repoUrl: "https://github.com/arunkumar231105/Mern-Chat-App.git",
  },
  {
    title: "AI Theft Detection System",
    impact: "Real-time intrusion detection using computer vision — no cloud dependency.",
    tech: ["Next.js", "TensorFlow.js", "COCO-SSD", "React", "Tailwind CSS"],
    contributions: [
      "On-device inference with COCO-SSD model via TensorFlow.js — zero latency",
      "Webcam feed processing with bounding box rendering on live canvas",
      "Configurable audio alarm triggers with sensitivity thresholds",
    ],
    repoUrl: "https://github.com/arunkumar231105/Theft-Detection-Alarm.git",
  },
  {
    title: "SZABIST Timetable System",
    impact: "Eliminated manual schedule conflicts for 1000+ university students.",
    tech: ["React", "JavaScript", "CSS", "REST API"],
    contributions: [
      "Filterable timetable interface by department, section, and day",
      "Conflict detection logic preventing double-booked rooms or faculty",
      "Mobile-responsive design with fast local-state filtering",
    ],
    repoUrl: "https://github.com/arunkumar231105/BSSE-Timetable.git",
  },
  {
    title: "Library Management System",
    impact: "Digitized book inventory and member management for a university library.",
    tech: ["Java", "Swing GUI", "MySQL", "OOP", "JDBC"],
    contributions: [
      "Role-based access for librarians and students with distinct permission sets",
      "Full CRUD operations on books, members, and borrow records via JDBC",
      "Search and filter engine across 500+ book entries with real-time results",
    ],
  },
  {
    title: "Shoes E-commerce Website",
    impact: "End-to-end storefront with product listings and cart — built from scratch.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    contributions: [
      "Dynamic product catalog with category-based filtering and sort",
      "Persistent cart using LocalStorage across page sessions",
      "Responsive layout optimized for mobile-first browsing",
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border/50 bg-card p-6 flex flex-col gap-4",
        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-300 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-primary/80 font-medium mt-1 leading-snug">
            {project.impact}
          </p>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/50" />

      {/* Key Contributions */}
      <ul className="space-y-2">
        {project.contributions.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.tech.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-normal rounded-md px-2 py-0.5"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="container-section">
      <SectionHeading
        title="Projects"
        subtitle="Production-grade work and engineering projects"
        alignment="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
