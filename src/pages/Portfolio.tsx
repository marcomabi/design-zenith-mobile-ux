import { Layout } from "@/components/layout/Layout";
import { Gallery } from "@/components/ui/gallery";
import { SEOHead } from "@/components/seo/SEOHead";

const Portfolio = () => {
  const portfolioImages = [
    "/lovable-uploads/7a162d81-382c-4858-b4c4-c369801ef0e4.png",
    "/lovable-uploads/08d99cfd-8b5f-45e5-ab86-377850e60f49.png",
    "/lovable-uploads/b166675c-2c5e-48de-b94f-4ce69390932f.png",
    "/lovable-uploads/afe3d468-aaf3-4ed0-abae-3d4755f770ba.png",
    "/lovable-uploads/b972918b-08e7-435a-aef7-d676de4f9406.png",
    "/lovable-uploads/1c57f797-54cb-492f-bbe3-e3a1bb4e0732.png",
    "/lovable-uploads/65d4cdca-64d7-4ab9-8f63-d0ba062c9e7d.png",
    "/lovable-uploads/ae2f79dd-1a7b-44b2-8b72-3a4dbfcb185d.png"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Portfolio - GoodWorkRoofing Projects in Dallas-Fort Worth"
        description="View our recent roofing projects in McKinney, Dallas, and Fort Worth. Professional residential and commercial roofing installations, repairs, and replacements."
        keywords="roofing portfolio Dallas, McKinney roofing projects, Fort Worth roof installation, residential roofing gallery, commercial roofing examples"
        canonical="https://goodworkroofing.com/portfolio"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            View our recent roofing projects across the Dallas-Fort Worth area. From residential roof replacements to commercial installations, see the quality craftsmanship that sets GoodWorkRoofing apart.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Recent Projects</h2>
          <Gallery images={portfolioImages} />
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today for a free estimate on your roofing project in McKinney, Dallas, or Fort Worth.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Free Estimate
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;