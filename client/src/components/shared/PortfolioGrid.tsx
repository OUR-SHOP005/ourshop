import { motion } from "framer-motion";
import { type PORTFOLIO_ITEMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PortfolioGridProps {
  items: typeof PORTFOLIO_ITEMS;
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden group cursor-pointer">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="p-6">
                <span className="text-sm text-muted-foreground">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
