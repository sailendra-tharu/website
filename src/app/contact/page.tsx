
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly do you respond?",
      a: "We aim to respond to all inquiries within 24 hours on business days.",
    },
    {
      q: "Where is your main office located?",
      a: "Our headquarters are in San Francisco, CA, with offices worldwide.",
    },
    {
      q: "Do you offer customer support on weekends?",
      a: "Yes, our support team is available 7 days a week, 8am–8pm (local time).",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Have questions or feedback? We’re here to help you anytime.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: <Mail className="w-6 h-6 text-indigo-500" />,
                title: "Email",
                desc: "support@example.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-indigo-500" />,
                title: "Phone",
                desc: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="w-6 h-6 text-indigo-500" />,
                title: "Office",
                desc: "123 Innovation Drive, San Francisco, CA",
              },
              {
                icon: <Clock className="w-6 h-6 text-indigo-500" />,
                title: "Support Hours",
                desc: "Mon–Sun: 8:00 AM – 8:00 PM",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
              >
                <div>{info.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{info.title}</h3>
                  <p className="text-gray-600">{info.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white shadow space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-10"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                {openFAQ === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 mt-2"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[450px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0986586934823!2d-122.41941568468174!3d37.774929779759454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7e8c6f4f%3A0x8f62f5f5a7bb7d9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1694017200000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Reach out anytime — our team is ready to assist you.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-white/20 backdrop-blur border border-white/30 font-semibold text-lg shadow hover:bg-white/30 transition"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
