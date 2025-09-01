// components/CategoryCard.tsx
import { ReactNode } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  price: number;
}

export default function FeatureCard({
  icon,
  title,
  subtitle,
  price,
}: CategoryCardProps) {
  return (
    <div className="w-70 rounded-lg overflow-hidden  shadow-sm hover:shadow-md transition bg-white cursor-pointer">
      {/* Icon Section */}
      <div className="flex items-center justify-center h-45 bg-gray-100">
        <Image
          src="/Bag.webp"
          alt="image"
          width={600}
          height={350}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
