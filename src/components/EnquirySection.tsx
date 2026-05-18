import EnquiryForm from "@/components/EnquiryForm"

export default function EnquirySection() {
  return (
    <section id="enquiry" className="py-24 bg-stone-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left - text */}
        <div>
          <span className="text-amber-500 font-medium text-sm uppercase tracking-wide">
            Get in touch
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">
            Place an order or ask us anything
          </h2>
          <p className="text-stone-400 mt-4 leading-relaxed">
            Custom cakes, bulk orders, corporate catering — we handle it all.
            Fill in the form and we'll get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-4 mt-8 text-stone-400 text-sm">
            <p>📍 12, Baker Street, Chennai - 600001</p>
            <p>📞 +91 8989898989</p>
            <p>✉️ hello@crumbandco.in</p>
            <p>🕐 Mon–Sat: 7am – 7pm</p>
          </div>
        </div>

        {/* Right - form */}
        <EnquiryForm />

      </div>
    </section>
  )
}