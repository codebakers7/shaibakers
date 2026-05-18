"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"


export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in name, email and message.")
      return
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.")
      return
    }

    setLoading(true)
    setError("")

    const { error } = await supabase
      .from("enquiries")
      .insert(formData)

    setLoading(false)

    if (error) {
      setError("Something went wrong. Please try again.")
    } else {
  setFormData({ name: "", email: "", phone: "", message: "" })
  setSuccess(true)
}
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <p className="text-5xl mb-4">✅</p>
        <h3 className="text-2xl font-bold text-stone-800 mb-2">
          Enquiry received!
        </h3>
        <p className="text-stone-500">
          We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <Card className="border-stone-700 bg-stone-800 shadow-xl shadow-black/20">
      <CardContent className="p-8 flex flex-col gap-4">
     <Input
  name="name"
  placeholder="Your name"
  value={formData.name}
  onChange={handleChange}
  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-amber-500"
/>
<Input
  name="email"
  type="email"
  placeholder="Your email"
  value={formData.email}
  onChange={handleChange}
  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-amber-500"
/>
<Input
  name="phone"
  placeholder="Phone number (optional)"
  value={formData.phone}
  onChange={handleChange}
  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-amber-500"
/>
<Textarea
  name="message"
  placeholder="Tell us what you need — custom cake, bulk order, catering..."
  rows={4}
  value={formData.message}
  onChange={handleChange}
  className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400 focus:border-amber-500"
/>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-600 text-white w-full py-6 text-base"
        >
          {loading ? "Sending..." : "Send Enquiry →"}
        </Button>
      </CardContent>
    </Card>
  )
}