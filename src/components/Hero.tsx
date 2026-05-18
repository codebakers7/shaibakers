"use client"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-stone-900 flex items-center justify-center px-6 pt-16 overflow-hidden">

      {/* Floating background orbs */}
      <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] bg-amber-500 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-[-60px] left-[-40px] w-[300px] h-[300px] bg-amber-400 rounded-full opacity-10 animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[40%] left-[10%] w-[150px] h-[150px] bg-amber-300 rounded-full opacity-5 animate-pulse [animation-delay:4s]" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          {/* Floating badge */}
          <span className="inline-flex w-fit items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm animate-bounce [animation-duration:3s]">
            ✦ Fresh baked daily
          </span>

          {/* 3D text shadow headline */}
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight text-white"
            style={{
              textShadow: `
                0 1px 0 #ccc,
                0 2px 0 #c9c9c9,
                0 3px 0 #bbb,
                0 4px 0 #b9b9b9,
                0 5px 0 #aaa,
                0 6px 1px rgba(0,0,0,0.1),
                0 0 5px rgba(0,0,0,0.1),
                0 1px 3px rgba(0,0,0,0.3),
                0 3px 5px rgba(0,0,0,0.2),
                0 5px 10px rgba(0,0,0,0.25),
                0 20px 20px rgba(0,0,0,0.15)
              `
            }}
          >
            Baked with love, <br />
            <span className="text-amber-400">served with joy</span>
          </h1>

          <p className="text-stone-400 text-lg leading-relaxed">
            Artisan breads, pastries, and cakes made from scratch
            every morning. No preservatives. Just real ingredients
            and old family recipes.
          </p>
<div className="flex gap-4">
  <Button
    onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-base shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
  >
    See Our Menu
  </Button>
  <Button
    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
    variant="outline"
    className="px-8 py-6 text-base border-stone-600 text-stone-300 hover:bg-stone-800 transition-all hover:scale-105"
  >
    Our Story
  </Button>
</div>
        </div>

        {/* Right — floating image box */}
        <div className="relative h-96 md:h-[500px]">
          {/* Main card — floats up and down */}
          <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 to-amber-900/20 border border-amber-500/20 backdrop-blur-sm flex items-center justify-center animate-[float_4s_ease-in-out_infinite]"
            style={{ animation: "float 4s ease-in-out infinite" }}>
            <span className="text-8xl">🥐</span>
          </div>

          {/* Depth card behind */}
          <div className="absolute inset-0 rounded-3xl bg-amber-500/5 border border-amber-500/10 transform translate-x-4 translate-y-4" />

          {/* Floating stat badges */}
          <div className="absolute top-6 left-0 bg-stone-800/90 backdrop-blur-sm border border-stone-700 rounded-2xl px-4 py-3 shadow-xl animate-[float_3s_ease-in-out_infinite]"
            style={{ animation: "float 3s ease-in-out infinite 1s" }}>
            <p className="text-amber-400 font-bold text-lg">35+</p>
            <p className="text-stone-400 text-xs">Years baking</p>
          </div>

          <div className="absolute bottom-8 right-0 bg-stone-800/90 backdrop-blur-sm border border-stone-700 rounded-2xl px-4 py-3 shadow-xl"
            style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}>
            <p className="text-amber-400 font-bold text-lg">2,000+</p>
            <p className="text-stone-400 text-xs">Happy customers</p>
          </div>
        </div>

      </div>

      {/* Float keyframe */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
      `}</style>

    </section>
  )
}