import { Heart } from "lucide-react";

interface ProductCardProps {
  discount?: string; // ✅ discount now passed as prop
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  image?: string;
}

export default function ShopCard({
  discount,
  title,
  category,
  rating,
  reviews,
  price,
  oldPrice,
  image,
}: ProductCardProps) {
  return (
    <div className="w-full rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* Image Section */}
      <div className="relative bg-gray-200 h-36 flex items-center justify-center text-gray-500 text-sm">
        {discount && (
          <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
            {discount}
          </span>
        )}
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{category}</p>

        {/* Ratings */}
        <div className="flex items-center mt-1">
          <div className="flex text-yellow-400 text-xs">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>

        {/* Price Section */}
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
            {oldPrice && (
              <p className="text-xs text-gray-400 line-through">${oldPrice}</p>
            )}
          </div>
          <button className="bg-black text-white text-xs px-3 py-1 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
