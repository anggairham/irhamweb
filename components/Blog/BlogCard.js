import Tags from "../Tags";
import Link from "next/link";
function ArticleCard(props) {
  return (
    <>
      <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
        <Link href={`/blog/${props.post.slug}`}>
          <div className='bg-slate-400 h-48 mb-4'></div>
          <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
            {props.post.title}
          </h1>
        </Link>
        <p className=' text-gray-500 line-clamp-3'>{props.post.summary}</p>
        <Tags tags={[]}></Tags>
      </div>
    </>
  );
}

export default ArticleCard;
