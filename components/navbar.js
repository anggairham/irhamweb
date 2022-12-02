import Link from "next/link";

function Navbar() {
  return (
    <div class='min-h-full'>
      <nav class='bg-gray-800'>
        <Link href='/'>Home</Link>
        <Link href='/article'>Article</Link>
        <Link href='/snippet'>Snippet</Link>
      </nav>
    </div>
  );
}
export default Navbar;
