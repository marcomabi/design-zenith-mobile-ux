import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

export function MobileMenu({ isOpen, onClose, navigationItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-sm bg-background border-l border-border shadow-xl">
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center justify-between w-full p-4 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                <span className="text-lg font-medium">{item.name}</span>
                <ArrowRight className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </NavLink>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="border-t border-border p-6 space-y-4">
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={onClose}
            >
              <Phone className="h-5 w-5 mr-3" />
              Call (214) 555-0123
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={onClose}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}