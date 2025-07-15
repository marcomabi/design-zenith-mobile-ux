import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Link } from "react-router-dom";

const CommercialRoofing = () => {
  const serviceData = {
    name: "Commercial Roofing Services in McKinney, TX",
    description: "Professional commercial roofing services for businesses in McKinney, Dallas, and Fort Worth. Installation, repair, and maintenance for all commercial roof types.",
    url: "https://goodworkroofing.com/services/commercial-roofing"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://goodworkroofing.com" },
    { name: "Services", url: "https://goodworkroofing.com/services" },
    { name: "Commercial Roofing", url: "https://goodworkroofing.com/services/commercial-roofing" }
  ];

  const services = [
    {
      title: "TPO Roofing",
      description: "Energy-efficient single-ply membrane roofing for commercial buildings.",
      features: ["Energy Efficient", "Heat-Welded Seams", "Chemical Resistant", "Long Lasting"]
    },
    {
      title: "EPDM Roofing", 
      description: "Durable rubber membrane roofing with excellent weather resistance.",
      features: ["Weather Resistant", "Flexible", "Cost Effective", "Easy Maintenance"]
    },
    {
      title: "Modified Bitumen",
      description: "Multi-layer roofing system providing superior protection and durability.",
      features: ["Multi-Layer Protection", "Self-Adhering", "Torch Applied", "Granulated Surface"]
    },
    {
      title: "Metal Roofing",
      description: "Standing seam and corrugated metal systems for industrial applications.",
      features: ["Long Lifespan", "Fire Resistant", "Energy Efficient", "Low Maintenance"]
    }
  ];

  const industries = [
    "Office Buildings",
    "Retail Centers", 
    "Warehouses",
    "Manufacturing Facilities",
    "Schools & Universities",
    "Healthcare Facilities",
    "Multi-Family Housing",
    "Industrial Complexes"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Commercial Roofing Services McKinney TX - Business Roof Installation & Repair"
        description="Professional commercial roofing in McKinney, TX. TPO, EPDM, metal roofing for businesses. Installation, repair, maintenance. Licensed, insured. Call (214) 836-4511"
        keywords="commercial roofing McKinney TX, business roof repair Dallas, commercial roof installation Fort Worth, TPO roofing McKinney, EPDM roofing Dallas, metal roofing commercial"
        canonical="https://goodworkroofing.com/services/commercial-roofing"
      />
      <ServiceSchema service={serviceData} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-secondary-foreground/20">
              <Building className="mr-2 h-4 w-4" />
              Commercial Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Commercial Roofing in McKinney, TX
            </h1>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Protect your business investment with expert commercial roofing solutions. 
              Serving businesses throughout McKinney, Dallas, and Fort Worth areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Get Commercial Quote
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

      {/* Commercial Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Roofing Systems</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced roofing solutions designed for commercial and industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="h-4 w-4 text-primary" />
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

      {/* Industries Served */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Commercial Properties</h3>
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Commercial Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Minimal Business Disruption</h4>
                      <p className="text-sm text-muted-foreground">Efficient scheduling to minimize impact on operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Preventive Maintenance</h4>
                      <p className="text-sm text-muted-foreground">Regular maintenance programs to extend roof life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Energy Efficiency</h4>
                      <p className="text-sm text-muted-foreground">Cool roof options to reduce energy costs</p>
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
          <h2 className="text-3xl font-bold mb-4">Protect Your Business Investment</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for a comprehensive commercial roofing assessment
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
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialRoofing;