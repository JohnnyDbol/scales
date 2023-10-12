import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo or Site Name */}
          <Link href="/">
            <div className="text-xl font-semibold">Goon</div>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="px-3 py-2">Home</div>
          </Link>
          <Link href="/characters">
            <div className="px-3 py-2">Characters</div>
          </Link>
          <Link href="/sample">
            <div className="px-3 py-2">Sample</div>
          </Link>
          <Link href="/author">
            <div className="px-3 py-2">Author</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
