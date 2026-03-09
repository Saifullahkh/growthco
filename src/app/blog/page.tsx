import Image from "next/image";
import Link from "next/link";
import Header from "@/src/components/Header";


export default function BlogPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#111]">
      <section className="page">
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
              <span className="yellow">Blog</span>
              <span className="white">Insights For Growth</span>
            </h1>
            <p>
              Discover practical articles on strategy, design, development, and
              marketing to help your business scale with confidence.
            </p>
            <div className="cta-row">
              <Link href="/blog#latest-articles" className="btn-get-started">Read Latest</Link>
              <Link href="/blog#popular-topics" className="link-learn">
                Explore Topics
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="shape-container">
              <div className="shape-content">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80"
                  alt="Person writing strategy notes"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8faff] px-6 py-24 md:px-10 lg:px-20">
        

        <div className="relative mx-auto max-w-6xl ">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#fff3d8] px-3 py-1 text-xs font-extrabold tracking-[1px] text-[#aa7110] uppercase">
                  Editorial Spotlight
                </span>
                <span className="rounded-full border border-[#dfe3ff] px-3 py-1 text-xs font-semibold tracking-[0.7px] text-[#66718f] uppercase">
                  Conversion Strategy
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
                Build a Website That Converts Visitors Into Customers
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5f6578] md:text-lg">
                A complete practical breakdown of messaging hierarchy, trust
                structure, and UX flow improvements that directly impact lead
                generation and conversion quality.
              </p>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-4">
                {[
                  ["+42%", "Average Conversion Lift"],
                  ["3.1s", "Faster Page Experience"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-[#e3e7ff] bg-[#f9faff] px-4 py-3">
                    <p className="text-2xl font-black text-[#2e2e82]">{value}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.8px] text-[#6f7692] uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/blog#latest-articles" className="rounded-full bg-[#2e2e82] px-8 py-3 text-sm font-bold tracking-[0.8px] text-white uppercase shadow-[0_10px_20px_rgba(46,46,130,0.3)]">
                  Read Article
                </Link>
                <Link href="/services" className="rounded-full border border-[#ccd4ff] bg-white px-8 py-3 text-sm font-bold tracking-[0.8px] text-[#2e2e82] uppercase">
                  View Framework
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                alt="Analytics dashboard on screen"
                width={1200}
                height={900}
                className="w-full rounded-3xl object-cover shadow-[0_18px_30px_rgba(46,46,130,0.14)]"
              />
              <div className="absolute -bottom-5 left-6 rounded-xl border border-[#dfe4ff] bg-white px-4 py-3 shadow-[0_12px_24px_rgba(46,46,130,0.12)]">
                <p className="text-xs font-semibold tracking-[0.7px] text-[#6f7895] uppercase">
                  Reading Time
                </p>
                <p className="mt-1 text-sm font-bold text-[#2e2e82]">8 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-articles" className="bg-white px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black text-[#2e2e82] sm:text-4xl md:text-5xl">
                Latest Articles
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f6578] md:text-lg">
                Actionable reads for founders, marketers, and product teams.
              </p>
            </div>
            <Link href="/blog#latest-articles" className="rounded-full border border-[#cfd7ff] px-6 py-2.5 text-sm font-bold tracking-[0.7px] text-[#2e2e82] uppercase">
              View All Posts
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-[#dfe4ff] bg-[#f8f9ff] shadow-[0_14px_26px_rgba(46,46,130,0.08)] lg:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&auto=format&fit=crop&q=80"
                alt="Team discussing design decisions"
                width={1400}
                height={800}
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <p className="text-xs font-semibold tracking-[1px] text-[#6a73a0] uppercase">
                  UX Strategy
                </p>
                <h3 className="mt-2 text-2xl font-black leading-snug text-[#2e2e82]">
                  5 UX Principles That Improve User Retention
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6578] md:text-base">
                  Learn how onboarding clarity, visual hierarchy, and faster
                  feedback loops increase product engagement and reduce churn.
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              {[
                ["Growth", "Scaling Marketing with Data-Driven Decisions"],
                ["Brand", "How Positioning Impacts Revenue and Retention"],
              ].map(([tag, title]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#e1e6ff] bg-[#f8f9ff] p-6 shadow-[0_10px_20px_rgba(46,46,130,0.08)]"
                >
                  <p className="text-xs font-semibold tracking-[1.1px] text-[#6a73a0] uppercase">
                    {tag}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[#2e2e82]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6578]">
                    A concise guide with practical actions your team can execute
                    this week.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-topics" className="bg-[#f5f7ff] px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#dfe4ff] bg-white p-8 shadow-[0_16px_28px_rgba(46,46,130,0.08)] md:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
                Popular Topics
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f6578] md:text-lg">
                Browse the categories most requested by founders and growth
                teams.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Conversion Optimization",
                  "Brand Positioning",
                  "UI/UX Best Practices",
                  "Performance Marketing",
                  "Landing Page Strategy",
                  "Product-Led Growth",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-[#d3dbff] bg-[#f8f9ff] px-4 py-2 text-sm font-semibold text-[#2e2e82]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["72%", "Readers are founders"],
                ["4.8/5", "Average article rating"],
                ["12k+", "Monthly blog visits"],
                ["3x", "Return readership growth"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[#e1e6ff] bg-[#f9faff] p-4">
                  <p className="text-2xl font-black text-[#2e2e82]">{value}</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.8px] text-[#6f7895] uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2e2e82] to-[#24245f] px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-white/10 px-8 py-12 text-center backdrop-blur-sm md:px-14">
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Want New Insights Weekly?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Join our newsletter and get practical growth ideas directly in your
            inbox.
          </p>
          <div className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm text-[#2e2e82] outline-none"
            />
            <Link href="/contact" className="rounded-full bg-[#f5c518] px-8 py-3 text-sm font-extrabold tracking-[0.8px] text-[#2e2e82] uppercase">
              Subscribe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
