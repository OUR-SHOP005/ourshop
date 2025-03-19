import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We help businesses create impactful digital experiences through innovative design
            and cutting-edge technology solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
