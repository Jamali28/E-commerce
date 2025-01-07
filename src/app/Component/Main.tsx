import Image from "next/image";
import { Star } from "lucide-react";
import { CiMobile3 } from "react-icons/ci";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoCamera } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiGamepadLine } from "react-icons/ri";
import { CiHeadphones } from "react-icons/ci";

export default function Main() {
  return (
    <div className="font-poppins px-4 sm:px-8 lg:px-[135px] mt-[150px]">
      {/* Flash Sales Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-red-600 text-white rounded-xl w-16 h-6 flex items-center justify-center">
                <p className="text-sm">Today</p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Flash Sales
            </h2>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              image: "/gg.jpg",
              title: "HAVIT HV-G92 Gamepad",
              price: "$120",
              originalPrice: "$160",
              discount: "-40%",
              rating: 4,
              reviews: 88,
            },
            {
              image: "/key.jpg",
              title: "AK-900 Wired Keyboard",
              price: "$960",
              originalPrice: "$1160",
              discount: "-35%",
              rating: 4,
              reviews: 88,
            },
            {
              image: "/desk.jpg",
              title: "IPS LCD Gaming Monitor",
              price: "$300",
              originalPrice: "$400",
              discount: "-30%",
              rating: 4,
              reviews: 99,
            },
            {
              image: "/gand.jpg",
              title: "S-Series Comfort Chair",
              price: "$375",
              originalPrice: "$450",
              discount: "-25%",
              rating: 4,
              reviews: 88,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
            >
              {/* Discount Badge */}
              <div className="relative">
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={172}
                  height={152}
                  className="mx-auto rounded"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <p className="text-lg font-medium truncate">{product.title}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-red-500 font-semibold">{product.price}</p>
                  <p className="text-gray-500 line-through">{product.originalPrice}</p>
                </div>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <p className="text-sm ml-2">({product.reviews})</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500">
            View All Products
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-red-600 text-white rounded-xl w-24 h-6 flex items-center justify-center">
                <p className="text-sm">Categories</p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Browse By Category
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { icon: <CiMobile3 />, name: "Phones" },
            { icon: <HiOutlineComputerDesktop />, name: "Computers" },
            { icon: <TbDeviceWatchStats />, name: "SmartWatch" },
            { icon: <IoCamera />, name: "Camera" },
            { icon: <CiHeadphones />, name: "Headphones" },
            { icon: <RiGamepadLine />, name: "Gaming" },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white border rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="text-4xl text-red-600 mb-4">{category.icon}</div>
              <p className="text-base font-medium text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
