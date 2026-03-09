import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/src/components/Header";

function page() {
  return (
    <main className="overflow-x-hidden">
      <section className=" page">
        <div className="blob-navy">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2f36b3" />
                <stop offset="70%" stopColor="#26246b" />
              </linearGradient>
            </defs>

            <path
              className="hidden lg:block "
              d="M0 0 L71 0 L89 20 L69 100 L0 100 Z"
            ></path>

            <path
              className="block lg:hidden"
              d="M0 0 L100 0 L110 20 L69 100 L0 100 Z"
            ></path>
          </svg>
        </div>

        <Header />

        <div className="hero">
          <div className="hero-left">
            <h1>
              <span className="yellow">About</span>
              <span className="white">
                Our Business
              </span>
            </h1>
            <p>
              We are a growth-focused digital team helping brands build
              meaningful products, launch faster, and scale with confidence
              through strategy, design, and development.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="btn-get-started">Get Started</Link>
              <Link href="/services" className="link-learn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="shape-container">
              <div className="shape-content">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80"
                  alt="Our team collaborating on strategy"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
           <div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
              alt="Team meeting and planning"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-[0_18px_34px_rgba(46,46,130,0.16)]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              Who We Are
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f6578] md:text-lg">
              We are a multidisciplinary team of strategists, designers, and
              developers focused on building digital experiences that drive
              measurable business outcomes.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5f6578] md:text-lg">
              From early-stage startups to established brands, we partner with
              clients to solve complex challenges through clear planning,
              quality execution, and continuous improvement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#dfe3ff] bg-white p-5">
                <p className="text-2xl font-extrabold text-[#2e2e82]">120+</p>
                <p className="mt-1 text-sm font-medium text-[#6b7280]">
                  Successful Projects
                </p>
              </div>
              <div className="rounded-xl border border-[#dfe3ff] bg-white p-5">
                <p className="text-2xl font-extrabold text-[#2e2e82]">
                  8+ Years
                </p>
                <p className="mt-1 text-sm font-medium text-[#6b7280]">
                  Industry Experience
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f6578] md:text-lg">
              Our mission is to help ambitious businesses grow with digital
              products and marketing systems that are simple, effective, and
              built for long-term results.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5f6578] md:text-lg">
              We combine strategy, design, and execution to create meaningful
              customer experiences that improve trust, conversions, and
              sustainable growth.
            </p>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80"
              alt="Team discussing mission and strategy"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-[0_18px_34px_rgba(46,46,130,0.16)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop&q=80"
              alt="Team planning future vision"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-[0_18px_34px_rgba(46,46,130,0.16)]"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              Our Vission
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f6578] md:text-lg">
              Our vision is to become a trusted global digital partner for
              businesses that want to innovate faster, scale smarter, and build
              lasting customer value.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5f6578] md:text-lg">
              We aim to shape future-ready brands through human-centered design,
              high-performance technology, and data-driven growth decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5f6578] md:text-lg">
              These values guide how we think, build, and collaborate with every
              client we work with.
            </p>
          </div>

          <div className="relative mx-auto mt-14 hidden h-[560px] max-w-5xl md:block">
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "left center" }} />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(-30deg)", transformOrigin: "left center" }} />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(30deg)", transformOrigin: "left center" }} />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(90deg)", transformOrigin: "left center" }} />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(150deg)", transformOrigin: "left center" }} />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[180px] bg-[#c9d7df]" style={{ transform: "translateY(-50%) rotate(-150deg)", transformOrigin: "left center" }} />

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-[#d7e5ec] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <span className="absolute left-1/2 top-[-7px] h-3 w-20 -translate-x-1/2 rounded-full bg-[#ff71a8]" />
              <span className="absolute bottom-[-7px] left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-[#ff71a8]" />
              <span className="absolute left-[-7px] top-1/2 h-20 w-3 -translate-y-1/2 rounded-full bg-[#2ea7df]" />
              <span className="absolute right-[-7px] top-1/2 h-20 w-3 -translate-y-1/2 rounded-full bg-[#2ea7df]" />
              <div className="flex h-full w-full items-center justify-center rounded-full border-[10px] border-white">
                <div className="text-center">
                  <p className="text-3xl font-black tracking-tight text-[#2f3f4a]">CORE</p>
                  <p className="text-3xl font-black tracking-tight text-[#2f3f4a]">VALUES</p>
                  <p className="mt-1 text-xs font-semibold tracking-[2px] text-[#8ba0ae] uppercase">Concept</p>
                </div>
              </div>
            </div>

            {[
              { title: "Client Focus", desc: "Putting client goals first in every decision.", pos: "left-1/2 top-1 -translate-x-1/2", color: "#ff71a8" },
              { title: "Innovation", desc: "Solving complex problems with fresh thinking.", pos: "right-6 top-24", color: "#2ea7df" },
              { title: "Excellence", desc: "Delivering quality in every detail and output.", pos: "right-6 bottom-24", color: "#31c7bf" },
              { title: "Accountability", desc: "Owning timelines, outcomes, and commitments.", pos: "left-1/2 bottom-1 -translate-x-1/2", color: "#ff71a8" },
              { title: "Partnership", desc: "Working closely as an extension of your team.", pos: "left-6 bottom-24", color: "#2ea7df" },
              { title: "Transparency", desc: "Communicating clearly at every project stage.", pos: "left-6 top-24", color: "#31c7bf" },
            ].map((item) => (
              <article key={item.title} className={`absolute w-52 text-center ${item.pos}`}>
                <span
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 bg-white shadow-sm"
                  style={{ borderColor: item.color }}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                </span>
                <h3 className="mt-3 text-base font-bold text-[#2e2e82]">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#6f778a]">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:hidden">
            {[
              { title: "Client Focus", desc: "Putting client goals first in every decision." },
              { title: "Innovation", desc: "Solving complex problems with fresh thinking." },
              { title: "Excellence", desc: "Delivering quality in every detail and output." },
              { title: "Accountability", desc: "Owning timelines, outcomes, and commitments." },
              { title: "Partnership", desc: "Working closely as an extension of your team." },
              { title: "Transparency", desc: "Communicating clearly at every project stage." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#e1e5ff] bg-[#f8f9ff] p-6">
                <h3 className="text-lg font-bold text-[#2e2e82]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f6578]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
