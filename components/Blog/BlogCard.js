import Tags from "../Tags";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard(props) {
  const { post = [] } = props;
  return (
    <>
      <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
        <Link href={`/blog/${post.slug}`}>
          {post.coverImage === null ? (
            <div className='bg-slate-400 h-48 mb-4'></div>
          ) : (
            <Image
              src={post.coverImage}
              alt={`${post.title}`}
              width={500}
              height={500}
              className='h-48 object-cover'
            />
          )}
          <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
            {post.title}
          </h1>
        </Link>
        <p className=' text-gray-500 line-clamp-3'>{post.summary}</p>
        <Tags tags={post.tags}></Tags>
      </div>
    </>
  );
}
