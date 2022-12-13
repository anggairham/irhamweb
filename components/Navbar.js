import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='bg-white font-mono border-b-2'>
        <div className='container mx-auto lg:max-w-7xl'>
          <div className='flex items-center flex-wrap py-2'>
            <Link
              href='/'
              className='inline-flex items-center p-2 m-auto animate-gradient from-indigo-500 via-sky-500 to-indigo-500 bg-[length:500%_500%] bg-gradient-to-r rounded-md'
            >
              <span className='text-lg text-white font-bold tracking-widest'>
                Irham <span className=''>Dev</span>
              </span>
            </Link>
            <button
              className='inline-flex p-3 rounded md:hidden'
              onClick={handleClick}
            >
              <svg
                className={`${active ? "hidden" : "show"} w-6 h-6`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`${!active ? "hidden" : "show"} w-6 h-6`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${
                active ? "" : "hidden"
              }   w-full md:inline-flex md:flex-grow md:w-auto`}
            >
              <div className='w-full items-start flex flex-col md:inline-flex md:flex-row md:w-auto md:ml-auto md:items-center md:h-auto text-black'>
                <Link
                  href='/'
                  className='md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800 '
                >
                  {"<Home/>"}
                </Link>
                <Link
                  href='/blog'
                  className='md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800'
                >
                  {"<Blog/>"}
                </Link>
                <Link
                  href='/snippet'
                  className='md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800'
                >
                  {"<SnippetCode/>"}
                </Link>
                <Link
                  href='/reference'
                  className='md:w-auto md:border-none w-full border-b px-3 py-2 rounded font-medium hover:text-cyan-800'
                >
                  {"<Reference/>"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
