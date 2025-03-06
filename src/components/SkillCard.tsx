
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function SkillCard({
  icon,
  title,
  description,
  className,
}: SkillCardProps) {
  return (
    <div className={cn(
      "glass-card hover-card p-6 h-full", 
      className
    )}>
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
