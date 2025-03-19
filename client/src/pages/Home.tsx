import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ServiceCard from "@/components/shared/ServiceCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { SERVICES } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function Home() {
  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl">
            Building Digital Excellence for Your Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We create stunning websites and digital solutions that help your
            business grow and succeed in the digital world.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" asChild>
                <a>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" asChild>
                <a>View Our Work</a>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container py-24 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="container py-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
