
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
        your business needs at affordable prices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SERVICES.map((service) => (
          <div key={service.title} className="space-y-6">
            <ServiceCard service={service} />
            <div className="bg-muted/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">What's Included:</h3>
              {service.title === "Web Design" && (
                <>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Custom responsive design</li>
                    <li>Mobile-first approach</li>
                    <li>UI/UX optimization</li>
                    <li>3 design revisions</li>
                    <li>Cross-browser compatibility</li>
                  </ul>
                  <p className="font-medium">Starting from ₹2,999</p>
                </>
              )}
              {service.title === "Web Development" && (
                <>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Custom website development</li>
                    <li>CMS integration</li>
                    <li>Performance optimization</li>
                    <li>Basic SEO setup</li>
                    <li>3 months support</li>
                  </ul>
                  <p className="font-medium">Starting from ₹5,999</p>
                </>
              )}
              {service.title === "E-Commerce" && (
                <>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Product catalog setup</li>
                    <li>Payment gateway integration</li>
                    <li>Order management system</li>
                    <li>Basic inventory tracking</li>
                    <li>2 months support</li>
                  </ul>
                  <p className="font-medium">Starting from ₹7,999</p>
                </>
              )}
              {service.title === "UI/UX Design" && (
                <>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>User research</li>
                    <li>Wireframing</li>
                    <li>Prototype development</li>
                    <li>User testing</li>
                    <li>2 revision rounds</li>
                  </ul>
                  <p className="font-medium">Starting from ₹4,999</p>
                </>
              )}
            </div>
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
