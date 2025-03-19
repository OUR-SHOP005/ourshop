import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Services Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive range of digital services to help your
              business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description:
      "Custom web solutions that are scalable, secure, and optimized for performance.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development & Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
      "App Maintenance & Support",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging digital experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
];

const process = [
  {
    title: "Discovery",
    description: "Understanding your needs and project requirements",
  },
  {
    title: "Planning",
    description: "Creating a detailed roadmap for success",
  },
  {
    title: "Development",
    description: "Building your solution with precision",
  },
  {
    title: "Launch",
    description: "Deploying and ensuring everything runs smoothly",
  },
];
