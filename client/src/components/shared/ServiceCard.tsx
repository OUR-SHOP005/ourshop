import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type SERVICES } from "@/lib/constants";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Create a dynamic icon component
  const IconComponent = (Icons as any)[service.icon];

  return (
    <Card className="group hover:border-primary/50 transition-colors">
      <CardHeader>
        <IconComponent className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}