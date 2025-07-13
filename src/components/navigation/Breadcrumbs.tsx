import { ChevronRight, Home } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/portfolio": "Portfolio", 
  "/about": "About",
  "/blog": "Blog",
  "/contact": "Contact",
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4">
      <NavLink
        to="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
        <span className="ml-1">Home</span>
      </NavLink>

      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNames[routeTo] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

        return (
          <div key={routeTo} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            {isLast ? (
              <span className="text-foreground font-medium">{displayName}</span>
            ) : (
              <NavLink
                to={routeTo}
                className="hover:text-foreground transition-colors"
              >
                {displayName}
              </NavLink>
            )}
          </div>
        );
      })}
    </nav>
  );
}