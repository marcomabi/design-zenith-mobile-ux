import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">RoofMaster Pro</span>
            </div>
            <p className="text-secondary-foreground/80">
              Professional roofing services in Dallas-Fort Worth with 20+ years of experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/portfolio" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Residential Roofing</li>
              <li>Commercial Roofing</li>
              <li>Emergency Repairs</li>
              <li>Roof Inspections</li>
              <li>Gutter Services</li>
              <li>Insurance Claims</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">(214) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">info@roofmasterpro.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  123 Main Street<br />
                  Dallas, TX 75201
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 RoofMaster Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}