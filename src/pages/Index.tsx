import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <Layout showBreadcrumbs={false}>
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quality Roofing for Your Biggest Asset
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90">
              Professional roofing services in Dallas-Fort Worth with 20+ years of experience. 
              Protecting homes and businesses with superior craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8 py-4"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                Fully licensed, bonded, and insured for your peace of mind. 
                All work guaranteed with comprehensive warranties.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Skilled professionals with decades of combined experience in 
                residential and commercial roofing projects.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
              <p className="text-muted-foreground">
                Only the highest quality materials from trusted manufacturers. 
                Built to withstand Texas weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
