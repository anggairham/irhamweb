import Layout from "../../components/Layout";
import BlogCard from "../../components/Blog/BlogCard";
import { getPagedPosts } from "../../lib/posts";

export default function Index({ data, next, prev }) {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-16 py-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((post) => (
            <BlogCard key={post.slug} post={post}></BlogCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const { data, next, prev } = await getPagedPosts(1);

  return {
    props: { data, next, prev },
  };
}
