import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/a9d5e1e1-9b6b-498e-87cf-9ebaed1a3ba6.png" 
              alt="GoodWorkRoofing Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              GoodWorkRoofing
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Phone CTA - Always visible */}
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">(214) 836-4511</span>
          </Button>

          {/* Get Quote CTA - Desktop only */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Get Quote
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </header>
  );
}