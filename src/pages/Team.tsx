import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech industry",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      bio: "Tech innovator passionate about scalable solutions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "Head of Design",
      bio: "Award-winning designer creating beautiful experiences",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Chen",
      role: "VP of Marketing",
      bio: "Growth strategist driving business success",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      bio: "Full-stack expert building robust applications",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Lisa Anderson",
      role: "Head of Operations",
      bio: "Process optimizer ensuring seamless delivery",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Team" description="Meet Our Team" />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Meet Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Talented individuals united by a passion for innovation and
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-2 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our
              passion for innovation. If you're ready to make an impact, we'd
              love to hear from you.
            </p>
            <a
              href="mailto:careers@companyname.com"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-semibold"
            >
              View Open Positions
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
