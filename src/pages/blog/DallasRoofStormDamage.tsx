import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
// Structured data will be added directly to the component
import { Calendar, User, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DallasRoofStormDamage = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Dallas Roof Storm Damage: What Every Homeowner Should Know",
    "author": {
      "@type": "Organization",
      "name": "GoodWorkRoofing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GoodWorkRoofing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goodworkroofing.com/logo.jpg"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "description": "Dallas experiences severe weather year-round. Learn how to identify storm damage, file insurance claims, and protect your home with proper roofing maintenance.",
    "image": "/lovable-uploads/7a162d81-382c-4858-b4c4-c369801ef0e4.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://goodworkroofing.com/blog/dallas-roof-storm-damage-guide"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Complete Guide to Dallas Roof Storm Damage | GoodWorkRoofing"
        description="Dallas experiences severe weather year-round. Learn how to identify storm damage, file insurance claims, and protect your home with proper roofing maintenance."
        keywords="Dallas roof storm damage, Texas storm damage repair, roof hail damage, McKinney roofing storm, insurance claims roofing"
        canonical="https://goodworkroofing.com/blog/dallas-roof-storm-damage-guide"
      />
      <script type="application/ld+json">
        {JSON.stringify(articleData)}
      </script>
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Complete Guide to Dallas Roof Storm Damage: What Every Homeowner Should Know
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>GoodWorkRoofing Team</span>
              </div>
              <span>8 min read</span>
            </div>
          </div>
          
          <img 
            src="/lovable-uploads/7a162d81-382c-4858-b4c4-c369801ef0e4.png"
            alt="Storm damaged roof in Dallas showing missing shingles and debris"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Dallas-Fort Worth experiences some of the most severe weather in the United States, with hailstorms, high winds, and severe thunderstorms causing millions of dollars in roof damage annually. As a homeowner in the DFW area, understanding how to identify, document, and address storm damage is crucial for protecting your most valuable investment.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Common Types of Storm Damage in Dallas</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Hail Damage</h3>
          <p className="mb-4">
            Dallas experiences frequent hailstorms, particularly during spring and early summer. Hail damage often appears as:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Granule loss on asphalt shingles, creating dark spots or exposed mat</li>
            <li>Cracked or split shingles</li>
            <li>Dented metal flashing, gutters, or vents</li>
            <li>Damaged skylights or solar panels</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Wind Damage</h3>
          <p className="mb-4">
            High winds, often exceeding 70 mph during severe storms, can cause:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Lifted, curled, or missing shingles</li>
            <li>Exposed nail heads</li>
            <li>Damaged fascia boards and soffits</li>
            <li>Fallen tree branches or debris impact</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">How to Inspect Your Roof After a Storm</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="font-semibold text-yellow-800 mb-2">Safety First:</p>
            <p className="text-yellow-700">
              Never climb on your roof immediately after a storm. Wait for conditions to be completely safe and consider hiring a professional inspector.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Ground-Level Inspection</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Walk around your property and look for debris, missing shingles, or damaged gutters</li>
            <li>Check for water stains on ceilings or walls inside your home</li>
            <li>Examine windows and doors for water infiltration</li>
            <li>Look for damaged or missing flashing around chimneys and vents</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Inspection</h3>
          <p className="mb-4">
            A professional roofing contractor should conduct a thorough inspection that includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Detailed photographic documentation of all damage</li>
            <li>Assessment of structural integrity</li>
            <li>Evaluation of ventilation systems</li>
            <li>Inspection of underlayment and decking</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Filing an Insurance Claim</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Steps to Take Immediately</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Document Everything:</strong> Take photos and videos of all visible damage</li>
            <li><strong>Prevent Further Damage:</strong> Cover exposed areas with tarps if safe to do so</li>
            <li><strong>Contact Your Insurance Company:</strong> Report the claim as soon as possible</li>
            <li><strong>Get a Professional Assessment:</strong> Have a licensed roofing contractor inspect the damage</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Working with Insurance Adjusters</h3>
          <p className="mb-4">
            When the insurance adjuster arrives:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Be present during the inspection</li>
            <li>Provide all documentation you've gathered</li>
            <li>Ask questions about their assessment</li>
            <li>Get a copy of their report</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Choosing the Right Roofing Contractor</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <p className="font-semibold text-red-800 mb-2">Beware of Storm Chasers:</p>
            <p className="text-red-700">
              After major storms, unscrupulous contractors may go door-to-door. Always verify licensing, insurance, and local references before hiring anyone.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">What to Look For</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Texas state licensing and local permits</li>
            <li>Proper insurance (liability and workers' compensation)</li>
            <li>Local business address and established reputation</li>
            <li>Detailed written estimates</li>
            <li>References from recent customers</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Prevention and Maintenance</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Regular Maintenance Schedule</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Spring:</strong> Clean gutters, inspect for winter damage</li>
            <li><strong>Summer:</strong> Check for heat damage, ensure proper ventilation</li>
            <li><strong>Fall:</strong> Remove debris, inspect flashing and seals</li>
            <li><strong>Winter:</strong> Monitor for ice dam formation</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Upgrading for Storm Resistance</h3>
          <p className="mb-4">
            Consider these upgrades to improve your roof's storm resistance:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Impact-resistant shingles (Class 4 rating)</li>
            <li>Reinforced roof decking</li>
            <li>Hurricane straps and clips</li>
            <li>Improved flashing systems</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">When to Call for Emergency Repairs</h2>
          
          <p className="mb-4">
            Contact a roofing professional immediately if you notice:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Active leaks or water intrusion</li>
            <li>Sagging or structural damage</li>
            <li>Large areas of missing shingles</li>
            <li>Exposed roof decking</li>
            <li>Damaged chimneys or other roof penetrations</li>
          </ul>

          <div className="bg-primary/10 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Storm Damage Assessment?</h3>
            <p className="mb-6">
              GoodWorkRoofing provides free storm damage inspections throughout the Dallas-Fort Worth area. Our experienced team can help you document damage, work with your insurance company, and restore your roof to protect your home.
            </p>
            <Button size="lg" className="mr-4">
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 836-4511
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DallasRoofStormDamage;