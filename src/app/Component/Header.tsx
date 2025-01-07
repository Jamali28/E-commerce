import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center items-center px-5 md:px-10">
      <div className="max-w-[1440px] flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
        {/* Left Section */}
        <div className="border-r-2 border-neutral-200 p-6 hidden md:block">
          <ul className="space-y-4">
            {[
              "Woman’s Fashion",
              "Men Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-800 leading-loose hover:underline transition-all duration-150"
              >
                <span>{item}</span>
                {index < 2 && (
                  <ChevronRight className="text-slate-500 text-lg ml-2" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center bg-black p-6 md:p-10 my-2 rounded-lg w-full">
          <div className="text-white flex flex-col justify-center space-y-5 sm:w-full md:w-[60%] lg:w-[50%]">
            {/* Logo and Subheading */}
            <div className="flex items-center gap-2">
              <FaApple className="text-2xl md:text-4xl" />
              <span className="text-sm md:text-base font-semibold">
                iPhone 14 Series
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Up to 10% off Voucher
            </h1>

            {/* Call-to-Action Button */}
            <Link
              href="#products"
              className="underline underline-offset-4 hover:font-semibold flex items-center"
            >
              Shop Now <ArrowRight className="text-white pl-1" />
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0 md:ml-auto">
            <Image
              src="/img.jpeg"
              alt="iPhone"
              width={496}
              height={352}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
