
export default function AboutSection() {
  return (
    <section id="about" className="container-section">
      <div className="mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about me and my background</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <div className="glass-card p-6">
            {/* EDITABLE: Career Objective - Update this text to reflect your current career goals */}
            <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
            <p className="text-muted-foreground mb-6">
              Software Engineering student specializing in MERN stack, AI-driven applications, and Cloud Data Engineering. Passionate about building scalable, user-friendly solutions and eager to contribute technical skills to real-world projects.
            </p>
            
            {/* EDITABLE: Key Strengths - Add or modify strengths as you develop new skills */}
            <h4 className="text-xl font-bold mb-3">Key Strengths</h4>
            <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
              <li>MERN stack full-stack development</li>
              <li>Strong problem-solving and coding skills</li>
              <li>Java, C++, Python, and Data Structures expertise</li>
              <li>AI/ML concepts and Cloud Data Engineering knowledge</li>
              <li>Team collaboration and leadership experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
