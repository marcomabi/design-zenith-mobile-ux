import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gallery } from "@/components/ui/gallery";
import { ArrowRight, Shield, Users, Award, Phone, Star, Home, Building, Wrench, MapPin, Mail } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema } from "@/components/seo/StructuredData";
import { Link } from "react-router-dom";

const Index = () => {
  const galleryImages = [
    "/lovable-uploads/7a162d81-382c-4858-b4c4-c369801ef0e4.png",
    "/lovable-uploads/08d99cfd-8b5f-45e5-ab86-377850e60f49.png",
    "/lovable-uploads/b166675c-2c5e-48de-b94f-4ce69390932f.png",
    "/lovable-uploads/afe3d468-aaf3-4ed0-abae-3d4755f770ba.png",
    "/lovable-uploads/b972918b-08e7-435a-aef7-d676de4f9406.png",
    "/lovable-uploads/1c57f797-54cb-492f-bbe3-e3a1bb4e0732.png"
  ];

  const businessData = {
    name: "GoodWorkRoofing",
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
        title="GoodWorkRoofing - Professional Roofing Services in McKinney, Dallas-Fort Worth TX"
        description="Expert roofing contractor in McKinney, Dallas-Fort Worth area. Residential & commercial roof repair, replacement, installation. Licensed, insured, 24/7 emergency service. Call (214) 836-4511"
        keywords="roofing contractor McKinney TX, roof repair Dallas, roofing services Fort Worth, residential roofing, commercial roofing, emergency roof repair, Dallas roofing company"
        canonical="https://goodworkroofing.com"
      />
      <LocalBusinessSchema data={businessData} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Transition */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-fade-in"
            style={{ 
              backgroundImage: `url('/lovable-uploads/7a162d81-382c-4858-b4c4-c369801ef0e4.png')`,
              animationDelay: '0s',
              animationDuration: '6s'
            }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center animate-fade-in opacity-0"
            style={{ 
              backgroundImage: `url('/lovable-uploads/08d99cfd-8b5f-45e5-ab86-377850e60f49.png')`,
              animationDelay: '3s',
              animationDuration: '6s',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Taking care of your most valuable asset
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Professional roofing solutions for homes and businesses in McKinney and the Dallas-Fort Worth area. Licensed, insured, and committed to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Emergency Service
            </Button>
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

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality craftsmanship and attention to detail in our recent roofing projects across Dallas-Fort Worth
            </p>
          </div>
          <Gallery images={galleryImages} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>470 Adriatic Pkwy, McKinney, TX 75070</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(214) 836-4511</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Goodworkroofing@gmail.com</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-6">
                Serving McKinney, Dallas, Fort Worth, and the entire Dallas-Fort Worth metropolitan area with professional roofing services.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.8234567890123!2d-96.6397!3d33.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c5d6f7c8b9a%3A0x123456789abcdef0!2s470%20Adriatic%20Pkwy%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GoodWorkRoofing Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact GoodWorkRoofing today for a free estimate on your roofing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 836-4511
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
