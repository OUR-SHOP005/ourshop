import { TEAM_MEMBERS } from "@/lib/constants";
import TeamMember from "@/components/shared/TeamMember";

export default function About() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">About Our Shop</h1>
        <p className="text-xl text-muted-foreground">
          We're a team of passionate designers and developers dedicated to
          creating exceptional digital experiences that drive business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {TEAM_MEMBERS.map((member) => (
          <TeamMember key={member.name} member={member} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower businesses with innovative digital solutions that enhance
            their online presence and drive meaningful results. We combine
            creativity with technical expertise to deliver websites that not only
            look stunning but also perform exceptionally well.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the leading web design agency known for creating transformative
            digital experiences that set new standards in the industry. We strive
            to push the boundaries of what's possible in web design while
            maintaining a focus on user experience and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}