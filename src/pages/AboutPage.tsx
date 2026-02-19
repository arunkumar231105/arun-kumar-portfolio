import EducationSection from "@/components/sections/EducationSection";
import AwardsSection from "@/components/sections/AwardsSection";
import OrganizationsSection from "@/components/sections/OrganizationsSection";

export default function AboutPage() {
  return (
    <div>
      {/* Professional Summary */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">About</h1>
            <div className="h-px w-12 bg-primary" />
          </div>
          <div className="glass-card p-8 space-y-8 animate-fade-in">
            <div>
              <h2 className="text-xl font-bold mb-3">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Backend-focused software engineer with expertise in MERN stack, AI-driven applications, and Cloud Data Engineering.
                I design and build scalable systems — from RESTful APIs and microservices to production-grade ETL pipelines and AI-integrated platforms.
                Committed to clean architecture, performance, and real-world impact.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Core Competencies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Scalable Backend Architecture (Node.js, Express)",
                  "Full-Stack MERN Development",
                  "ETL Pipeline Design & Cloud Data Engineering",
                  "AI/ML Integration & LLM-powered Applications",
                  "RESTful API Design & Microservices",
                  "Data Structures, Algorithms & System Design",
                  "Java, C++, Python Engineering",
                  "Team Leadership & Agile Collaboration",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EducationSection />
      <AwardsSection />
      <OrganizationsSection />
    </div>
  );
}
