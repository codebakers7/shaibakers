"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  { id: 1, name: "Sourdough Loaf", description: "72-hour fermented, crispy crust, soft crumb", price: "₹280", badge: "Bestseller", emoji: "🍞", bg: "from-amber-900/80 to-amber-800/80" },
  { id: 2, name: "Butter Croissant", description: "French-style, 27 layers of pure butter pastry", price: "₹120", badge: "Daily Fresh", emoji: "🥐", bg: "from-yellow-900/80 to-yellow-800/80" },
  { id: 3, name: "Dark Chocolate Tart", description: "Belgian chocolate, shortcrust pastry, served chilled", price: "₹180", badge: "Chef's Pick", emoji: "🍫", bg: "from-stone-900/80 to-stone-800/80" },
  { id: 4, name: "Cinnamon Roll", description: "Cream cheese frosting, baked fresh every morning", price: "₹150", badge: "Popular", emoji: "🌀", bg: "from-orange-900/80 to-orange-800/80" },
  { id: 5, name: "Custom Cake", description: "Design your own — 3 days advance order required", price: "From ₹1,200", badge: "Order Ahead", emoji: "🎂", bg: "from-pink-900/80 to-pink-800/80" },
  { id: 6, name: "Multigrain Loaf", description: "Seeds, oats, whole wheat — healthy and hearty", price: "₹220", badge: "Healthy", emoji: "🌾", bg: "from-green-900/80 to-green-800/80" },
]

function FlipCard({ item }: { item: typeof menuItems[0] }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="h-52 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
      // hover for desktop
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl bg-stone-800 border border-stone-700 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start justify-between">
            <span className="text-5xl">{item.emoji}</span>
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
              {item.badge}
            </Badge>
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">{item.name}</h3>
            <p className="text-stone-400 text-sm mt-1">{item.description}</p>
          </div>
          {/* Mobile hint */}
          <p className="text-stone-600 text-xs mt-2 md:hidden">Tap to see price</p>
        </div>

       {/* Back */}
<div
  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.bg} border border-amber-500/30 p-6 flex flex-col items-center justify-center gap-3`}
  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
>
  <span className="text-6xl">{item.emoji}</span>
  <p className="text-amber-400 font-bold text-3xl">{item.price}</p>
  <p className="text-stone-300 text-sm">{item.name}</p>
  <div
    className="mt-2 bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-full cursor-pointer"
    onClick={(e) => {
      e.stopPropagation()  // ← stops bubbling to card's onClick
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })
    }}
  >
    Add to enquiry →
  </div>
</div>
      </div>
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-stone-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium text-sm uppercase tracking-wide">
            What we bake
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">
            Fresh from the oven
          </h2>
          <p className="text-stone-400 mt-4 max-w-md mx-auto">
            Tap or hover cards to see prices. Everything baked before 6am.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}