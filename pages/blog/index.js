import Layout from "../../components/layout";
import Link from "next/link";
export default function Index() {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-16 py-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <Link href='/blog/detail'>
              <div className='bg-purple-400 h-48 mb-4'></div>
              <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
                Lorem ipsum dolor sit.
              </h1>
            </Link>
            <p className='text-sm text-gray-500 line-clamp-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores sit cum est! Eligendi porro, iure, deleniti autem,
              temporibus officia aliquid quasi nesciunt obcaecati natus sapiente
              qui totam placeat sint.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <Link href='/blog/detail'>
              <div className='bg-purple-400 h-48 mb-4'></div>
              <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
                Lorem ipsum dolor sit.
              </h1>
            </Link>
            <p className='text-sm text-gray-500 line-clamp-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores sit cum est! Eligendi porro, iure, deleniti autem,
              temporibus officia aliquid quasi nesciunt obcaecati natus sapiente
              qui totam placeat sint.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <Link href='/blog/detail'>
              <div className='bg-purple-400 h-48 mb-4'></div>
              <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
                Lorem ipsum dolor sit.
              </h1>
            </Link>
            <p className='text-sm text-gray-500 line-clamp-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores sit cum est! Eligendi porro, iure, deleniti autem,
              temporibus officia aliquid quasi nesciunt obcaecati natus sapiente
              qui totam placeat sint.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <Link href='/blog/detail'>
              <div className='bg-purple-400 h-48 mb-4'></div>
              <h1 className='text-lg font-bold mb-2 tracking-tight line-clamp-2'>
                Lorem ipsum dolor sit.
              </h1>
            </Link>
            <p className='text-sm text-gray-500 line-clamp-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores sit cum est! Eligendi porro, iure, deleniti autem,
              temporibus officia aliquid quasi nesciunt obcaecati natus sapiente
              qui totam placeat sint.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
