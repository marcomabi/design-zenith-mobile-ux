import { Layout } from "@/components/layout/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground">
          View our recent roofing projects and see the quality of our work.
        </p>
      </div>
    </Layout>
  );
};

export default Portfolio;