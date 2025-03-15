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
          <a 
            href={`https://instagram.com/${member.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 mt-4 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @{member.instagram}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
