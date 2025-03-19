import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Code, Palette, TrendingUp, FileText } from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
  };
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  TrendingUp,
  FileText,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
