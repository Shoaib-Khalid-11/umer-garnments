import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";
import { SEO } from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative solutions that drive sustainable growth and success.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in transformative business solutions by 2030.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, never compromising on quality.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building lasting partnerships with our clients.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Company Founded" },
    { year: "2016", event: "Reached 100 Clients" },
    { year: "2019", event: "Expanded Internationally" },
    { year: "2022", event: "500+ Projects Delivered" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About Us"
        description="Learn more about our company and our mission."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CompanyName
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              We're on a mission to transform businesses through innovation,
              expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2014, CompanyName began with a simple vision: to help
                businesses thrive in the digital age. What started as a small
                team of passionate professionals has grown into a global company
                serving clients across multiple continents.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the years, we've evolved, adapted, and innovated, but our
                core values remain unchanged. We believe in putting our clients
                first, delivering exceptional quality, and building lasting
                relationships.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have helped over 500 companies transform
                their operations, reach new markets, and achieve unprecedented
                growth.
              </p>
            </div>
            <div>
              <img
                src={officeInterior}
                alt="Our office"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth story
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary" />
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <Card className="inline-block shadow-soft hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {milestone.event}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary z-10 shadow-glow" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
