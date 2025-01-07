import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="font-poppins">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-sm py-2 px-4 sm:px-8 flex justify-between items-center">
        <p className="flex-grow text-center sm:text-left sm:pl-[120px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#" className="underline font-semibold ml-4">
          Shop Now
        </Link>
        <p className="hidden sm:block sm:pr-[120px]">English</p>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between mx-4 sm:mx-[120px] my-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold">Exclusive</div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center w-full sm:w-[300px] border border-black rounded px-4 py-2 bg-gray-100">
          <input
            type="search"
            id="search"
            placeholder="What are you looking for?"
            className="flex-grow bg-transparent outline-none text-sm text-gray-600"
          />
          <div className="flex items-center space-x-3 text-gray-600">
            <Search />
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t"></div>
    </div>
  );
}
