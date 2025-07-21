import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { StructuredData } from "@/components/seo/StructuredData";
import { Calendar, User, ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChooseRoofingContractor = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Choose the Right Roofing Contractor in Dallas-Fort Worth",
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
    "datePublished": "2023-12-28",
    "dateModified": "2023-12-28",
    "description": "Avoid costly mistakes with our comprehensive guide to selecting a qualified roofing contractor. Learn about licensing, insurance, and red flags to watch for.",
    "image": "/lovable-uploads/afe3d468-aaf3-4ed0-abae-3d4755f770ba.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://goodworkroofing.com/blog/choose-roofing-contractor-dallas"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="How to Choose the Right Roofing Contractor in Dallas-Fort Worth | GoodWorkRoofing"
        description="Avoid costly mistakes with our comprehensive guide to selecting a qualified roofing contractor. Learn about licensing, insurance, and red flags to watch for."
        keywords="choosing roofing contractor Dallas, roofing contractor Fort Worth, licensed roofer Texas, roofing contractor red flags, McKinney roofing contractor"
        canonical="https://goodworkroofing.com/blog/choose-roofing-contractor-dallas"
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
              How to Choose the Right Roofing Contractor in Dallas-Fort Worth
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 28, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>GoodWorkRoofing Team</span>
              </div>
              <span>7 min read</span>
            </div>
          </div>
          
          <img 
            src="/lovable-uploads/afe3d468-aaf3-4ed0-abae-3d4755f770ba.png"
            alt="Professional roofing contractors working on a Dallas area home"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Choosing the right roofing contractor is one of the most important decisions you'll make as a homeowner. With your home's protection and your family's safety at stake, it's crucial to select a qualified, trustworthy professional. This comprehensive guide will help you navigate the selection process and avoid common pitfalls in the Dallas-Fort Worth area.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <p className="font-semibold text-red-800">Warning</p>
            </div>
            <p className="text-red-700">
              Hiring an unqualified contractor can result in poor workmanship, voided warranties, insurance complications, and even safety hazards. Take time to properly vet any contractor before signing a contract.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Essential Qualifications to Verify</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Licensing Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Texas State Contractor License</li>
                  <li>• Local business permits</li>
                  <li>• Specialized roofing certifications</li>
                  <li>• Current and valid documentation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Insurance Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• General liability insurance</li>
                  <li>• Workers' compensation</li>
                  <li>• Bonding (for larger projects)</li>
                  <li>• Current certificates of insurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Texas Licensing Requirements</h3>
          <p className="mb-4">
            In Texas, roofing contractors must have:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>State Contractor License:</strong> Required for projects over $20,000</li>
            <li><strong>Local Business License:</strong> City-specific requirements</li>
            <li><strong>Specialty Trade License:</strong> Some municipalities require additional roofing licenses</li>
          </ul>

          <p className="mb-6">
            <strong>Verification:</strong> Check license status through the Texas Department of Licensing and Regulation (TDLR) website.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Insurance Verification</h3>
          <p className="mb-4">
            Always request and verify current certificates for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>General Liability:</strong> Minimum $1 million coverage</li>
            <li><strong>Workers' Compensation:</strong> Protects you from injury claims</li>
            <li><strong>Auto Insurance:</strong> For vehicles and equipment on your property</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="font-semibold text-blue-800 mb-2">Pro Tip:</p>
            <p className="text-blue-700">
              Call the insurance company directly to verify coverage is current and adequate. Don't rely solely on certificates provided by the contractor.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Research and Vetting Process</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Local Reputation Research</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Better Business Bureau (BBB) Rating</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Check rating and complaint history</li>
                <li>Review how complaints were resolved</li>
                <li>Look for patterns in customer issues</li>
              </ul>
            </li>
            <li><strong>Online Reviews</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Google My Business reviews</li>
                <li>Angie's List or HomeAdvisor ratings</li>
                <li>Social media presence and engagement</li>
              </ul>
            </li>
            <li><strong>Local References</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Recent customer references (within 2 years)</li>
                <li>Projects similar to yours</li>
                <li>Local supplier relationships</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Questions to Ask References</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Was the project completed on time and on budget?</li>
            <li>How was the quality of workmanship?</li>
            <li>Did the contractor clean up properly?</li>
            <li>Were any issues resolved promptly?</li>
            <li>Would you hire them again?</li>
            <li>Any unexpected costs or problems?</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Getting and Comparing Estimates</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">What a Professional Estimate Should Include</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Detailed scope of work</strong> - Specific tasks and materials</li>
            <li><strong>Material specifications</strong> - Brand, model, and grade</li>
            <li><strong>Labor costs</strong> - Broken down by task</li>
            <li><strong>Timeline</strong> - Start and completion dates</li>
            <li><strong>Permit costs</strong> - Who obtains and pays for permits</li>
            <li><strong>Cleanup responsibilities</strong> - Debris removal and site restoration</li>
            <li><strong>Warranty terms</strong> - Both materials and workmanship</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Comparing Estimates Effectively</h3>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="font-semibold text-yellow-800 mb-2">Important:</p>
            <p className="text-yellow-700">
              Don't automatically choose the lowest bid. Focus on value, quality, and the contractor's ability to deliver on their promises.
            </p>
          </div>

          <p className="mb-4">Consider these factors when comparing:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Material quality</strong> - Higher-grade materials cost more but last longer</li>
            <li><strong>Scope differences</strong> - Ensure all estimates cover the same work</li>
            <li><strong>Timeline variations</strong> - Faster isn't always better</li>
            <li><strong>Warranty coverage</strong> - Length and what's included</li>
            <li><strong>Payment terms</strong> - Avoid large upfront payments</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Red Flags to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200">
              <CardHeader>
                <XCircle className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle className="text-red-700">Immediate Red Flags</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-600">
                  <li>• Door-to-door solicitation</li>
                  <li>• Requests large upfront payment</li>
                  <li>• No local address or references</li>
                  <li>• Verbal estimates only</li>
                  <li>• High-pressure sales tactics</li>
                  <li>• "Limited time" offers</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-green-700">Good Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-600">
                  <li>• Local business with fixed address</li>
                  <li>• Detailed written estimates</li>
                  <li>• Proper licensing and insurance</li>
                  <li>• Professional equipment and vehicles</li>
                  <li>• Positive local references</li>
                  <li>• Transparent communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Storm Chaser Warning Signs</h3>
          <p className="mb-4">
            After major storms, be especially wary of contractors who:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Arrive uninvited offering "free inspections"</li>
            <li>Claim they can "waive your deductible"</li>
            <li>Pressure you to sign immediately</li>
            <li>Can't provide local references</li>
            <li>Ask for full payment upfront</li>
            <li>Have out-of-state license plates</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Contract and Legal Considerations</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Contract Elements</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Detailed Work Description</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Specific materials and installation methods</li>
                <li>Areas to be worked on</li>
                <li>What's included and excluded</li>
              </ul>
            </li>
            <li><strong>Timeline and Schedule</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Start and completion dates</li>
                <li>Weather delay provisions</li>
                <li>Penalty clauses for delays</li>
              </ul>
            </li>
            <li><strong>Payment Schedule</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Never more than 10% down payment</li>
                <li>Progress payments tied to completion</li>
                <li>Final payment upon completion and approval</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Your Rights Under Texas Law</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>3-Day Right to Cancel:</strong> For contracts signed in your home</li>
            <li><strong>Lien Rights:</strong> Protection against subcontractor claims</li>
            <li><strong>Warranty Requirements:</strong> Minimum 1-year workmanship warranty</li>
            <li><strong>Change Order Requirements:</strong> All changes must be in writing</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Working with Insurance</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Contractor's Role in Insurance Claims</h3>
          <p className="mb-4">
            A reputable contractor should:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Help document damage for your claim</li>
            <li>Work with your insurance adjuster</li>
            <li>Provide detailed estimates matching insurance requirements</li>
            <li>Understand insurance claim processes</li>
            <li>Never offer to "waive your deductible" (this is illegal)</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <p className="font-semibold text-red-800 mb-2">Legal Warning:</p>
            <p className="text-red-700">
              Contractors who offer to waive deductibles or inflate claims are engaging in insurance fraud. This can result in claim denial and legal consequences for you.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Final Selection Checklist</h2>
          
          <p className="mb-4">Before making your final decision, ensure the contractor:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>✓ Has valid Texas contractor license</li>
            <li>✓ Carries adequate insurance coverage</li>
            <li>✓ Provided at least 3 local references</li>
            <li>✓ Gave detailed written estimate</li>
            <li>✓ Explained timeline and process clearly</li>
            <li>✓ Offered reasonable warranty terms</li>
            <li>✓ Has good BBB rating and online reviews</li>
            <li>✓ Communicates professionally and promptly</li>
            <li>✓ Provides fair and reasonable contract terms</li>
            <li>✓ Has local business presence</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Questions to Ask Before Hiring</h2>
          
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>How long have you been in business locally?</li>
            <li>Can you provide proof of licensing and insurance?</li>
            <li>What is your warranty policy?</li>
            <li>Who will be doing the actual work?</li>
            <li>How do you handle weather delays?</li>
            <li>What is your cleanup policy?</li>
            <li>Can I see examples of recent work?</li>
            <li>How do you handle change orders?</li>
            <li>What permits are required and who obtains them?</li>
            <li>What happens if I'm not satisfied with the work?</li>
          </ol>

          <div className="bg-primary/10 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Work with Trusted Professionals?</h3>
            <p className="mb-6">
              GoodWorkRoofing has served the Dallas-Fort Worth area for years with fully licensed, insured, and experienced roofing professionals. We provide detailed estimates, clear communication, and stand behind our work with comprehensive warranties.
            </p>
            <Button size="lg" className="mr-4" asChild>
              <Link to="/contact">Get Your Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ChooseRoofingContractor;