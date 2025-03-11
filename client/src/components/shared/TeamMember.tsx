import { Card, CardContent } from "@/components/ui/card";
import { type TEAM_MEMBERS } from "@/lib/constants";

interface TeamMemberProps {
  member: (typeof TEAM_MEMBERS)[0];
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-primary font-medium mt-1">{member.role}</p>
          <p className="text-muted-foreground mt-4">{member.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
