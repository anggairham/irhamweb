import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <header className='bg-slate-800'>
        <div className='container mx-auto py-20 text-white text-center '>
          <h1 className='text-3xl uppercase font-bold'>
            var Sleep; int Code; Bool{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>
              Repeat;
            </span>
          </h1>
          <code className='text-sm'>
            {"while (stillBreathing) { tryAgain(); if(dead) break; }"}
          </code>
        </div>
      </header>
      <div className='container mx-auto lg:max-w-7xl mt-5 px-4 py-4  bg-white font-serif shadow-sm rounded-lg'>
        <h1 className='mb-3 text-2xl'>Welcome</h1>
        <p className='mb-3'>
          <code>var irhamDev;</code>
        </p>
        <p className='mb-3'>
          irhamDev = "Someone who likes to follow programming developments
          starting from developing websites, developing android applications,
          creating simple applications that can make work easier. This website
          is one way to maintain my interest in programming development.";
        </p>
        <code>console.log(irhamDev);</code>
      </div>
      <div className='container mx-auto lg:max-w-7xl mt-5 '>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white shadow-md rounded-2xl px-6 py-3 hover:shadow-lg'>
            <div className='mb-2 flex justify-between items-center'>
              <div>
                <h1 className='text-lg font-bold tracking-tight text-center'>
                  Blog
                </h1>
                <hr className='w-full m-auto border-black border-[1px] rounded-sm' />
              </div>
              <div className='py-2 px-2 flex items-center bg-cyan-600 text-white rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                  />
                </svg>
              </div>
            </div>
            <p className='text-sm text-gray-500'>
              Beragam artikel terkait dengan pemrograman yang telah saya
              pelajari
            </p>
          </div>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <h1 className='text-lg font-bold mb-2 tracking-tight'>
              Snippet Code
            </h1>
            <p className='text-sm text-gray-500'>
              Beberapa potongan code yang sering digunakan
            </p>
          </div>
          <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg'>
            <h1 className='text-lg font-bold mb-2 tracking-tight'>
              Small Apps
            </h1>
            <p className='text-sm text-gray-500'>
              Beberapa aplikasi kecil bertujuan untuk mempermudah pekerjaan
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
