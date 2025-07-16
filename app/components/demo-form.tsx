"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FormData {
  email: string
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  message: string
}

export default function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Check if email is entered (and not just whitespace)
  useEffect(() => {
    if (formData.email.trim()) {
      setShowAdditionalFields(true)
    }
  }, [formData.email])

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "Please complete this required field."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Email must be formatted correctly."
    }

    if (showAdditionalFields) {
      // Only validate additional fields if they're shown
      if (!formData.firstName) newErrors.firstName = "Please complete this required field."
      if (!formData.lastName) newErrors.lastName = "Please complete this required field."
      if (!formData.companyName) newErrors.companyName = "Please complete this required field."
      if (!formData.jobTitle) newErrors.jobTitle = "Please complete this required field."
      // Message is optional, so no validation needed
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Send data to the API endpoint with trailing slash
      const response = await fetch("https://api-dev.cryptocomply.co/api/bizdev/leads/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          email: formData.email,
          first_name: formData.firstName,
          job_title: formData.jobTitle,
          last_name: formData.lastName,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      // Handle successful submission
      setIsSubmitted(true)
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        jobTitle: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitError("There was an error submitting your request. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="text-center py-4">
          <h3 className="text-2xl font-normal mb-2 text-white">Thank you!</h3>
          <p className="text-white/80">We'll be in touch shortly to schedule your demo.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="block text-base font-normal text-white">
              Work Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white"
            />
            {errors.email && <p className="text-sm text-white mt-1">{errors.email}</p>}
          </div>

          {/* Additional Fields */}
          <div
            className={cn(
              "space-y-6 transition-all duration-500 ease-in-out",
              showAdditionalFields ? "opacity-100 max-h-[800px]" : "opacity-0 max-h-0 overflow-hidden",
            )}
          >
            {/* First Name */}
            <div className="space-y-2 text-left">
              <label htmlFor="firstName" className="block text-base font-normal text-white">
                First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              {errors.firstName && <p className="text-sm text-white mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="space-y-2 text-left">
              <label htmlFor="lastName" className="block text-base font-normal text-white">
                Last Name*
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              {errors.lastName && <p className="text-sm text-white mt-1">{errors.lastName}</p>}
            </div>

            {/* Company Name */}
            <div className="space-y-2 text-left">
              <label htmlFor="companyName" className="block text-base font-normal text-white">
                Company Name*
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              {errors.companyName && <p className="text-sm text-white mt-1">{errors.companyName}</p>}
            </div>

            {/* Job Title */}
            <div className="space-y-2 text-left">
              <label htmlFor="jobTitle" className="block text-base font-normal text-white">
                Job Title*
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              {errors.jobTitle && <p className="text-sm text-white mt-1">{errors.jobTitle}</p>}
            </div>

            {/* Message - New Field */}
            <div className="space-y-2 text-left">
              <label htmlFor="message" className="block text-base font-normal text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your specific needs or questions..."
                className="w-full bg-transparent border-b border-white text-white placeholder:text-white/50 focus:outline-none focus:border-white py-2 resize-none"
              />
            </div>
          </div>

          {/* Submit Error Message */}
          {submitError && (
            <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-md text-sm">
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold bg-white text-[#2c2e2e] hover:bg-white/90 rounded-md"
          >
            {isSubmitting ? "Processing..." : "Get a Demo"}
          </Button>
        </form>
      )}
    </div>
  )
}
