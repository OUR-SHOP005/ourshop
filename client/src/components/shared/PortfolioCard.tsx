import { Card, CardContent } from "@/components/ui/card";
import { type PortfolioItem } from "@shared/schema";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group cursor-pointer">
        <CardContent className="p-0 relative">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <span className="inline-block mt-4 text-xs uppercase tracking-wider border px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
