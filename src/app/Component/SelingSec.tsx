import { Star } from "lucide-react";
import Image from "next/image";

export default function Selling() {
  return (
    <div className="font-poppins px-4 sm:px-8 lg:px-[135px] mt-[150px]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="max-w-md">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-red-600 text-white rounded-xl w-16 h-6 flex items-center justify-center">
              <p className="text-sm">Months</p>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Best Selling Products
          </h2>
        </div>
        <button className="mt-4 lg:mt-0 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        {[
          {
            image: "/jac.jpg",
            title: "The north coat",
            price: "$120",
            originalPrice: "$160",
            discount: "-40%",
            rating: 4,
            reviews: 88,
          },
          {
            image: "/bag.jpg",
            title: "Gucci duffle bag",
            price: "$960",
            originalPrice: "$1160",
            discount: "-35%",
            rating: 4,
            reviews: 88,
          },
          {
            image: "/rgb.jpg",
            title: "RGB liquid CPU Cooler",
            price: "$300",
            originalPrice: "$400",
            discount: "-30%",
            rating: 4,
            reviews: 99,
          },
          {
            image: "/shelf.jpg",
            title: "Small BookShelf",
            price: "$375",
            originalPrice: "$450",
            discount: "-25%",
            rating: 4,
            reviews: 88,
          },
        ].map((product, index) => (
          <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg">
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
                className="mx-auto"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <p className="text-lg font-medium">{product.title}</p>
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
    </div>
  );
}
