import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Link } from "react-router-dom";

const ResidentialRoofing = () => {
  const serviceData = {
    name: "Residential Roofing Services in McKinney, TX",
    description: "Expert residential roofing services including installation, repair, and replacement for homes in McKinney, Dallas, and Fort Worth areas.",
    url: "https://goodworkroofing.com/services/residential-roofing"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://goodworkroofing.com" },
    { name: "Services", url: "https://goodworkroofing.com/services" },
    { name: "Residential Roofing", url: "https://goodworkroofing.com/services/residential-roofing" }
  ];

  const services = [
    {
      title: "Roof Installation",
      description: "Complete new roof installation for new construction and full replacements.",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Premium Materials"]
    },
    {
      title: "Roof Repair",
      description: "Expert repair services for leaks, storm damage, and wear-related issues.",
      features: ["Leak Repair", "Shingle Replacement", "Flashing Repair", "Emergency Patches"]
    },
    {
      title: "Roof Replacement",
      description: "Full roof replacement when repairs are no longer cost-effective.",
      features: ["Complete Tearoff", "New Underlayment", "Quality Materials", "Warranty Included"]
    },
    {
      title: "Roof Maintenance",
      description: "Regular maintenance to extend your roof's lifespan and prevent issues.",
      features: ["Annual Inspections", "Gutter Cleaning", "Minor Repairs", "Preventive Care"]
    }
  ];

  const materials = [
    "Asphalt Shingles - Most popular and cost-effective option",
    "Architectural Shingles - Enhanced durability and appearance", 
    "Metal Roofing - Long-lasting and energy efficient",
    "Clay Tiles - Traditional and weather-resistant",
    "Slate - Premium natural stone option"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Residential Roofing Services McKinney TX - Home Roof Installation & Repair"
        description="Expert residential roofing in McKinney, TX. New installation, repair, replacement for homes. Asphalt shingles, metal roofing, tile. Licensed, insured. Call (214) 836-4511"
        keywords="residential roofing McKinney TX, home roof repair Dallas, residential roof installation Fort Worth, asphalt shingles McKinney, metal roofing Dallas, roof replacement McKinney"
        canonical="https://goodworkroofing.com/services/residential-roofing"
      />
      <ServiceSchema service={serviceData} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-secondary-foreground/20">
              <Home className="mr-2 h-4 w-4" />
              Residential Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Residential Roofing Services in McKinney, TX
            </h1>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Protect your home with professional roofing installation, repair, and replacement services. 
              Serving McKinney, Dallas, and Fort Worth homeowners with quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-secondary-foreground/20">
                <Phone className="mr-2 h-5 w-5" />
                Call (214) 836-4511
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Residential Roofing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From minor repairs to complete installations, we handle all your home roofing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Home className="h-4 w-4 text-primary" />
                    </div>
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Quality Roofing Materials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Material Options</h3>
                <ul className="space-y-3">
                  {materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Why Choose Good Work Roofing?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Licensed & Insured</h4>
                      <p className="text-sm text-muted-foreground">Full licensing and insurance for your peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">15+ Years Experience</h4>
                      <p className="text-sm text-muted-foreground">Extensive experience in McKinney and Dallas-Fort Worth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Warranty Protected</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive warranties on all materials and labor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your McKinney Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free residential roofing estimate today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 836-4511
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4"
              asChild
            >
              <Link to="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentialRoofing;