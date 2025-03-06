
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string | string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute top-6 left-3 bottom-0 w-px bg-border" />
      )}

      {/* Timeline Circle */}
      <div className="relative mt-1 z-10">
        <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm font-medium text-muted-foreground px-2 py-1 rounded-full bg-primary/10 w-fit">
            {date}
          </span>
        </div>
        <p className="text-lg font-medium text-primary mb-3">{subtitle}</p>
        
        {description && Array.isArray(description) ? (
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
