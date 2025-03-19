import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team was a game-changer for our business. They delivered beyond our expectations.",
    author: "Alex Thompson",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The attention to detail and creative solutions provided were exceptional. Highly recommended!",
    author: "Maria Garcia",
    company: "Creative Studios"
  },
  {
    quote: "Our online presence has improved significantly since partnering with them. Amazing results!",
    author: "David Chen",
    company: "Global Solutions Ltd."
  }
];

export function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="mb-4 text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <cite className="not-italic font-semibold">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </footer>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
