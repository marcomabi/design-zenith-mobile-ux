import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

const Contact = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://goodworkroofing.com" },
    { name: "Contact", url: "https://goodworkroofing.com/contact" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Contact Good Work Roofing - McKinney TX Roofing Contractor"
        description="Contact Good Work Roofing in McKinney, TX for free roofing estimates. Call (214) 836-4511 or visit us at 470 Adriatic Pkwy, McKinney, TX 75070. Licensed, insured roofing contractor."
        keywords="contact roofing contractor McKinney TX, roofing estimates Dallas, Good Work Roofing phone number, roofing company McKinney address"
        canonical="https://goodworkroofing.com/contact"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Good Work Roofing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your roofing project in McKinney or Dallas-Fort Worth? Get in touch for a free consultation and estimate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get a Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" placeholder="123 Main St, Dallas, TX" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select 
                      id="service" 
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Roofing</option>
                      <option value="commercial">Commercial Roofing</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="inspection">Roof Inspection</option>
                      <option value="gutters">Gutter Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your roofing project..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(214) 836-4511</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">Goodworkroofing@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        470 Adriatic Pkwy<br />
                        McKinney, TX 75070
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Emergency calls only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Need immediate assistance? We offer 24/7 emergency roofing services for urgent situations.
                  </p>
                  <Button variant="destructive" size="lg" className="w-full">
                    Call Emergency Line: (214) 836-4511
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Visit Our McKinney Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.7567!2d-96.6397!3d33.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c39c8b8f8a8a1%3A0x1234567890abcdef!2s470%20Adriatic%20Pkwy%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Good Work Roofing Location - 470 Adriatic Pkwy, McKinney, TX 75070"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-muted-foreground">
                    <strong>Good Work Roofing</strong><br />
                    470 Adriatic Pkwy, McKinney, TX 75070<br />
                    Serving McKinney, Dallas, Fort Worth, and surrounding areas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;