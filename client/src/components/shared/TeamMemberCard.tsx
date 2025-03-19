import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
  };
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={member.imageUrl} alt={member.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm text-primary">{member.role}</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
