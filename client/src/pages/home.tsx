import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <ServicesGrid />
      </section>
      
      <Separator />
      
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Testimonials />
      </section>
    </div>
  );
}
