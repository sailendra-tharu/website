"use client";
import { motion, Variants } from "framer-motion";

import CategoryCard from "../component/categorycard";
import FeatureCard from "../component/featurecard";
import Discover from "./discover";
import Subscribe from "./subscribe";



function Home() {
  const categories = [
    { title: "Shoe", subtitle: "SuperShoe" },
    { title: "Bag", subtitle: "SuperBag" },
    { title: "Watch", subtitle: "SuperWatch" },
    { title: "Hat", subtitle: "SuperHat" },
  ];

  const features = [
    { title: "Shoe", subtitle: "SuperShoe", price: 20 },
    { title: "Bag", subtitle: "SuperBag", price: 20 },
    { title: "Watch", subtitle: "SuperWatch", price: 20 },
    { title: "Hat", subtitle: "SuperHat", price: 20 },
  ];

  // ✅ Define variants properly
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerStagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Discover />
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center mt-10"
      >
        <h1 className="font-normal text-lg">Shop by Category</h1>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <p className="font-normal text-xs">
          Explore our wide range of product categories
        </p>
      </motion.div>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-5 mt-6"
      >
        {categories.map((cat, index) => (
          <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.05 }}>
            <CategoryCard
              title={cat.title}
              subtitle={cat.subtitle}
              icon={undefined}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Products */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-50 px-6 py-6 mt-8"
      >
        <div className="flex justify-center">
          <h1 className="font-normal text-lg">Featured Products</h1>
        </div>
        <div className="flex justify-center">
          <p className="font-normal text-xs">Handpicked favorites just for you</p>
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-5 mt-6"
        >
          {features.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
            >
              <FeatureCard
                title={cat.title}
                subtitle={cat.subtitle}
                icon={undefined}
                price={cat.price}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Subscribe */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Subscribe />
      </motion.div>
    </>
  );
}

export default Home;
