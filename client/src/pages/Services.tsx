import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/shared/ServiceCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
        We offer comprehensive web design and development solutions tailored to
        your business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SERVICES.map((service) => (
          <div key={service.title}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contact">
          <Button size="lg" asChild>
            <a>
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Link>
      </div>
    </div>
  );
}
