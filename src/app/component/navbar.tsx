"use client";

import { Search, User, ShoppingCart } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Navbar() {
  // Variants for stagger animation
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 120 } 
    },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="flex items-center space-x-2"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="w-6 h-6 bg-black rounded-sm"
        ></motion.div>
        <span className="text-lg font-semibold">ShopCo</span>
      </motion.div>

      {/* Menu Links */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden md:flex space-x-8 text-sm font-medium text-gray-600"
      >
        {["Home", "Shop", "About", "Contact"].map((link, i) => (
          <motion.a
            key={i}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            variants={item}
            whileHover={{ scale: 1.1, color: "#000" }}
            className="hover:text-black transition-colors"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>

      {/* Icons */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center space-x-5"
      >
        <motion.div variants={item} whileHover={{ scale: 1.2 }}>
          <Search className="w-5 h-5 cursor-pointer hover:text-black" />
        </motion.div>
        <motion.div variants={item} whileHover={{ scale: 1.2 }}>
          <User className="w-5 h-5 cursor-pointer hover:text-black" />
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="relative cursor-pointer"
        >
          <ShoppingCart className="w-5 h-5 hover:text-black" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            4
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
