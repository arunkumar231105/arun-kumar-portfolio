import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <section className="container-section">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Resume</h1>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="glass-card p-8 animate-fade-in space-y-8">
          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a href="/arun-kumar-cv.pdf" download>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </a>
            <a href="/arun-kumar-cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Full Resume
              </Button>
            </a>
          </div>

          {/* Resume Summary Sections */}
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                <span>Experience</span>
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="space-y-4">
                {[
                  {
                    role: "Software Engineer (AI) Intern",
                    company: "HexaVibes Solutions",
                    period: "08/2025 – Present",
                    points: ["AI-powered applications development", "LLM integration and prompt engineering"],
                  },
                  {
                    role: "Web Designer (Front End Developer)",
                    company: "High Tech Software House & Training Centre",
                    period: "08/2025 – Present",
                    points: ["Responsive UI development", "Modern web design and component architecture"],
                  },
                ].map((job) => (
                  <div key={job.role} className="border-l-2 border-primary/30 pl-4 space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{job.role}</p>
                        <p className="text-sm text-primary/80">{job.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{job.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {job.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                <span>Education</span>
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="space-y-4">
                {[
                  {
                    degree: "BS – Software Engineering",
                    institution: "SZABIST Karachi Campus",
                    period: "2023–2027",
                  },
                  {
                    degree: "Cloud Data Engineering",
                    institution: "Saylani Mass I.T. Training",
                    period: "Jul 2025 – Mar 2026",
                  },
                ].map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-foreground">{edu.degree}</p>
                        <p className="text-sm text-primary/80">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                <span>Key Skills</span>
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "Node.js", "React", "Next.js", "MongoDB", "MySQL", "PostgreSQL",
                  "AWS S3", "Snowflake", "Apache Airflow", "ETL Pipelines", "REST APIs",
                  "Docker", "Git", "TensorFlow.js", "Figma", "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-sm bg-muted text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
