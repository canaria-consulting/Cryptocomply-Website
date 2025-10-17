"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PlatformMockup from "../components/platform-mockup"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    businessEmail: "",
    company: "",
    country: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit registration")
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error("Registration error:", err)
      setError(err instanceof Error ? err.message : "Failed to submit registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Platform Mockup Background */}
      <PlatformMockup />

      {/* Registration Form Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {isSubmitted ? (
            <div className="bg-white rounded-lg shadow-2xl p-8 space-y-6 text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-[#2c2e2e] font-helvetica">Registration Received!</h2>
                <p className="text-gray-600 font-helvetica">
                  Our team will reach out shortly to activate your account.
                </p>
              </div>
              <div className="pt-4 space-y-3">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full border-[#2c2e2e] text-[#2c2e2e] hover:bg-gray-50 font-medium py-6 rounded-md bg-transparent font-helvetica"
                  >
                    Return to Home
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 font-helvetica">
                  Questions?{" "}
                  <a
                    href="https://www.canariaconsulting.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bed903] hover:underline"
                  >
                    Contact our team
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-2xl p-8 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-[#bed903] flex items-center gap-1 transition-colors font-helvetica"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                  </Link>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#bed903] rounded-lg flex items-center justify-center">
                    <Image src="/cryptocomply_icon.png" alt="CryptoComply" width={24} height={24} />
                  </div>
                  <h1 className="text-2xl font-bold text-[#2c2e2e] font-helvetica">Welcome to CryptoComply</h1>
                </div>
                <p className="text-sm text-gray-600 font-helvetica">Meet your new AI compliance assistant.</p>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 font-helvetica">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 font-helvetica">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 font-helvetica">
                    Job Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="Compliance Officer"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessEmail" className="text-sm font-medium text-gray-700 font-helvetica">
                    Business Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 font-helvetica">
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="ACME Corp"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700 font-helvetica">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="rounded-md font-helvetica"
                    placeholder="United States"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600 font-helvetica">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#bed903] hover:bg-[#9aad00] text-[#2c2e2e] font-bold text-base py-6 rounded-md transition-colors font-helvetica"
                >
                  {isSubmitting ? "Submitting..." : "Access Platform"}
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center font-helvetica">
                By registering, you agree to our{" "}
                <Link href="/terms-of-service" className="text-[#bed903] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[#bed903] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
