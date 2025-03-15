import { Card, CardContent } from "@/components/ui/card";
import { type TEAM_MEMBERS } from "@/lib/constants";

interface TeamMemberProps {
  member: (typeof TEAM_MEMBERS)[0];
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{member.name}</h3>
          <p className="text-primary font-medium mt-2 text-lg">{member.role}</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
