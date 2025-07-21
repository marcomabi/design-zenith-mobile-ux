import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { StructuredData } from "@/components/seo/StructuredData";
import { Calendar, User, ArrowLeft, FileText, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const McKinneyRoofingPermits = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "McKinney Roofing Permits: Everything You Need to Know Before Starting",
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
    "datePublished": "2024-01-05",
    "dateModified": "2024-01-05",
    "description": "Navigate McKinney's roofing permit requirements with ease. Learn about costs, timelines, and when permits are required for your roofing project.",
    "image": "/lovable-uploads/b166675c-2c5e-48de-b94f-4ce69390932f.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://goodworkroofing.com/blog/mckinney-roofing-permits-guide"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="McKinney Roofing Permits Guide: Requirements & Process | GoodWorkRoofing"
        description="Navigate McKinney's roofing permit requirements with ease. Learn about costs, timelines, and when permits are required for your roofing project."
        keywords="McKinney roofing permits, Texas roofing permits, McKinney building permits, roof replacement permits McKinney, roofing contractor McKinney"
        canonical="https://goodworkroofing.com/blog/mckinney-roofing-permits-guide"
      />
      <StructuredData data={articleData} />
      
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
              McKinney Roofing Permits: Everything You Need to Know Before Starting
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>GoodWorkRoofing Team</span>
              </div>
              <span>5 min read</span>
            </div>
          </div>
          
          <img 
            src="/lovable-uploads/b166675c-2c5e-48de-b94f-4ce69390932f.png"
            alt="McKinney city building permit office and roofing documentation"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Planning a roofing project in McKinney, Texas? Understanding the city's permit requirements is crucial for ensuring your project meets local building codes and avoids costly delays. This comprehensive guide covers everything McKinney homeowners need to know about roofing permits, from when they're required to the application process.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <p className="font-semibold text-yellow-800">Important Notice</p>
            </div>
            <p className="text-yellow-700">
              Working without required permits can result in fines, forced project removal, and complications when selling your home. Always verify permit requirements before starting any roofing work.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">When Are Roofing Permits Required in McKinney?</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Permits ARE Required For:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Complete roof replacement (any material)</li>
            <li>Structural repairs or modifications to roof framing</li>
            <li>Installing new skylights or roof penetrations</li>
            <li>Adding roof decks or roof-mounted equipment</li>
            <li>Changing roof material type (e.g., shingles to tile)</li>
            <li>Repairs covering more than 25% of roof area</li>
            <li>Any work affecting load-bearing structures</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Permits NOT Required For:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Minor repairs (under 25% of roof area)</li>
            <li>Replacing damaged shingles with same material</li>
            <li>Gutter installation or repair</li>
            <li>Cleaning or maintenance work</li>
            <li>Emergency tarping for storm damage</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="font-semibold text-blue-800 mb-2">When in Doubt:</p>
            <p className="text-blue-700">
              Contact McKinney's Building Inspection Department at (972) 547-7371 to verify if your specific project requires a permit.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">McKinney Permit Application Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 1</CardTitle>
                <CardDescription>Prepare Documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Gather required plans, specifications, and contractor information.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 2</CardTitle>
                <CardDescription>Submit & Pay</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Submit application with plans and pay required fees.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 3</CardTitle>
                <CardDescription>Review Process</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">City reviews plans for code compliance (3-5 business days).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 4</CardTitle>
                <CardDescription>Permit Issued</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Approved permit allows work to begin with scheduled inspections.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Required Documentation</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Completed Building Permit Application</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Property owner information</li>
                <li>Project description and scope</li>
                <li>Estimated project cost</li>
              </ul>
            </li>
            <li><strong>Roof Plan or Site Plan</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Scaled drawing showing roof layout</li>
                <li>Structural details if applicable</li>
                <li>Load calculations for heavy materials</li>
              </ul>
            </li>
            <li><strong>Contractor Information</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Texas state license number</li>
                <li>Proof of liability insurance</li>
                <li>Workers' compensation certificate</li>
              </ul>
            </li>
            <li><strong>Material Specifications</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Product data sheets</li>
                <li>Wind resistance ratings</li>
                <li>Fire resistance classifications</li>
              </ul>
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Permit Fees and Costs</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Project Type</th>
                  <th className="border border-gray-300 p-3 text-left">Base Fee</th>
                  <th className="border border-gray-300 p-3 text-left">Additional Costs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Roof Replacement (Residential)</td>
                  <td className="border border-gray-300 p-3">$75-150</td>
                  <td className="border border-gray-300 p-3">Based on square footage</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Structural Repairs</td>
                  <td className="border border-gray-300 p-3">$100-200</td>
                  <td className="border border-gray-300 p-3">Engineering review fees</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Commercial Roofing</td>
                  <td className="border border-gray-300 p-3">$200-500</td>
                  <td className="border border-gray-300 p-3">Plan review fees apply</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Re-inspection Fee</td>
                  <td className="border border-gray-300 p-3">$50</td>
                  <td className="border border-gray-300 p-3">Per failed inspection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            *Fees are subject to change. Contact McKinney Building Department for current rates.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Inspection Process</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Required Inspections</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Structural Inspection (if applicable)</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Before covering any structural work</li>
                <li>Verifies proper framing and fastening</li>
                <li>Must be scheduled 24 hours in advance</li>
              </ul>
            </li>
            <li><strong>Final Inspection</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>After all roofing work is complete</li>
                <li>Verifies code compliance and workmanship</li>
                <li>Required before project closure</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Scheduling Inspections</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Online:</strong> McKinney's citizen portal</li>
            <li><strong>Phone:</strong> (972) 547-7371</li>
            <li><strong>Timing:</strong> Schedule 24 hours in advance</li>
            <li><strong>Hours:</strong> Inspections typically 8:00 AM - 4:00 PM</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Common Permit Delays and How to Avoid Them</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Incomplete Applications</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Missing contractor license information</li>
            <li>Inadequate roof plans or specifications</li>
            <li>Unsigned application forms</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Code Compliance Issues</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Materials not meeting wind resistance requirements</li>
            <li>Improper ventilation specifications</li>
            <li>Missing fire resistance ratings</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">HOA Coordination</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Obtain HOA approval before city permit application</li>
            <li>Ensure material and color compliance</li>
            <li>Submit HOA approval letter with permit application</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Working with Licensed Contractors</h2>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
            <p className="font-semibold text-green-800 mb-2">Contractor Responsibility:</p>
            <p className="text-green-700">
              Most reputable roofing contractors will handle the permit application process for you, including all documentation and inspection scheduling.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">What Your Contractor Should Provide</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Complete permit application preparation</li>
            <li>All required documentation and plans</li>
            <li>Inspection scheduling and coordination</li>
            <li>Code compliance guidance</li>
            <li>Permit status updates throughout the project</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">McKinney Building Department Contact Information</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold mb-4">McKinney Building Inspection Department</h4>
            <ul className="space-y-2">
              <li><strong>Address:</strong> 222 N. Tennessee Street, McKinney, TX 75069</li>
              <li><strong>Phone:</strong> (972) 547-7371</li>
              <li><strong>Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</li>
              <li><strong>Website:</strong> mckinneytexas.org/building-inspection</li>
              <li><strong>Email:</strong> buildinginspection@mckinneytexas.org</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Post-Permit Completion</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Certificate of Completion</h3>
          <p className="mb-4">
            After final inspection approval:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>City issues certificate of completion</li>
            <li>Keep certificate with permanent home records</li>
            <li>Required for warranty claims and insurance</li>
            <li>Important for future home sales</li>
          </ul>

          <div className="bg-primary/10 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Help with McKinney Roofing Permits?</h3>
            <p className="mb-6">
              GoodWorkRoofing handles all permit applications and inspections for our McKinney customers. Our team knows the local requirements and ensures your project meets all codes and regulations from start to finish.
            </p>
            <Button size="lg" className="mr-4" asChild>
              <Link to="/contact">Get Permit Assistance</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/residential-roofing">View Roofing Services</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default McKinneyRoofingPermits;