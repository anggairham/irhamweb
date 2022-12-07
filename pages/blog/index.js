import Layout from "../../components/Layout";
import BlogCard from "../../components/Blog/BlogCard";
export default function Index() {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-16 py-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </div>
    </Layout>
  );
}
