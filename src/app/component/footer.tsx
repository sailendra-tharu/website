"use client";

import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <motion.footer
      className="bg-gray-50 text-gray-700 py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              className="w-6 h-6 bg-black rounded-sm"
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring" }}
            />
            <h2 className="text-lg font-semibold">ShopCo</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Your trusted online shopping destination for quality products and
            exceptional service.
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="hover:text-black"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-black"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-black"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Shop */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            {["Fashion", "Electronics", "Home & Living", "Sports"].map(
              (link, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, scale: 1.05 }}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            {["Contact Us", "FAQ", "Shipping Info", "Returns"].map(
              (link, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, scale: 1.05 }}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map(
              (link, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, scale: 1.05 }}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500"
        variants={item}
      >
        © 2025 ShopCo. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
