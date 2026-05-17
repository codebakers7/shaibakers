import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg mb-2">
            Crumb <span className="text-amber-500">&</span> Co.
          </h3>
          <p className="text-sm leading-relaxed">
            Artisan bakery in Chennai. Baked fresh daily since 1987.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#menu" className="hover:text-amber-500 transition-colors">Menu</Link>
            <Link href="#about" className="hover:text-amber-500 transition-colors">About</Link>
            <Link href="#enquiry" className="hover:text-amber-500 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Find Us</h4>
          <div className="flex flex-col gap-2 text-sm">
            <p>📍 12, Baker Street, Chennai</p>
            <p>📞 +91 9898989898</p>
            <p>🕐 Mon–Sat: 7am – 7pm</p>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-stone-800 mt-8 pt-6 text-sm text-center">
        © 2026 Crumb & Co. All rights reserved.
      </div>
    </footer>
  )
}