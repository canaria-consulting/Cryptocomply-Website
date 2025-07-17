"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, Sliders, Sparkles, ArrowRight, Menu, Shield } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import DemoForm from "./components/demo-form"
import RotatingTicker from "./components/rotating-ticker"
import OrganicBackground from "./components/organic-background"
import HowItWorksSections from "./components/how-it-works-sections"
import HeroMockup from "./components/hero-mockup"
import CanariaBanner from "./components/canaria-banner"
import { ClientLogos } from "./components/client-logos"
import WhoItsForSection from "./components/who-its-for-section"
import HeroClientLogos from "./components/hero-client-logos"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Update viewport height on mount and resize
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight)
    }

    // Initial set
    updateViewportHeight()

    // Update on resize
    window.addEventListener("resize", updateViewportHeight)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Canaria Banner */}
      <CanariaBanner />

      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/cryptocomply_logo.svg"
              alt="CryptoComply Logo"
              width={250}
              height={100}
              className="text-[#bed903]"
              style={{ transform: "translateY(5px)" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#who-its-for" className="text-[13px] font-medium hover:text-[#bed903] uppercase">
              WHO IT'S FOR
            </Link>
            <Link href="#features" className="text-[13px] font-medium hover:text-[#bed903] uppercase">
              WHY CRYPTOCOMPLY
            </Link>
            <Link href="#how-it-works" className="text-[13px] font-medium hover:text-[#bed903] uppercase">
              HOW IT WORKS
            </Link>
            <Link href="#platform" className="text-[13px] font-medium hover:text-[#bed903] uppercase">
              PLATFORM
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://app.cryptocomply.co/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium hover:text-[#bed903] uppercase"
            >
              LOG IN
            </a>
            <Link href="#get-demo">
              <Button
                variant="outline"
                className="border-[#2c2e2e] text-[#2c2e2e] hover:bg-transparent hover:border-[#2c2e2e] font-medium tracking-wide px-4 sm:px-6 py-1.5 text-[13px] text-[13px] rounded-none transition-all duration-300 hover:shadow-[0_0_0_1px_#2c2e2e] group bg-transparent"
              >
                GET A DEMO
                <ArrowRight className="ml-2 h-4 w-4 text-[#bed903] transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2c2e2e] focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 sm:px-6 animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#who-its-for"
                className="text-[13px] font-medium hover:text-[#bed903] uppercase py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                WHO IT'S FOR
              </Link>
              <Link
                href="#features"
                className="text-[13px] font-medium hover:text-[#bed903] uppercase py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                WHY CRYPTOCOMPLY
              </Link>
              <Link
                href="#how-it-works"
                className="text-[13px] font-medium hover:text-[#bed903] uppercase py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOW IT WORKS
              </Link>
              <Link
                href="#platform"
                className="text-[13px] font-medium hover:text-[#bed903] uppercase py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PLATFORM
              </Link>
              <Link href="#get-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-[#2c2e2e] text-[#2c2e2e] hover:bg-transparent hover:border-[#2c2e2e] font-medium tracking-wide px-4 py-1.5 text-[13px] rounded-none transition-all duration-300 hover:shadow-[0_0_0_1px_#2c2e2e] group bg-transparent"
                >
                  GET A DEMO
                  <ArrowRight className="ml-2 h-4 w-4 text-[#bed903] transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero section with dynamic height */}
        <section className="relative bg-[#2c2e2e] flex items-center" style={{ minHeight: `calc(100vh - 64px)` }}>
          <OrganicBackground />
          <div className="container px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
              <div className="w-full lg:w-1/2 lg:max-w-2xl">
                <div className="space-y-6 md:space-y-8">
                  <h1 className="flex flex-col items-start text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-4">
                      <span className="inline-flex text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-[1.1]">
                        Know Your
                      </span>
                      <RotatingTicker
                        words={[
                          "Customer",
                          "Counterparty",
                          "Vendor",
                          "Employee",
                          "Investor",
                          "Protocol",
                          "Smart Contract",
                          "Liquidity Pool",
                        ]}
                      />
                    </div>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      The Full Picture of Your Web3 Risk, In One Platform
                    </span>
                  </h1>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl font-light">
                    CryptoComply combines on-chain analytics, watchlist screening, adverse media, and expert human
                    support to automate full-spectrum due diligence and accelerate compliance decisions.
                  </h3>
                </div>
              </div>

              {/* Mockup - Responsive Container */}
              <div className="w-full lg:w-1/2 max-w-[500px] mx-auto lg:mx-0 mt-8 lg:mt-0">
                <div className="transform lg:translate-y-0 lg:translate-x-0 lg:scale-100">
                  <HeroMockup />
                </div>
              </div>
            </div>

            {/* Hero Client Logos */}
            <HeroClientLogos />
          </div>
        </section>

        {/* Who It's For Section */}
        <div id="who-its-for">
          <WhoItsForSection />
        </div>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 lg:py-32 bg-[#f3f3f3]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center mb-12 md:mb-20 text-[#2c2e2e]">
              Why CryptoComply
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-16">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bed903] rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-[#2c2e2e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#2c2e2e]">
                  One platform for comprehensive risk and decisions
                </h3>
                <p className="text-base font-light text-[#2c2e2e] max-w-lg">
                  CryptoComply integrates seamlessly with your on-chain analytics tools like Chainalysis, TRM, and
                  Elliptic, then adds off-chain screening agains 250+ global sanctions/watchlists, adverse media
                  sources, and secure data collection workflows.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bed903] rounded-lg flex items-center justify-center">
                  <Bell className="h-6 w-6 sm:h-7 sm:w-7 text-[#2c2e2e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#2c2e2e]">
                  Continuous monitoring and custom re-screening
                </h3>
                <p className="text-base font-light text-[#2c2e2e] max-w-lg">
                  Monitor counterparties and blockchain addresses through automated re-screening at your chosen cadence.
                  Get alerts when new on-chain or off-chain risks emerge.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bed903] rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-[#2c2e2e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#2c2e2e]">AI-generated risk summaries</h3>
                <p className="text-base font-light text-[#2c2e2e] max-w-lg">
                  Get AI-backed insights aligned to your policy for each wallet and entity. Generate clear summaries to
                  accelerate accept, escalate, or reject decisions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bed903] rounded-lg flex items-center justify-center">
                  <Sliders className="h-6 w-6 sm:h-7 sm:w-7 text-[#2c2e2e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#2c2e2e]">Built-in compliance team</h3>
                <p className="text-base font-light text-[#2c2e2e] max-w-lg">
                  Access built-in human support for complex reviews and escalations. Our compliance veterans help you
                  navigate edge cases and maintain consistent decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <div id="how-it-works" className="pt-16 md:pt-24 lg:pt-32">
          <HowItWorksSections />
        </div>

        {/* Product Tour Video Section */}
        <section id="platform" className="py-16 md:py-24 lg:py-32 bg-[#f3f3f3]">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c2e2e]">
                  See CryptoComply in Action
                </h2>
              </div>

              {/* Video Container */}
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/9xBH2LPpsBQ"
                    title="CryptoComply: Web3 due diligence software that comes with a compliance team"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Canaria Section */}
        <section className="pt-16 !pb-8 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Link
                href="https://www.canariaconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center hover:text-[#bed903] transition-colors"
              >
                <div className="h-10 flex items-center">
                  <Image
                    src="/canaria.svg"
                    alt="Canaria"
                    width={40}
                    height={40}
                    className="h-[60%] w-auto object-contain"
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <span
                  className="font-bold text-2xl text-primary"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    transform: "translateX(-2px)",
                  }}
                >
                  Canaria
                </span>
              </Link>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#2c2e2e]">CryptoComply is a product of Canaria</h2>
              <p className="text-base sm:text-lg text-[#2c2e2e]/80 max-w-2xl mx-auto">
                CryptoComply is built by Canaria — a team of crypto compliance veterans who built this platform to solve
                our own challenges. Now it's powering smarter due diligence across Web3.
              </p>
              <div className="pt-4">
                <Link
                  href="https://www.canariaconsulting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2c2e2e] hover:text-[#bed903] transition-colors text-sm font-medium"
                >
                  Learn more about Canaria
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <ClientLogos />
        </div>

        {/* CTA Section */}
        <section id="get-demo" className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#9aad00] to-[#7a8a00]">
          <div className="container px-4 md:px-6 max-w-[720px]">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                Make Risk-Based Decisions Faster
              </h2>
              <p className="text-lg sm:text-xl font-normal text-white max-w-2xl mx-auto">
                Book a no-strings-attached demo.
              </p>
              <DemoForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/cryptocomply_logo.svg"
                  alt="CryptoComply Logo"
                  width={200}
                  height={80}
                  className="text-[#bed903]"
                />
              </Link>
              <div className="flex items-center text-sm text-[#2c2e2e]/70">
                <span className="mr-3">A product of</span>
                <div className="flex items-center">
                  <div className="h-5 flex items-center">
                    <Image
                      src="/canaria.svg"
                      alt="Canaria"
                      width={16}
                      height={16}
                      className="h-[60%] w-auto object-contain"
                      style={{ marginRight: "10px" }}
                    />
                  </div>
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: 700,
                      transform: "translateX(-2px)",
                    }}
                  >
                    Canaria
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase text-[#2c2e2e]">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#get-demo" className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]">
                    Get a Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase text-[#2c2e2e]">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.canariaconsulting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]"
                  >
                    About Canaria
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.canariaconsulting.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]">
                    Terms
                  </Link>{" "}
                  <span className="text-sm text-[#2c2e2e]/70">and</span>{" "}
                  <Link href="/privacy-policy" className="text-sm text-[#2c2e2e]/70 hover:text-[#bed903]">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="text-sm text-[#2c2e2e]/70">
              © {new Date().getFullYear()} Canaria Consulting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
