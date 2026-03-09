"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/Header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      accent: "#7bbb43",
      name: "Ahmed Raza",
      role: "CTO, InnovateTech",
      text: "The team's ability to translate complex business requirements into sleek digital solutions is unmatched. Highly recommended!"
    },
    {
      accent: "#33a7d8",
      name: "Sarah Jenkins",
      role: "Founder, Bloom Studio",
      text: "Working with them was a game changer. Our conversion rates increased by 40% within the first month of launch."
    },
    {
      accent: "#efa72f",
      name: "David Chen",
      role: "Marketing Manager, E-Com Pro",
      text: "Professional, timely, and incredibly skilled. They truly care about the success of your business."
    },
    {
      accent: "#8e44ad",
      name: "Fatima Noor",
      role: "Designer, CreativeX",
      text: "An absolute pleasure to work with. They transformed our vision into a stunning website that our users love."
    },
    {
      accent: "#e74c3c",
      name: "Mark Johnson",
      role: "CEO, StartUp Hub",
      text: "Top-notch communication and development. They don't just build websites; they build digital assets that grow."
    }
  ];

 const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };
  return (
    <main className="overflow-x-hidden bg-white text-[15px] leading-relaxed text-[#111] md:text-base">
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
  d="M0 0 L71 0 L89 20 L69 100 L0 100 Z">
</path>


<path 
  className="block lg:hidden"
  d="M0 0 L100 0 L110 20 L69 100 L0 100 Z">
</path>

            </svg>
        </div>

       <Header />
 
        <div className="hero">
            <div className="hero-left">
                <h1>
                    <span className="yellow">Grow</span>
                    <span className="white">Your Business<br />With Us</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore .
                </p>
                <div className="cta-row">
                    <Link href="/contact" className="btn-get-started">Get Started</Link>
                    <Link href="/about" className="link-learn">Learn More</Link>
                </div>
            </div>

            <div className="hero-right">
                <div className="shape-container">
                    <div className="shape-content">
                        <Image src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzfGVufDB8fDB8fHww"
                            alt="" width={500} height={400} />
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Service section */}
      <section className="services relative overflow-hidden bg-[#f3f3f6] px-6 py-24 md:px-10 lg:px-20">
  
        {/* Background Shapes */}
        <div className="pointer-events-none absolute -left-28 top-1/3 h-[620px] w-[620px] rounded-full bg-[#efdfe5]" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-[430px] w-[560px] rounded-[45%] bg-[#e8e7f1]" />

        <div className="relative mx-auto max-w-6xl">
          
          {/* Heading */}
          <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-[#141320]/80 md:text-lg">
            We are a boutique team that writes stories that have been created so that you can achieve your goals.
          </p>

          {/* Cards */}
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
                
                {/* Icon */}
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

                {/* Title */}
                <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>

                {/* Text */}
                <p className="mt-4 text-sm leading-7 text-white/90 md:text-base">
                  We help your company reflect its true self through tone of voice, copywriting and storytelling.
                </p>

              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#fdfdfd] px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=60"
              alt="Team discussing business strategy"
              className="w-full rounded-3xl object-cover shadow-[18px_18px_0_0_#f5c518]"
              width={1200}
              height={800}
            />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">We Help Businesses Grow</h2>
            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              Our team provides powerful strategies and digital solutions to help companies scale faster
              and reach their audience globally.
            </p>
            <Link href="/about" className="mt-8 inline-block rounded-full bg-[#f5c518] px-8 py-3 text-sm font-extrabold tracking-[0.8px] text-[#2e2e82] uppercase">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2e2e82] to-[#1a1a4d] px-6 py-20 text-white md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ["250+", "Projects Completed"],
            ["120+", "Happy Clients"],
            ["15+", "Team Members"],
            ["8+", "Years Experience"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-extrabold leading-none text-[#f5c518] sm:text-5xl">{value}</p>
              <p className="mt-2 text-sm font-semibold tracking-[1.4px] text-white/75 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff] px-6 py-20">
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 z-20 hidden h-14 w-10 -translate-y-1/2 items-center justify-center bg-black/10 hover:bg-black/20 text-2xl md:flex rounded-r-lg"> &#8249; </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 z-20 hidden h-14 w-10 -translate-y-1/2 items-center justify-center bg-black/10 hover:bg-black/20 text-2xl md:flex rounded-l-lg"> &#8250; </button>
      
      <div className="mx-auto max-w-6xl overflow-hidden">
        <div className="text-center">
          <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
            Client Feedback <span className="text-[#e49d2d]">& Testimonial</span>
          </h2>
          <p className="mx-auto mt-4 text-base leading-8 text-gray-600 md:text-lg">
            Trusted by industry leaders to deliver excellence and scale business operations globally.
          </p>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-3"
          >
            {testimonials.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <article key={index} className={`relative rounded-[30px] bg-[#ece3d7] mt-5 px-8 pt-10 pb-8 shadow-[0_18px_30px_rgba(0,0,0,0.08)] ${index === 0 ? "rotate-[-1.5deg]" : index === 2 ? "rotate-[1.5deg]" : ""}`}>
              <span className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full text-3xl text-white" style={{ backgroundColor: item.accent }}> &ldquo; </span>
              <h3 className="text-xl font-bold text-[#151515] md:text-2xl">{item.name}</h3>
              <p className="mt-1 text-sm text-[#8a8279]">{item.role}</p>
              <p className="mt-4 text-[#f5a623]">★★★★★</p>
              <p className="mt-5 text-sm leading-7 text-[#9a948c] md:text-base">{item.text}</p>
              <span className="absolute right-6 bottom-4 text-4xl text-[#dbd7d1]">&rdquo;</span>
            </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>

      <section className="our-process bg-[#f3f3f3] px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl md:text-5xl">Our Process</h2>
          <p className="mt-3 text-base text-[#8a8a8a]">
            A simple, transparent, and results-focused workflow that accelerates business growth.
          </p>
        </div>

        <div className="mx-auto mt-25 grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Discovery",
              color: "#df6a2e",
              desc: "We deeply analyze business goals, audience, and competition to create a clear roadmap.",
              iconType: "target",
            },
            {
              step: "02",
              title: "Planning",
              color: "#e7ad3c",
              desc: "We define features, timeline, and strategy to lock a milestone-based execution plan.",
              iconType: "idea",
            },
            {
              step: "03",
              title: "Execution",
              color: "#34b6c7",
              desc: "We deploy design, development, and marketing implementation with clear performance standards.",
              iconType: "balance",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="relative rounded-[26px] border-2 bg-white px-7 pb-8 pt-16 text-center shadow-[0_18px_30px_rgba(0,0,0,0.08)]"
              style={{ borderColor: `${item.color}88` }}
            >
              <span className="absolute left-8 top-[-48px] h-24 w-24 rounded-full border-4 bg-white text-4xl font-extrabold tracking-tight shadow-[0_8px_18px_rgba(0,0,0,0.12)] flex items-center justify-center"
                style={{ borderColor: item.color, color: item.color }}>
                {item.step}
              </span>

              <span className="absolute left-[54px] top-[-82px] h-10 w-[3px] rounded-full" style={{ backgroundColor: item.color }} />
              <span className="absolute left-[46px] top-[-92px] h-5 w-5 rounded-full" style={{ backgroundColor: item.color }} />

              <span className="absolute right-8 top-7">
                {item.iconType === "target" && (
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={item.color} strokeWidth="1.8">
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r="1.5" fill={item.color} stroke="none" />
                  </svg>
                )}
                {item.iconType === "idea" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M12 3a6 6 0 0 0-3.3 11c.7.5 1.3 1.3 1.3 2h4c0-.7.6-1.5 1.3-2A6 6 0 0 0 12 3Z" />
                  </svg>
                )}
                {item.iconType === "balance" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v14" />
                    <path d="M7 8h10" />
                    <path d="M5 8l-2 4h4l-2-4Z" />
                    <path d="M19 8l-2 4h4l-2-4Z" />
                    <path d="M9 20h6" />
                  </svg>
                )}
              </span>

              <h3 className="text-2xl font-bold uppercase tracking-[0.6px] md:text-[28px]" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#7b7b7b] md:text-base">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-10 md:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#e2e6ff] bg-[#f8f9ff] px-8 py-14 text-center shadow-[0_16px_30px_rgba(46,46,130,0.08)] md:px-14">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#2e2e82] sm:text-4xl md:text-5xl">
            Ready to take the next step?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5f6578] md:text-lg">
            Let&apos;s build something impactful together with a clear process, smart execution, and measurable growth outcomes.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[#f5c518] px-8 py-3 text-sm font-extrabold tracking-[0.8px] text-[#2e2e82] uppercase shadow-[0_10px_20px_rgba(245,197,24,0.35)] transition hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}
