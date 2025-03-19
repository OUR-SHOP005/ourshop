import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-20">
      {/* Portfolio Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest projects and see how we've helped businesses
              achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            {["web", "mobile", "design"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projects
                    .filter((p) => p.category === category)
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced features",
    category: "web",
    image: "https://picsum.photos/seed/store/800/600",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Fitness App",
    description: "Mobile app for tracking workouts and nutrition",
    category: "mobile",
    image: "https://picsum.photos/seed/fitness/800/600",
    technologies: ["React Native", "Firebase"],
  },
  {
    title: "Corporate Website",
    description: "Modern website design for a finance company",
    category: "design",
    image: "https://picsum.photos/seed/corporate/800/600",
    technologies: ["Figma", "Adobe XD"],
  },
  {
    title: "Task Management",
    description: "Collaborative task management platform",
    category: "web",
    image: "https://picsum.photos/seed/tasks/800/600",
    technologies: ["Vue.js", "Express"],
  },
  {
    title: "Food Delivery App",
    description: "On-demand food delivery application",
    category: "mobile",
    image: "https://picsum.photos/seed/food/800/600",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Brand Identity",
    description: "Complete brand identity design",
    category: "design",
    image: "https://picsum.photos/seed/brand/800/600",
    technologies: ["Illustrator", "Photoshop"],
  },
];
