import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";
import PortfolioCard from "@/components/shared/PortfolioCard";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Web Design", "Development", "Branding"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const { data: portfolioItems } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filteredItems = portfolioItems?.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Explore our latest work and see how we've helped businesses succeed.
      </p>

      {/* Category Filter */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems?.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
