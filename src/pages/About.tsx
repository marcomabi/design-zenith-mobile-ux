import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground">
          Learn more about our company, our values, and our commitment to excellence.
        </p>
      </div>
    </Layout>
  );
};

export default About;