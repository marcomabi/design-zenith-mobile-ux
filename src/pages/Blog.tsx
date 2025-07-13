import { Layout } from "@/components/layout/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest news, tips, and insights about roofing and home maintenance.
        </p>
      </div>
    </Layout>
  );
};

export default Blog;