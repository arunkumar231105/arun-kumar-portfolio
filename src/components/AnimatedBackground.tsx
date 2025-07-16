import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full animate-pulse-slow blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/3 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Subtle lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse-slow" />
          <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Interactive mouse follow element */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px)`,
            left: '50%',
            top: '50%',
            marginLeft: '-12rem',
            marginTop: '-12rem',
          }}
        />
        
        {/* Small floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '7s' }} />
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '9s' }} />
      </div>
      
      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}