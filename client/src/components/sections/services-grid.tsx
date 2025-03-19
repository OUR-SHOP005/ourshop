import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Monitor, Paintbrush, MessageSquare, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: Monitor
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    icon: Paintbrush
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that reach and convert your target audience.",
    icon: MessageSquare
  },
  {
    title: "Analytics & SEO",
    description: "Data-driven optimization to improve your online visibility and performance.",
    icon: BarChart
  }
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <service.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
