import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen bg-amber-50 flex items-center justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text content */}
        <div className="flex flex-col gap-6">
          <span className="text-amber-500 font-medium tracking-wide text-sm uppercase">
            Fresh baked daily
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 leading-tight">
            Baked with love, <br />
            <span className="text-amber-500">served with joy</span>
          </h1>

          <p className="text-stone-500 text-lg leading-relaxed">
            Artisan breads, pastries, and cakes made from scratch
            every morning. No preservatives. Just real ingredients
            and old family recipes.
          </p>

          <div className="flex gap-4">
            {/* Scrolls to menu section */}
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-base">
              <Link href="#menu">See Our Menu</Link>
            </Button>

            {/* Scrolls to about section */}
            <Button asChild variant="outline" className="px-8 py-6 text-base border-stone-300">
              <Link href="#about">Our Story</Link>
            </Button>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-amber-100 flex items-center justify-center">
          <span className="text-6xl">🥐</span>
        </div>

      </div>
    </section>
  )
}