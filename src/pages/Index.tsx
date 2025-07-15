import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Award, Phone, Star, Home, Building, Wrench } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema } from "@/components/seo/StructuredData";
import { Link } from "react-router-dom";

const Index = () => {
  const businessData = {
    name: "Good Work Roofing",
    description: "Professional roofing contractor serving McKinney, Dallas, and Fort Worth areas with expert residential and commercial roofing services including repair, replacement, and installation.",
    address: {
      streetAddress: "470 Adriatic Pkwy",
      addressLocality: "McKinney",
      addressRegion: "TX", 
      postalCode: "75070",
      addressCountry: "US"
    },
    telephone: "+1-214-836-4511",
    email: "Goodworkroofing@gmail.com",
    url: "https://goodworkroofing.com",
    geo: {
      latitude: "33.1972",
      longitude: "-96.6397"
    },
    openingHours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    priceRange: "$$",
    image: "https://goodworkroofing.com/logo.jpg",
    services: [
      "Residential Roofing",
      "Commercial Roofing",
      "Roof Repair", 
      "Roof Replacement",
      "Roof Installation",
      "Emergency Roofing",
      "Storm Damage Repair",
      "Roof Inspection"
    ]
  };

  return (
    <Layout showBreadcrumbs={false}>
      <SEOHead 
        title="Good Work Roofing - Professional Roofing Services in McKinney, TX"
        description="Expert roofing contractor in McKinney, TX serving Dallas-Fort Worth. Residential & commercial roof repair, replacement, installation. Licensed, insured, 24/7 emergency service. Call (214) 836-4511"
        keywords="roofing contractor McKinney TX, roof repair Dallas, roofing services Fort Worth, residential roofing McKinney, commercial roofing Dallas, emergency roof repair Texas"
        canonical="https://goodworkroofing.com"
      />
      <LocalBusinessSchema data={businessData} />
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Good Work Roofing - McKinney's Trusted Roofing Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90">
              Professional roofing contractor serving McKinney, Dallas, and Fort Worth with 15+ years of experience. 
              Protecting homes and businesses with superior craftsmanship and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
                asChild
              >
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8 py-4"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
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
                All work guaranteed with comprehensive warranties. Serving McKinney and surrounding areas.
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

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Residential Roofing</CardTitle>
                <CardDescription>
                  New installations, repairs, and maintenance for homes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Asphalt shingles, metal roofing, tile, and specialty materials designed to protect your home.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services/residential-roofing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Roofing</CardTitle>
                <CardDescription>
                  Industrial and commercial roof systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  TPO, EPDM, modified bitumen, and metal roofing systems for businesses and industrial facilities.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services/commercial-roofing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Emergency Repairs</CardTitle>
                <CardDescription>
                  24/7 emergency roofing services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Storm damage, leaks, and urgent repairs. Available around the clock for emergencies.
                </p>
                <Button variant="outline" size="sm">
                  Call Now <Phone className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent work on our roof replacement. Professional team, fair pricing, and completed on time. Highly recommend!"
                </p>
                <div className="font-semibold">- Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Plano, TX</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "They fixed our storm damage quickly and efficiently. Great communication throughout the insurance process."
                </p>
                <div className="font-semibold">- Mike Chen</div>
                <div className="text-sm text-muted-foreground">Dallas, TX</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding commercial roofing service. They handled our warehouse roof with minimal business disruption."
                </p>
                <div className="font-semibold">- Lisa Rodriguez</div>
                <div className="text-sm text-muted-foreground">Fort Worth, TX</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free estimate for your roofing project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
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
                Request Quote Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
