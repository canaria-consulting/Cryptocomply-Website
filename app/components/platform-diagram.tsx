"use client"

import Image from "next/image"

export default function PlatformDiagram() {
  const topBoxes = ["REQUEST INFORMATION", "SCREENING", "ONGOING MONITORING", "AI DECISION SUPPORT"]

  const bottomBoxes = [
    {
      title: "ON-CHAIN DATA",
      icons: [
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
      ],
    },
    {
      title: "SANCTION LISTS",
      icons: [
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
      ],
    },
    {
      title: "ADVERSE MEDIA",
      icons: [
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
      ],
    },
    {
      title: "CUSTOM RISK SETTINGS",
      icons: [
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
        "/placeholder.svg?height=40&width=40",
      ],
    },
  ]

  // Common text style for all labels - using font-medium
  const labelClass = "text-xs font-medium tracking-wider text-center"

  // The exact same gradient as used in the CTA section
  const ctaGradient = "bg-gradient-to-r from-[#9aad00] to-[#7a8a00]"

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-normal text-center mb-16 text-[#2c2e2e]">
        Your One-Stop Due Diligence Platform
      </h2>

      <div className="space-y-4 select-none">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {topBoxes.map((text) => (
            <div key={text} className="flex items-center justify-center h-16 bg-[#bed903]/10">
              <span className={`${labelClass} text-[#2c2e2e]`}>{text}</span>
            </div>
          ))}
        </div>

        {/* Middle Section - Single Box */}
        <div className="flex items-center justify-center h-16 bg-[#bed903]/20">
          <span className={`${labelClass} text-[#2c2e2e]`}>SMART DUE DILIGENCE</span>
        </div>

        {/* Unified Data Banner - Using the exact same gradient as the CTA section */}
        <div className={`flex items-center justify-center h-16 ${ctaGradient}`}>
          <span className={`${labelClass} text-white`}>UNIFIED DATA</span>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bottomBoxes.map((box) => (
            <div key={box.title} className="bg-gray-100">
              <div className="flex items-center justify-center h-12 px-2">
                <span className={`${labelClass} text-[#2c2e2e]`}>{box.title}</span>
              </div>
              <div className="flex justify-center gap-3 py-3">
                {box.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={icon || "/placeholder.svg"}
                      alt={`Integration icon ${index + 1}`}
                      width={32}
                      height={32}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
