import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://ui-avatars.com/api/?name=John+Smith",
    bio: "15+ years of experience in digital transformation."
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson",
    bio: "Award-winning designer with a passion for user experience."
  },
  {
    name: "Mike Wilson",
    role: "Technical Lead",
    image: "https://ui-avatars.com/api/?name=Mike+Wilson",
    bio: "Full-stack developer specialized in modern web technologies."
  },
  {
    name: "Emily Brown",
    role: "Marketing Manager",
    image: "https://ui-avatars.com/api/?name=Emily+Brown",
    bio: "Digital marketing expert with focus on growth strategies."
  }
];

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
