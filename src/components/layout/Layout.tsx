import { ReactNode } from "react";
import { Header } from "@/components/navigation/Header";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export function Layout({ children, showBreadcrumbs = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {showBreadcrumbs && (
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
      )}
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}