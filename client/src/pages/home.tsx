import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We create exceptional digital experiences that drive business growth
            through innovative solutions and cutting-edge technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-lg mb-4">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Custom web solutions tailored to your business needs",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "User-Friendly UI", "Offline Support"],
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies",
    features: ["Social Media", "Content Strategy", "Analytics"],
  },
];

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They delivered beyond our expectations.",
    name: "John Smith",
    title: "CEO, Tech Corp",
  },
  {
    quote: "The attention to detail and technical expertise is unmatched.",
    name: "Sarah Johnson",
    title: "Marketing Director, Brand Co",
  },
  {
    quote: "They transformed our online presence and helped grow our business.",
    name: "Mike Williams",
    title: "Founder, Startup Inc",
  },
];
