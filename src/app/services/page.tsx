import Header from '@/src/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

            <path d="M0 0 L71 0 L89 20 L69 100 L0 100 Z"></path>
          </svg>
        </div>

        <Header />

        <div className="hero">
          <div className="hero-left">
            <h1>
              <span className="yellow">Services</span>
              <span className="white">That Drive Growth</span>
            </h1>
            <p>
              We help brands plan, design, and build high-performing digital
              experiences. From brand strategy to development and growth
              marketing, our services are focused on measurable business
              results.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="btn-get-started">Book a Free Call</Link>
              <Link href="/services" className="link-learn">
                View Services
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="shape-container">
              <div className="shape-content">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                  alt="Team discussing digital service strategy"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services relative overflow-hidden bg-[#f3f3f6] px-6 py-24 md:px-10 lg:px-20">
        <div className="pointer-events-none absolute -left-28 top-1/3 h-[620px] w-[620px] rounded-full bg-[#efdfe5]" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-[430px] w-[560px] rounded-[45%] bg-[#e8e7f1]" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-[#141320]/80 md:text-lg">
            We are a boutique team that writes stories that have been created so that you can achieve your goals.
          </p>

          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4 xl:items-end">
            {[
              ["Strategy", "#f44348", "M4 7v10m0-7h8l-1.6 1.8L12 13H4"],
              ["Marketing", "#f5c433", "M4 14l7-2 2-5 2 5 5 2-5 2-2 5-2-5-7-2Z"],
              ["Product Design", "#20be96", "M12 20c0-4.5 0-8 4-8a4 4 0 1 0-4-4m0 12a2 2 0 1 0 0-4"],
              ["Branding", "#6a62ea", "M7.5 18h8a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6 1.3A3 3 0 0 0 7.5 18Z"],
            ].map(([title, color, iconPath], index) => (
              <article
                key={title}
                className={`rounded-xl p-8 text-center text-white shadow-[0_20px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2 ${
                  index % 2 === 1 ? "xl:-translate-y-10" : "xl:translate-y-10"
                }`}
                style={{ backgroundColor: color }}
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 fill-none stroke-white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={iconPath} />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/90 md:text-base">
                  We help your company reflect its true self through tone of voice, copywriting and storytelling.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbfc] px-6 py-24 md:px-10 lg:px-20">
        

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-extrabold tracking-[1.2px] text-[#f5a623] uppercase">
              Delivery Framework
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              How We Deliver Results
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5f6578] md:text-lg">
              A structured system that keeps strategy, execution, and growth
              aligned from kickoff to long-term scaling.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <span className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-8 hidden h-[2px] bg-gradient-to-r from-[#f44348] via-[#f5c433] to-[#20be96] md:block" />
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We audit your current brand, product, and market to find high-impact opportunities and remove guesswork.",
                color: "#f44348",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We execute in clear milestones with transparent communication, quality checks, and fast delivery cycles.",
                color: "#f5c433",
              },
              {
                step: "03",
                title: "Optimize & Scale",
                desc: "After launch, we track real performance data and optimize continuously for conversion and business growth.",
                color: "#20be96",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative rounded-3xl border border-[#e3e7ff] bg-white p-7 shadow-[0_18px_28px_rgba(46,46,130,0.09)] transition duration-300 hover:-translate-y-1"
              >
                <span
                  className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-[0_10px_20px_rgba(0,0,0,0.14)]"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-[#2e2e82] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6578] md:text-base">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
              Why Brands Choose Us
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f6578] md:text-lg">
              We combine strategic thinking with practical execution to deliver
              work that looks great, performs better, and supports business
              growth.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Clear communication and transparent delivery process",
                "Modern design and development with performance focus",
                "Data-led optimization to improve conversion outcomes",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-[#e3e7ff] bg-[#f8f9ff] px-5 py-4 text-sm leading-7 text-[#475569] md:text-base"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#e3e7ff] bg-[#f8f9ff] p-8 shadow-[0_16px_28px_rgba(46,46,130,0.08)]">
            <p className="text-sm font-bold tracking-[1px] text-[#f5a623] uppercase">
              Performance Snapshot
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {[
                ["120+", "Projects Delivered"],
                ["95%", "Client Satisfaction"],
                ["2x", "Faster Launch Cycle"],
                ["40%+", "Avg. Growth Uplift"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-white p-4 text-center shadow-[0_8px_16px_rgba(46,46,130,0.08)]">
                  <p className="text-3xl font-black text-[#2e2e82]">{value}</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.8px] text-[#6b7280] uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default page
