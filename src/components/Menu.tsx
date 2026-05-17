import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  {
    id: 1,
    name: "Sourdough Loaf",
    description: "72-hour fermented, crispy crust, soft crumb",
    price: "₹280",
    badge: "Bestseller",
    emoji: "🍞",
  },
  {
    id: 2,
    name: "Butter Croissant",
    description: "French-style, 27 layers of pure butter pastry",
    price: "₹120",
    badge: "Daily Fresh",
    emoji: "🥐",
  },
  {
    id: 3,
    name: "Dark Chocolate Tart",
    description: "Belgian chocolate, shortcrust pastry, served chilled",
    price: "₹180",
    badge: "Chef's Pick",
    emoji: "🍫",
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    description: "Cream cheese frosting, baked fresh every morning",
    price: "₹150",
    badge: "Popular",
    emoji: "🌀",
  },
  {
    id: 5,
    name: "Custom Celebration Cake",
    description: "Design your own — 3 days advance order required",
    price: "From ₹1,200",
    badge: "Order Ahead",
    emoji: "🎂",
  },
  {
    id: 6,
    name: "Multigrain Sandwich Loaf",
    description: "Seeds, oats, whole wheat — healthy and hearty",
    price: "₹220",
    badge: "Healthy",
    emoji: "🌾",
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium text-sm uppercase tracking-wide">
            What we bake
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mt-2">
            Fresh from the oven
          </h2>
          <p className="text-stone-500 mt-4 max-w-md mx-auto">
            Everything is baked in small batches every morning. 
            Sell out by noon — so come early.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="border-stone-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">

                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                    {item.badge}
                  </Badge>
                </div>

                <h3 className="font-semibold text-stone-800 text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <p className="font-bold text-amber-500 text-lg">
                  {item.price}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}