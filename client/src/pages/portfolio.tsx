import { PortfolioGrid } from "@/components/portfolio-grid";

export default function Portfolio() {
  return (
    <div className="min-h-screen py-16 container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-lg text-muted-foreground">
          Explore our recent projects and see how we've helped businesses
          achieve their digital goals.
        </p>
      </div>

      <PortfolioGrid />
    </div>
  );
}
