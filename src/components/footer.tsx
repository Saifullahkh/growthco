import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#12123d] px-6 py-16 text-white md:px-10 lg:px-20">
      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-2xl font-extrabold tracking-wide text-[#f5c518]">GROWTH CO.</p>
          <p className="mt-5 max-w-sm leading-7 text-white/70">
            We provide modern digital solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-white/75">
            <li>
              <Link href="/" className="transition hover:pl-1 hover:text-[#f5c518]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:pl-1 hover:text-[#f5c518]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:pl-1 hover:text-[#f5c518]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:pl-1 hover:text-[#f5c518]">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold">Services</h4>
          <ul className="space-y-3 text-white/75">
            <li>
              <Link href="/services" className="transition hover:pl-1 hover:text-[#f5c518]">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:pl-1 hover:text-[#f5c518]">
                SEO Optimization
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:pl-1 hover:text-[#f5c518]">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:pl-1 hover:text-[#f5c518]">
                Content Writing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-3 text-white/75">
            <li>Karachi, Pakistan</li>
            <li>+92 300 1234567</li>
            <li>info@company.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
        <p>&copy; 2026 Growth Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
