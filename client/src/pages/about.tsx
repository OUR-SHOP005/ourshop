import { TeamGrid } from "@/components/sections/team-grid";

export default function About() {
  return (
    <div className="min-h-screen py-16 container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground">
          We're a team of passionate digital experts committed to delivering
          exceptional results for our clients. With years of experience and a
          drive for innovation, we help businesses thrive in the digital age.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <TeamGrid />
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-muted-foreground mb-6">
          Founded in 2015, we started with a simple mission: to help businesses
          succeed in the digital world. Since then, we've grown into a full-service
          digital agency, working with clients across various industries.
        </p>
        <p className="text-muted-foreground">
          Our approach combines creativity with technical expertise, allowing us
          to deliver solutions that not only look great but also drive real
          business results.
        </p>
      </section>
    </div>
  );
}
