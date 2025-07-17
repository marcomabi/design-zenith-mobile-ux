import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Dallas Roof Storm Damage: What Every Homeowner Should Know",
      excerpt: "Dallas experiences severe weather year-round. Learn how to identify storm damage, file insurance claims, and protect your home with proper roofing maintenance.",
      date: "2024-01-15",
      author: "GoodWorkRoofing Team",
      category: "Storm Damage",
      slug: "dallas-roof-storm-damage-guide",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Best Roofing Materials for North Texas Climate: Expert Recommendations",
      excerpt: "Discover which roofing materials perform best in Dallas-Fort Worth's extreme temperatures, high winds, and hail storms. Compare durability, cost, and energy efficiency.",
      date: "2024-01-10",
      author: "GoodWorkRoofing Team",
      category: "Materials",
      slug: "best-roofing-materials-north-texas",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "McKinney Roofing Permits: Everything You Need to Know Before Starting",
      excerpt: "Navigate McKinney's roofing permit requirements with ease. Learn about costs, timelines, and when permits are required for your roofing project.",
      date: "2024-01-05",
      author: "GoodWorkRoofing Team",
      category: "Regulations",
      slug: "mckinney-roofing-permits-guide",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "How to Choose the Right Roofing Contractor in Dallas-Fort Worth",
      excerpt: "Avoid costly mistakes with our comprehensive guide to selecting a qualified roofing contractor. Learn about licensing, insurance, and red flags to watch for.",
      date: "2023-12-28",
      author: "GoodWorkRoofing Team",
      category: "Contractor Tips",
      slug: "choose-roofing-contractor-dallas",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Energy-Efficient Roofing Solutions for Texas Homes: Save Money Year-Round",
      excerpt: "Reduce your energy bills with smart roofing choices. Explore cool roof technology, proper insulation, and ventilation systems for maximum efficiency.",
      date: "2023-12-20",
      author: "GoodWorkRoofing Team",
      category: "Energy Efficiency",
      slug: "energy-efficient-roofing-texas",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Spring Roof Maintenance Checklist for Dallas Homeowners",
      excerpt: "Prepare your roof for Texas storms with our comprehensive spring maintenance checklist. Prevent costly repairs with these essential inspection tips.",
      date: "2023-12-15",
      author: "GoodWorkRoofing Team",
      category: "Maintenance",
      slug: "spring-roof-maintenance-dallas",
      readTime: "4 min read"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Roofing Blog - Expert Tips & Insights | GoodWorkRoofing Dallas"
        description="Get expert roofing advice for Dallas-Fort Worth homeowners. Learn about storm damage, materials, maintenance, and contractor selection from GoodWorkRoofing professionals."
        keywords="Dallas roofing blog, roofing tips Texas, storm damage repair, McKinney roofing advice, Fort Worth roof maintenance"
        canonical="https://goodworkroofing.com/blog"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, tips, and guides for Dallas-Fort Worth homeowners. Stay informed about roofing best practices, storm preparedness, and home protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Roofing Help?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our experienced team is ready to help with all your roofing needs in McKinney, Dallas, and Fort Worth.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;