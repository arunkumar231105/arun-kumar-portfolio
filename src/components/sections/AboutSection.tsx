
export default function AboutSection() {
  return (
    <section id="about" className="container-section">
      <div className="mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Background, focus, and what I bring to the table</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <div className="glass-card p-8 space-y-8">
            {/* Summary */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend-focused software engineer with expertise in MERN stack, AI-driven applications, and Cloud Data Engineering.
                I design and build scalable systems — from RESTful APIs and microservices to production-grade ETL pipelines and AI-integrated platforms.
                Committed to clean architecture, performance, and real-world impact.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xl font-bold mb-4">Core Competencies</h4>
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
