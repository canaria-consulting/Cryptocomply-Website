import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./safari-fix.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "CryptoComply - Smart Due Diligence for Web3",
  description:
    "Automate your wallet and counterparty due diligence with AI-driven onboarding, ongoing monitoring, and risk-based decisions.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      //{ url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      //{ url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
  },
  openGraph: {
    title: "CryptoComply - Smart Due Diligence for Web3",
    description:
      "Automate your wallet and counterparty due diligence with AI-driven onboarding, ongoing monitoring, and risk-based decisions.",
    url: "https://cryptocomply.co/",
    siteName: "CryptoComply",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CryptoComply - Smart Due Diligence for Web3",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "CryptoComply - Smart Due Diligence for Web3",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoComply - Smart Due Diligence for Web3",
    description:
      "Automate your wallet and counterparty due diligence with AI-driven onboarding, ongoing monitoring, and risk-based decisions.",
    images: ["/og-image.png", "/og-image-square.png"],
    creator: "@cryptocomply",
    site: "@cryptocomply",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Explicit favicon links for maximum browser compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bed903" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:logo" content="/og-image.png" />
      </head>
      <body className="font-helvetica bg-white" style={{ backgroundColor: "white" }}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
