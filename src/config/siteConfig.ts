// src/config/siteConfig.ts
export interface SiteConfig {
  company: {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    logo: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  pages: {
    home: {
      title: string;
      subtitle: string;
      heroDescription: string;
    };
    about: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
    blog: {
      title: string;
      description: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "Ubaid Garments",
    description:
      "We build innovative digital solutions that drive business growth and success.",
    email: "hamzabhutta0007501@gmail.com",
    phone: "+92 (321) 5511613",
    address: "Ali villas Okara, Pakistan",
    logo: "/logo.png",
  },
  social: {
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    github: "https://github.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
  },
  seo: {
    title: "Your Company - Innovative Digital Solutions",
    description:
      "We provide cutting-edge digital solutions to help businesses grow and succeed in the modern world.",
    keywords: ["company", "digital solutions", "web development", "consulting"],
  },
  pages: {
    home: {
      title: "Welcome to Your Company",
      subtitle: "Innovative Digital Solutions",
      heroDescription:
        "We build cutting-edge digital experiences that drive growth and transform businesses for the future.",
    },
    about: {
      title: "About Our Company",
      description:
        "Learn about our mission, values, and the team behind our success.",
    },
    services: {
      title: "Our Services",
      description:
        "Discover how we can help your business grow with our comprehensive services.",
    },
    blog: {
      title: "Our Blog",
      description:
        "Stay updated with the latest insights, trends, and news from our industry experts.",
    },
  },
};
