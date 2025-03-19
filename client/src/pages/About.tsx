import { TEAM_MEMBERS } from "@/lib/constants";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container py-24">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-24"
      >
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're a team of passionate designers and developers committed to creating
          exceptional digital experiences.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower businesses with innovative digital solutions that drive
            growth and create lasting impact. We believe in combining creativity
            with technology to deliver exceptional results for our clients.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the leading digital partner for businesses worldwide, known for
            our commitment to excellence, innovation, and customer success. We
            strive to push the boundaries of what's possible in the digital realm.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
