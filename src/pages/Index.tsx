
import { useEffect } from "react";
import { Mail, Github, Linkedin, MapPin, Calendar, Phone, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-scroll";
import { useToast } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  // Toast notification for site visitors
  const toast = useToast;

  useEffect(() => {
    // Show welcome toast when page loads
    toast.info("👋 Welcome to my portfolio!", {
      description: "Feel free to explore and reach out if you have any questions.",
      duration: 5000,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-32 md:pt-40 pb-16 md:pb-24 container mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <Badge 
              variant="outline" 
              className="mb-4 text-sm px-3 py-1 border-primary/30 bg-primary/5"
            >
              Software Engineering Student
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Hello, I'm <span className="text-gradient">Arun Kumar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              A passionate software engineer with expertise in Java, C++, and UI/UX design, 
              dedicated to creating efficient and scalable solutions for real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button size="lg" className="rounded-md">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="outline" size="lg" className="rounded-md">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-accent/30 blur-3xl opacity-70 animate-pulse-slow" />
              <img 
                src="/lovable-uploads/86bca9b3-f78c-40b1-a03e-e08f0b602d57.png"
                alt="Arun Kumar" 
                className="rounded-3xl shadow-2xl h-80 w-80 object-cover object-center relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 h-32 w-32 bg-primary/10 rounded-full z-0 animate-float" />
              <div className="absolute -top-5 -left-5 h-24 w-24 bg-accent/10 rounded-full z-0 animate-float" style={{animationDelay: "1s"}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="container-section">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 animate-slide-in">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
              <div className="space-y-4">
                {[
                  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Newtown Karachi Centre, Karachi, Pakistan" },
                  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "arunkumarjuswani12@gmail.com" },
                  { icon: <Calendar className="h-5 w-5" />, label: "Date of Birth", value: "23/11/2005" },
                  { icon: <Phone className="h-5 w-5" />, label: "Contact", value: "03173918432" },
                  { icon: <Flag className="h-5 w-5" />, label: "Nationality", value: "Pakistani" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/arun-kumar-b578a128b", url: "https://linkedin.com/in/arun-kumar-b578a128b" },
                  { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "github.com/arunkumar231105", url: "https://github.com/arunkumar231105" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 text-primary">{item.icon}</div>
                    <div>
                      <span className="text-muted-foreground block text-sm">{item.label}</span>
                      {item.url ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
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
          
          <div className="lg:col-span-7 animate-slide-in" style={{animationDelay: "0.2s"}}>
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
              <p className="text-muted-foreground mb-6">
                I am a dedicated Software Engineering student with a passion for creating efficient, innovative, 
                and user-centric solutions. My expertise spans Java, C++, Data Structures & Algorithms, 
                and UI/UX design using Figma. I strive to leverage cutting-edge technologies to solve 
                real-world problems and create applications that make a difference.
              </p>
              
              <h4 className="text-xl font-bold mb-3">Key Strengths</h4>
              <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                <li>Strong problem-solving skills for efficient and scalable software solutions</li>
                <li>Leadership, teamwork, and mentoring experience in tech communities</li>
                <li>Quick adaptability to emerging technologies and AI innovations</li>
                <li>Passion for UI/UX design and user-centric application development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="container-section bg-muted/30">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="My technical skills and competencies"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* You can add more skill icons from lucide-react as needed */}
          {[
            { 
              title: "Programming Languages", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>, 
              description: "Proficient in Java and C++ with strong knowledge of Data Structures & Algorithms and Object-Oriented Programming principles."
            },
            { 
              title: "UI/UX Design", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>, 
              description: "Expert in Figma for wireframing, prototyping, and designing intuitive and user-friendly interfaces for mobile and web applications."
            },
            { 
              title: "AI Integration", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09" /></svg>, 
              description: "Implementing AI tools and technologies in web and mobile applications to create smarter, more personalized user experiences."
            },
            { 
              title: "Software Development", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>, 
              description: "Experience with software engineering principles, application lifecycle management, and creating scalable and maintainable solutions."
            },
            { 
              title: "Web Development", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>, 
              description: "Knowledge of HTML, CSS, and JavaScript to create responsive and interactive web applications with modern frameworks."
            },
            { 
              title: "Tools & Technologies", 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>, 
              description: "Experienced with Git & GitHub for version control, PostgreSQL for database management, and Linux operating systems."
            },
          ].map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Add a note for future skills */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          {/* This section allows for future skill additions */}
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="container-section">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and qualifications"
        />
        
        <div className="glass-card p-8 animate-fade-in">
          <TimelineItem
            title="BS – Software Engineering"
            subtitle="SZABIST Karachi Campus"
            date="2023-2027"
            description="Currently pursuing a bachelor's degree in Software Engineering, focusing on programming fundamentals, software design principles, and practical application development."
            isLast={true}
          />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="container-section bg-muted/30">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My internships and work history"
        />
        
        <div className="glass-card p-8 animate-fade-in">
          <TimelineItem
            title="Java Intern"
            subtitle="Codsoft Company (Virtual)"
            date="07/2024 – 08/2024"
            description={[
              "Developed Java applications with a focus on object-oriented programming",
              "Enhanced data structures and algorithms skills through practical implementation",
              "Engaged in debugging and code optimization exercises",
              "Collaborated with team members on virtual projects"
            ]}
          />
          
          <TimelineItem
            title="C++ Intern"
            subtitle="Code Alpha (Virtual)"
            date="06/2024 – 07/2024"
            description={[
              "Built real-world C++ applications from concept to implementation",
              "Improved problem-solving skills through algorithm challenges",
              "Gained experience in software lifecycle management",
              "Implemented best practices for clean, maintainable code"
            ]}
            isLast={true}
          />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="container-section">
        <SectionHeading 
          title="Projects" 
          subtitle="A showcase of my recent work and creations"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Food App (UI/UX)",
              description: "Designed an intuitive food ordering prototype in Figma with a focus on user experience and visual appeal.",
              tags: ["UI/UX", "Figma", "Prototyping", "Mobile App"]
            },
            {
              title: "Gym App (UI/UX)",
              description: "Developed a fitness application with workout tracking features, progress monitoring, and personalized routines.",
              tags: ["UI/UX", "Figma", "Mobile App", "Fitness"]
            },
            {
              title: "Small Business Loyalty Program",
              description: "Built a React-based AI-powered web app for customer loyalty management and rewards tracking.",
              tags: ["React", "AI", "Web App", "Business Solution"]
            },
            {
              title: "Library Management System",
              description: "Created a Java GUI-based system for book and user management with search, check-out, and analytics features.",
              tags: ["Java", "GUI", "Database", "OOP"]
            },
            {
              title: "Meteor Mash Game",
              description: "Developed a fun C++ game with interactive features, collision detection, and scoring mechanisms.",
              tags: ["C++", "Game Development", "GUI", "OOP"]
            },
            {
              title: "Shoes E-commerce Website",
              description: "Designed and built a responsive e-commerce platform using HTML/CSS with product listings and cart functionality.",
              tags: ["HTML", "CSS", "JavaScript", "E-commerce"]
            }
          ].map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Add a note for future projects */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          {/* This section allows for future project additions */}
        </div>
      </section>
      
      {/* Organizations & Leadership Section */}
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
      
      {/* Awards & Certifications Section */}
      <section id="awards" className="container-section">
        <SectionHeading 
          title="Awards & Certifications" 
          subtitle="Recognition of my achievements and skills"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 animate-slide-in">
            <h3 className="text-xl font-bold mb-3">ZABEfest 2024 Speed Coding and Debugging Competition</h3>
            <p className="text-muted-foreground mb-4">Certificate of Excellence at SZABIST University for demonstrating exceptional coding and problem-solving skills during the competition.</p>
            <Badge variant="outline" className="border-primary/30 bg-primary/5">Excellence Award</Badge>
          </div>
          
          <div className="glass-card p-6 animate-slide-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-bold mb-3">Object-Oriented Programming in Java</h3>
            <p className="text-muted-foreground mb-4">Coursera certification from University of California, San Diego with a score of 94%, demonstrating proficiency in Java OOP concepts.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/30 bg-primary/5">Coursera</Badge>
              <Badge variant="outline" className="border-primary/30 bg-primary/5">UC San Diego</Badge>
              <Badge variant="outline" className="border-primary/30 bg-primary/5">Score: 94%</Badge>
            </div>
          </div>
        </div>
        
        {/* Add a note for future certifications */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          {/* This section allows for future certification additions */}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container-section bg-muted/30">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for collaborations or opportunities"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out to me through the form or via my social profiles.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:arunkumarjuswani12@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>arunkumarjuswani12@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/arun-kumar-b578a128b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/arun-kumar-b578a128b</span>
                </a>
                <a 
                  href="https://github.com/arunkumar231105" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/arunkumar231105</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in" style={{animationDelay: "0.2s"}}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
