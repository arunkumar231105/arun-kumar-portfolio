
import { cn } from "@/lib/utils";

interface SkillCategory {
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    label: "Core Backend",
    skills: ["Python", "Node.js", "REST APIs", "Authentication", "Database Schema Design", "WebSockets"],
  },
  {
    label: "Cloud & Data",
    skills: ["AWS", "S3", "Snowflake", "ETL Pipelines", "Apache Airflow", "Data Engineering"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "JDBC"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Firebase", "n8n", "Figma"],
  },
  {
    label: "AI & ML",
    skills: ["TensorFlow.js", "COCO-SSD", "Prompt Engineering", "AI Integration", "LLMs"],
  },
];

function SkillCategory({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/50 bg-card p-5 flex flex-col gap-4",
        "hover:border-primary/40 hover:shadow-md hover:shadow-primary/5",
        "transition-all duration-300 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Category Label */}
      <div className="flex items-center gap-2">
        <div className="h-1 w-4 rounded-full bg-primary" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
          {category.label}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium",
              "bg-muted text-foreground/80",
              "hover:bg-primary/10 hover:text-primary",
              "transition-colors duration-200 cursor-default"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="container-section bg-muted/20">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Skills & Expertise</h2>
        <div className="h-px w-10 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <SkillCategory key={category.label} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
