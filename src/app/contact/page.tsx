import Header from "@/src/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
              <span className="yellow">Contact</span>
              <span className="white">Let&apos;s Work Together</span>
            </h1>
            <p>
              Share your goals with us and get a clear plan for strategy,
              design, and development tailored to your business.
            </p>
            <div className="cta-row">
              <Link href="/contact#contact-form" className="btn-get-started">Start a Project</Link>
              <Link href="/contact#contact-form" className="link-learn">
                Book a Call
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="shape-container">
              <div className="shape-content">
                <Image
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&auto=format&fit=crop&q=80"
                  alt="Team discussing project details"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="relative overflow-hidden bg-[#f5f7ff] px-6 py-24 md:px-10 lg:px-20">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#e8ebff]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#efe4ff]" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-[#dfe4ff] bg-white p-8 shadow-[0_18px_32px_rgba(46,46,130,0.1)] md:p-10">
            <p className="text-sm font-extrabold tracking-[1px] text-[#f5a623] uppercase">
              Project Inquiry
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5f6578] md:text-base">
              Tell us what you need and we will respond with a clear next-step
              plan within one business day.
            </p>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-[#d9def8] bg-[#f9faff] px-4 py-3 text-sm outline-none transition focus:border-[#2e2e82]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#d9def8] bg-[#f9faff] px-4 py-3 text-sm outline-none transition focus:border-[#2e2e82]"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-[#d9def8] bg-[#f9faff] px-4 py-3 text-sm outline-none transition focus:border-[#2e2e82]"
              />
              <textarea
                placeholder="Tell us about your project goals, timeline, and budget"
                rows={5}
                className="w-full rounded-xl border border-[#d9def8] bg-[#f9faff] px-4 py-3 text-sm outline-none transition focus:border-[#2e2e82]"
              />
              <button
                type="button"
                className="rounded-full bg-[#2e2e82] px-8 py-3 text-sm font-bold tracking-[0.7px] text-white uppercase shadow-[0_10px_20px_rgba(46,46,130,0.28)]"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#dfe3ff] bg-white p-8 shadow-[0_12px_24px_rgba(46,46,130,0.08)]">
              <h3 className="text-2xl font-black text-[#2e2e82]">Contact Info</h3>
              <div className="mt-6 space-y-5 text-[#5f6578]">
                <p>
                  <span className="block text-sm font-semibold text-[#2e2e82]">
                    Email
                  </span>
                  hello@company.com
                </p>
                <p>
                  <span className="block text-sm font-semibold text-[#2e2e82]">
                    Phone
                  </span>
                  +1 (000) 123-4567
                </p>
                <p>
                  <span className="block text-sm font-semibold text-[#2e2e82]">
                    Office
                  </span>
                  123 Business Avenue, New York, NY
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#dfe3ff] bg-[#2e2e82] p-8 text-white shadow-[0_12px_24px_rgba(46,46,130,0.15)]">
              <h3 className="text-2xl font-black">Office Hours</h3>
              <p className="mt-4 text-white/85">
                Monday - Friday: 9:00 AM to 6:00 PM
              </p>
              <p className="mt-1 text-white/85">Saturday: 10:00 AM to 2:00 PM</p>
              <p className="mt-6 text-sm text-white/70">
                Need urgent support? Email us and mark the subject as
                high-priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#dfe3ff] bg-[#f8f9ff] px-8 py-12 text-center shadow-[0_12px_24px_rgba(46,46,130,0.08)] md:px-14">
          <h2 className="text-3xl font-black leading-tight text-[#2e2e82] sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5f6578] md:text-lg">
            Let&apos;s discuss your goals and build a practical roadmap for your
            next digital growth phase.
          </p>
          <Link href="/contact#contact-form" className="mt-7 inline-block rounded-full bg-[#f5c518] px-8 py-3 text-sm font-extrabold tracking-[0.8px] text-[#2e2e82] uppercase">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
