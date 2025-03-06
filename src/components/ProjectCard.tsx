
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imagePath?: string;
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imagePath,
  liveUrl,
  repoUrl,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn(
      "glass-card overflow-hidden group",
      className
    )}>
      {/* Project Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex gap-3">
            {liveUrl && (
              <Button asChild size="sm" variant="secondary">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> View Live
                </a>
              </Button>
            )}
            {repoUrl && (
              <Button asChild size="sm" variant="secondary">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github className="h-4 w-4" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="w-full h-full bg-muted flex items-center justify-center">
          {imagePath ? (
            <img 
              src={imagePath} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-4xl font-display font-bold text-gradient">{title.charAt(0)}</div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
