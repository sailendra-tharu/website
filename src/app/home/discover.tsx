"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/shoe.jpg", "/Bag.webp", "/pant.webp", "/Tshirt.webp"];

export default function Discover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 mt-5 mb-5">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover Your Perfect Style
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Shop the latest trends in fashion, electronics, and home decor.
            Quality products at unbeatable prices.
          </motion.p>

          {/* Buttons with bounce animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 shadow-lg"
            >
              Shop Now
            </motion.button>

            <motion.button
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5, // offset so they bounce alternately
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100 shadow-lg"
            >
              View Collection
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image Slider */}
        <div className="flex-1 flex justify-center">
          <div className="w-[600px] h-[350px] rounded-lg overflow-hidden relative">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Hero ${index + 1}`}
                  width={600}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
