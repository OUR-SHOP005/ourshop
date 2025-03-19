import { useState } from "react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { Button } from "@/components/ui/button";

const categories = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)))];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>

      <div className="flex gap-2 mb-12 overflow-x-auto pb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <PortfolioGrid items={filteredItems} />
    </div>
  );
}