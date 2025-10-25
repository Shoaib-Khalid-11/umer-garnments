import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppIcon from "./AppIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ubaid Garments
            </h3>
            <p className="text-sm text-muted-foreground">
              Building innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Cf6AxRkFg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <AppIcon icon={"fe:facebook"} fontSize={24} />
              </a>
              <a
                href="https://t.me/hamiprince750"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <AppIcon icon={"ic:sharp-telegram"} fontSize={24} />
              </a>
              <a
                href="https://wa.me/qr/JTA3JO6JDSUUN1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <AppIcon icon={"mdi:whatsapp"} fontSize={24} />
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="text-sm"
              />
              <Button variant="default" size="sm">
                <AppIcon icon={"fluent:mail-28-regular"} fontSize={24} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
