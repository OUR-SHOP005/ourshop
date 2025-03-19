import { ServicesGrid } from "@/components/sections/services-grid";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen py-16 container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          We offer comprehensive digital solutions tailored to your needs.
          From web development to digital marketing, we've got you covered.
        </p>
      </div>

      <ServicesGrid />

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-semibold text-center">Our Approach</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Custom solutions tailored to your needs",
                "Experienced team of professionals",
                "Proven track record of success",
                "Cutting-edge technologies",
                "Transparent communication",
                "Ongoing support and maintenance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
