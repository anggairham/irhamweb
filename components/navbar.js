import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='bg-indigo-800 font-mono'>
        <div className='lg:container lg:mx-auto flex items-center flex-wrap py-2 px-4'>
          <Link href='/' className='inline-flex items-center p-2 m-auto'>
            <span className='text-lg text-white font-bold tracking-widest'>
              Irham <span className='text-lime-300'>Web</span>
            </span>
          </Link>
          <button
            className='inline-flex p-3 rounded text-white lg:hidden'
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
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='w-full items-start flex flex-col lg:inline-flex lg:flex-row lg:w-auto lg:ml-auto lg:items-center lg:h-auto'>
              <Link
                href='/'
                className='lg:w-auto lg:border-none w-full border-b px-3 py-2 rounded text-gray-100 font-medium hover:bg-indigo-900 hover:text-white '
              >
                Home
              </Link>
              <Link
                href='/'
                className='lg:w-auto lg:border-none w-full border-b px-3 py-2 rounded text-gray-100 font-medium hover:bg-indigo-900 hover:text-white'
              >
                Blog
              </Link>
              <Link
                href='/'
                className='lg:w-auto lg:border-none w-full border-b px-3 py-2 rounded text-gray-100 font-medium hover:bg-indigo-900 hover:text-white'
              >
                Snippet Code
              </Link>
              <Link
                href='/'
                className='lg:w-auto lg:border-none w-full border-b px-3 py-2 rounded text-gray-100 font-medium hover:bg-indigo-900 hover:text-white'
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
