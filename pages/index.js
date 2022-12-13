import Layout from "../components/Layout";
import BlogCard from "../components/Blog/BlogCard";
import HomeCard from "../components/Home/HomeCard";
import ArchiveBox from "../components/Icon/ArchiveBox";
import ClipboardDocument from "../components/Icon/ClipboardDocument";
import CommandLine from "../components/Icon/CommandLine";

export default function Home() {
  return (
    <Layout>
      <header className='bg-blue-800'>
        <div className='container mx-auto py-20 text-white text-center '>
          <h1 className='text-3xl uppercase font-bold tracking-wides'>
            var Sleep; int Code; Boolean{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300'>
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
          irhamDev = &quot;Someone who likes to follow programming developments
          starting from developing websites, developing android applications,
          creating simple applications that can make work easier. This website
          is one way to maintain my interest in programming development.&quot;;
        </p>
        <code>console.log(irhamDev);</code>
      </div>
      <div className='container mx-auto lg:max-w-7xl mt-5 '>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <HomeCard
            title='Blog'
            content='Beragam artikel terkait dengan pemrograman yang telah saya pelajari'
            icon={<ClipboardDocument />}
          ></HomeCard>
          <HomeCard
            title='Snippet Code'
            content='Beberapa potongan code yang sering digunakan'
            icon={<CommandLine />}
          ></HomeCard>
          <HomeCard
            title='Small Apps'
            content='Beberapa aplikasi kecil bertujuan untuk mempermudah pekerjaan'
            icon={<ArchiveBox />}
          ></HomeCard>
        </div>
      </div>
      <div className='container mx-auto lg:max-w-7xl mt-5'>
        <hr className='border-2 border-blue-800 mb-2' />
        <h1 className='text-2xl font-medium mb-4'>Recent Articles</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <BlogCard></BlogCard>
        </div>
      </div>
    </Layout>
  );
}
