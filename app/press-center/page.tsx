"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PressCenter() {
  const pressReleases = [
    {
      title: "CryptoComply Launches Comprehensive Web3 Due Diligence Platform",
      date: "JAN 15, 2025",
      excerpt:
        "New platform combines on-chain analytics, watchlist screening, and expert human support to automate compliance decisions for Web3 businesses.",
    },
    {
      title: "Canaria Consulting Announces Strategic Partnership with Leading Blockchain Analytics Providers",
      date: "DEC 20, 2024",
      excerpt:
        "Partnership enables seamless integration with Chainalysis, TRM Labs, and Elliptic to provide comprehensive risk assessment capabilities.",
    },
    {
      title: "CryptoComply Raises Seed Funding to Accelerate Web3 Compliance Innovation",
      date: "NOV 30, 2024",
      excerpt:
        "Funding will support product development and expansion of built-in compliance team to serve growing demand for Web3 due diligence solutions.",
    },
    {
      title: "Canaria Consulting Expands Compliance Team with Former Regulatory Veterans",
      date: "NOV 10, 2024",
      excerpt:
        "New hires bring decades of experience from traditional finance and crypto compliance to strengthen CryptoComply's expert support capabilities.",
    },
    {
      title: "CryptoComply Introduces AI-Powered Risk Summaries for Faster Decision Making",
      date: "OCT 25, 2024",
      excerpt:
        "New AI features generate clear, policy-aligned risk assessments to accelerate accept, escalate, or reject decisions for compliance teams.",
    },
    {
      title: "Canaria Consulting Launches CryptoComply Beta Program",
      date: "SEP 15, 2024",
      excerpt:
        "Select Web3 companies invited to test comprehensive due diligence platform combining on-chain and off-chain intelligence.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2c2e2e]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
              <div className="h-4 w-px bg-white/20"></div>
              <h1 className="text-xl font-medium text-white">Press Center</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <button className="text-sm text-white font-medium border-b-2 border-[#bed903] pb-1">
                Press Releases
              </button>
              <button className="text-sm text-white/70 hover:text-white transition-colors">Media Resources</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Canaria Press Releases &<br />
              Statements
            </h1>
          </div>

          {/* Press Releases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {pressReleases.map((release, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-medium text-white group-hover:text-[#bed903] transition-colors leading-tight">
                    {release.title}
                  </h2>
                  <p className="text-sm text-white/60 font-medium tracking-wide">{release.date}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{release.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm">
              More press releases and statements will be added as they become available.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/cryptocomply_logo.svg"
                  alt="CryptoComply Logo"
                  width={200}
                  height={80}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
            <div className="flex items-center text-sm text-white/60">
              <span className="mr-3">A product of</span>
              <div className="flex items-center">
                <div className="h-5 flex items-center">
                  <Image
                    src="/canaria.svg"
                    alt="Canaria"
                    width={16}
                    height={16}
                    className="h-[60%] w-auto object-contain brightness-0 invert"
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <span
                  className="font-bold text-white"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    transform: "translateX(-2px)",
                  }}
                >
                  Canaria
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Canaria Consulting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
