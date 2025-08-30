// components/CategoryCard.tsx
import { ReactNode } from "react";
import { ShoppingCart } from "lucide-react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  price:number;
}

export default function FeatureCard({ icon, title, subtitle,price }: CategoryCardProps) {
  return (
    <div className="w-52 rounded-lg overflow-hidden  shadow-sm hover:shadow-md transition bg-white cursor-pointer">
      {/* Icon Section */}
      <div className="flex items-center justify-center h-32 bg-gray-100">
        {icon}
      </div>

      {/* Text Section */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <div className="p-3 flex justify-between">
        <h1>{`$${price}`}</h1>
        <div className="bg-black rounded"><ShoppingCart className="text-white px-1 py-1" /></div>
      </div>
    </div>
  );
}
