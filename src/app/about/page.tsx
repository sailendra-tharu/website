
"use client";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden text-gray-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grid%22 width=%2210%22 height=%2210%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 10 0 L 0 0 0 10%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%220.5%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/></svg>')]"></div>

        {/* Floating Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-[20%] h-[100px] w-[100px] rounded-full bg-white/10 animate-bounce"></div>
          <div className="absolute right-[15%] top-[60%] h-[150px] w-[150px] rounded-full bg-white/10 animate-bounce delay-200"></div>
          <div className="absolute bottom-[20%] left-[20%] h-[80px] w-[80px] rounded-full bg-white/10 animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow-lg">
            Our Story
          </h1>
          <p className="mt-6 text-lg md:text-2xl opacity-90">
            Crafting exceptional experiences through innovation, passion, and
            unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
            Where It All Began
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to industry leaders, our journey is one of
            passion, innovation, and relentless pursuit of excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Founded on Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a simple idea in 2018 has evolved into a
                revolutionary platform that connects millions of customers with
                premium products worldwide. Our founders believed that
                exceptional quality shouldn't be a luxury—it should be
                accessible to everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve over 2 million customers across 50
                countries, maintaining the same commitment to excellence that
                drove us from day one.
              </p>
            </div>

            <div>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { number: "2M+", label: "Happy Customers" },
                  { number: "50", label: "Countries Served" },
                  { number: "99%", label: "Satisfaction Rate" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-6 rounded-2xl border border-white/40 bg-white/80 backdrop-blur shadow hover:-translate-y-1 transition"
                  >
                    <span className="block text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <span className="mt-2 block text-sm text-gray-600">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-indigo-950 to-indigo-800 py-20 md:py-32 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
          <p className="mt-4 text-lg text-white/70">
            The principles that guide everything we do
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: "🚀", title: "Innovation First", desc: "We constantly push boundaries and embrace new technologies." },
              { icon: "💎", title: "Premium Quality", desc: "Every product we offer meets our rigorous quality standards." },
              { icon: "🤝", title: "Customer Obsession", desc: "Your satisfaction drives everything we do." },
              { icon: "🌱", title: "Sustainability", desc: "We’re committed to responsible business practices." },
              { icon: "⚡", title: "Speed & Efficiency", desc: "Fast delivery and streamlined processes make shopping easy." },
              { icon: "🔒", title: "Trust & Security", desc: "Your data and transactions are protected." },
            ].map((val, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur hover:-translate-y-2 transition shadow text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-3xl">
                  {val.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                <p className="text-white/80">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            The passionate individuals behind our success
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[
              { initials: "AS", name: "Alex Smith", role: "CEO", desc: "Visionary leader with 15+ years in e-commerce." },
              { initials: "MJ", name: "Maria Johnson", role: "CTO", desc: "Tech innovator driving scalable solutions." },
              { initials: "DL", name: "David Lee", role: "Head of Ops", desc: "Expert in logistics and supply chain management." },
              { initials: "SR", name: "Sarah Rodriguez", role: "Creative Director", desc: "Design mastermind crafting intuitive experiences." },
            ].map((member, i) => (
              <div
                key={i}
                className="text-center hover:-translate-y-2 transition"
              >
                <div className="relative mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 text-4xl font-bold text-white overflow-hidden">
                  {member.initials}
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <div className="text-indigo-500 font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-red-500 py-20 md:py-32 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join millions of satisfied customers and discover what makes us
            different
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-full border border-white/40 bg-white/20 backdrop-blur font-semibold text-lg hover:bg-white/30 hover:-translate-y-1 transition shadow"
          >
            Start Shopping Today
          </a>
        </div>
      </section>
    </main>
  );
}
