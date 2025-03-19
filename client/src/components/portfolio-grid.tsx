import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "Custom shopping experience with advanced features",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Corporate Website",
    description: "Modern website for a leading financial firm",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Mobile App",
    description: "Innovative fitness tracking application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Brand Identity",
    description: "Complete rebranding for tech startup",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Marketing Campaign",
    description: "Digital campaign with impressive ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Web Application",
    description: "Cloud-based project management tool",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600"
  }
];

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
