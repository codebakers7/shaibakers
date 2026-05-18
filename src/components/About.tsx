import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    id: 1,
    emoji: "🌾",
    title: "Local Ingredients",
    description: "We source flour, dairy and eggs from farms within 50km of our bakery.",
  },
  {
    id: 2,
    emoji: "⏰",
    title: "Baked Fresh Daily",
    description: "Every item is made from scratch before 6am. No day-old bread here.",
  },
  {
    id: 3,
    emoji: "👨‍👩‍👧",
    title: "Family Recipes",
    description: "Three generations of baking tradition in every bite.",
  },
]

export default function About() {
  return (
      <section id="about" className="py-24 bg-stone-800 px-6">  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left - image placeholder */}
        <div className="h-96 rounded-3xl bg-amber-100 flex items-center justify-center text-8xl">
          🧑‍🍳
        </div>

        {/* Right - text */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-amber-500 font-medium text-sm uppercase tracking-wide">
              Our story
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              Baking since 1987
            </h2>
            <p className="text-stone-400 mt-4 leading-relaxed">
              What started as a small family kitchen in Chennai has grown 
              into a beloved neighbourhood bakery. We still use the same 
              recipes, the same oven, and the same love.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {values.map((value) => (
              <Card key={value.id} className="border-stone-100">
                <CardContent className="p-4 flex items-start gap-4">
                  <span className="text-2xl">{value.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-stone-400 text-sm mt-1">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}