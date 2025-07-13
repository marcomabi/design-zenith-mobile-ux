import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Wrench, Shield, Eye, Droplets, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Installation", "Roof Replacement"],
      details: "Protect your home with our comprehensive residential roofing services. We specialize in installations, repairs, and maintenance for all types of residential properties."
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Professional commercial roof systems",
      features: ["TPO Roofing", "EPDM Systems", "Modified Bitumen", "Metal Roofing"],
      details: "Reliable commercial roofing solutions designed to protect your business. We work with minimal disruption to your operations."
    },
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 emergency roofing services",
      features: ["Storm Damage", "Leak Repairs", "Urgent Fixes", "Insurance Claims"],
      details: "When disaster strikes, we're here to help. Our emergency repair team is available around the clock to address urgent roofing issues."
    },
    {
      icon: Eye,
      title: "Roof Inspections",
      description: "Comprehensive roof assessments",
      features: ["Detailed Reports", "Drone Surveys", "Maintenance Plans", "Problem Identification"],
      details: "Regular inspections help prevent costly repairs. Our thorough assessments identify potential issues before they become major problems."
    },
    {
      icon: Droplets,
      title: "Gutter Services",
      description: "Complete gutter solutions",
      features: ["Gutter Installation", "Cleaning Services", "Repair & Maintenance", "Leaf Guards"],
      details: "Protect your property with properly functioning gutters. We provide complete gutter services from installation to maintenance."
    },
    {
      icon: Shield,
      title: "Insurance Claims",
      description: "Insurance claim assistance",
      features: ["Claim Documentation", "Insurance Coordination", "Damage Assessment", "Repair Estimates"],
      details: "We work directly with insurance companies to streamline the claims process and ensure you get the coverage you deserve."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive roofing solutions backed by 20+ years of experience. 
            From new installations to emergency repairs, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {service.details}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Roofing Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Call (214) 555-0123
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;