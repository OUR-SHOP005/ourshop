import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of passionate professionals dedicated to creating
              exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    description: "10+ years of experience in digital transformation",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Sarah Chen",
    role: "Technical Director",
    description: "Expert in modern web technologies and architecture",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Michael Roberts",
    role: "Creative Director",
    description: "Award-winning designer with a passion for UX",
    image: "https://i.pravatar.cc/300?img=3",
  },
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in everything we do, from code to customer service.",
  },
  {
    title: "Collaboration",
    description: "We believe in working closely with our clients to achieve the best possible outcomes.",
  },
];
