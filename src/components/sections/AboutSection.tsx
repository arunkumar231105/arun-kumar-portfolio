
import { MapPin, Mail, Calendar, Phone, Flag, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="container-section">
      <div className="mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about me and my background</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 animate-slide-in">
          <div className="glass-card p-6">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="space-y-4">
              {[{
                icon: <MapPin className="h-5 w-5" />,
                label: "Location",
                value: "Karachi, Pakistan"
              }, {
                icon: <Mail className="h-5 w-5" />,
                label: "Email",
                value: "arunkumarjuswani12@gmail.com"
              }, {
                icon: <Calendar className="h-5 w-5" />,
                label: "Date of Birth",
                value: "23/11/2005"
              }, {
                icon: <Phone className="h-5 w-5" />,
                label: "Contact",
                value: "03173918432"
              }, {
                icon: <Flag className="h-5 w-5" />,
                label: "Nationality",
                value: "Pakistani"
              }, {
                icon: <Linkedin className="h-5 w-5" />,
                label: "LinkedIn",
                value: "linkedin.com/in/arun-kumar-b578a128b",
                url: "https://linkedin.com/in/arun-kumar-b578a128b"
              }, {
                icon: <Github className="h-5 w-5" />,
                label: "GitHub",
                value: "github.com/arunkumar231105",
                url: "https://github.com/arunkumar231105"
              }].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 text-primary">{item.icon}</div>
                  <div>
                    <span className="text-muted-foreground block text-sm">{item.label}</span>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 animate-slide-in" style={{
          animationDelay: "0.2s"
        }}>
          <div className="glass-card p-6">
            <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
            <p className="text-muted-foreground mb-6">
              As a dedicated Software Engineering student, I blend technical expertise in Java, C++, 
              and Data Structures with a passion for creating intuitive UI/UX designs using Figma. 
              I aim to develop innovative, user-centric applications that leverage cutting-edge AI technologies 
              to solve real-world problems efficiently.
            </p>
            
            <h4 className="text-xl font-bold mb-3">Key Strengths</h4>
            <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
              <li>Strong problem-solving skills for efficient and scalable software solutions</li>
              <li>Leadership and teamwork experience in tech communities</li>
              <li>Quick adaptability to emerging technologies, especially in AI</li>
              <li>Passion for UI/UX design and user-centric application development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
