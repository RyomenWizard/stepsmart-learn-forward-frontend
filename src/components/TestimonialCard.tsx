
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src={avatarUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90">"{content}"</p>
      </CardContent>
    </Card>
  );
}
