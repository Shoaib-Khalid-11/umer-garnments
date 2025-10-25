import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  BarChart,
  Cloud,
  Smartphone,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "React & TypeScript",
        "Responsive Design",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps that engage users and drive business growth.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "App Store Deployment",
        "Push Notifications",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions that grow with your business needs and ensure maximum uptime.",
      features: [
        "AWS & Azure",
        "Auto-Scaling",
        "Load Balancing",
        "Disaster Recovery",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that captivate users and enhance engagement.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that increase visibility and drive conversions.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media",
        "Analytics",
      ],
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security measures to protect your data and ensure compliance.",
      features: [
        "Security Audits",
        "GDPR Compliance",
        "Penetration Testing",
        "24/7 Monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Services"
        description="Learn more about our company and our mission."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding your needs and goals",
              },
              {
                number: "02",
                title: "Strategy",
                desc: "Planning the optimal solution",
              },
              {
                number: "03",
                title: "Execution",
                desc: "Building with precision",
              },
              { number: "04", title: "Launch", desc: "Delivering results" },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Ready to Start Your Project?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals
                with our expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
