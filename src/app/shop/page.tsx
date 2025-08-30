"use client";

import { motion, Variants } from "framer-motion";
import ShopCard from "../component/shopcard";
import ShopSideBar from "../component/sidebarshop";

export default function Shop() {
  const products = [
    {
      discount: "-20%",
      title: "Premium Wireless Headphones",
      category: "Electronics",
      rating: 4,
      reviews: 124,
      price: 79.99,
      oldPrice: 99.99,
      image: "/images/headphone.jpg",
    },
    {
      discount: "-15%",
      title: "Smart Watch",
      category: "Wearables",
      rating: 5,
      reviews: 342,
      price: 129.99,
      oldPrice: 149.99,
      image: "/images/smartwatch.jpg",
    },
    {
      discount: "-30%",
      title: "Gaming Mouse",
      category: "Accessories",
      rating: 3,
      reviews: 89,
      price: 34.99,
      oldPrice: 49.99,
      image: "/images/mouse.jpg",
    },
    {
      discount: "-10%",
      title: "Mechanical Keyboard",
      category: "Accessories",
      rating: 5,
      reviews: 210,
      price: 89.99,
      oldPrice: 99.99,
      image: "/images/keyboard.jpg",
    },
    {
      discount: "-25%",
      title: "Bluetooth Speaker",
      category: "Electronics",
      rating: 4,
      reviews: 178,
      price: 59.99,
      oldPrice: 79.99,
      image: "/images/speaker.jpg",
    },
    {
      discount: "-35%",
      title: "4K Monitor",
      category: "Computers",
      rating: 5,
      reviews: 95,
      price: 299.99,
      oldPrice: 459.99,
      image: "/images/monitor.jpg",
    },
    {
      discount: "-18%",
      title: "Wireless Charger",
      category: "Accessories",
      rating: 4,
      reviews: 64,
      price: 24.99,
      oldPrice: 29.99,
      image: "/images/charger.jpg",
    },
    {
      discount: "-40%",
      title: "DSLR Camera",
      category: "Cameras",
      rating: 5,
      reviews: 53,
      price: 499.99,
      oldPrice: 829.99,
      image: "/images/camera.jpg",
    },
    {
      discount: "-12%",
      title: "VR Headset",
      category: "Gaming",
      rating: 4,
      reviews: 76,
      price: 219.99,
      oldPrice: 249.99,
      image: "/images/vr.jpg",
    },
    {
      discount: "-22%",
      title: "Tablet Pro",
      category: "Electronics",
      rating: 4,
      reviews: 310,
      price: 389.99,
      oldPrice: 499.99,
      image: "/images/tablet.jpg",
    },
  ];

  // Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div className="flex flex-col md:flex-row p-4 justify-around">
      {/* Sidebar */}
      <motion.div
        className="mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <ShopSideBar />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products.map((product, index) => (
          <motion.div key={index} variants={item} whileHover={{ scale: 1.05 }}>
            <ShopCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
