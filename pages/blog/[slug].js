import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import MarkdownContent from "../../components/MarkdownContent";
import Tags from "../../components/Tags";

import { getPostBySlug, getAllPosts } from "../../libs/posts";

export default function BlogDetail({ blog, preview }) {
  const router = useRouter();
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <main className='container mx-auto mt-16 px-4 py-8 shadow-sm rounded-2xl bg-white md:px-5'>
        <div className='col-span-12 lg:col-span-8'>
          <article>
            <div className='mb-4 flex items-center justify-start gap-2 text-base'>
              {blog.author} {blog.date}
            </div>
            <h1 className='text-3xl font-black text-slate-700 mb-4 leading-tight tracking-tight'>
              {blog.title}
            </h1>
            <Tags tags={blog.tags}></Tags>
            <MarkdownContent content={blog.content} />
          </article>
        </div>
      </main>
    </Layout>
  );
}
export async function getStaticProps({ params }) {
  const blog = await getPostBySlug(params.slug);
  return {
    props: {
      blog: {
        ...blog,
        content: blog.content,
      },
    },
    revalidate: 3,
  };
}
export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
