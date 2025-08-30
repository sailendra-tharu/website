// components/Newsletter.tsx
"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-black text-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
      <p className="text-gray-300 mb-6 text-center">
        Subscribe to our newsletter for exclusive deals and new arrivals
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none bg-white"
          required
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
