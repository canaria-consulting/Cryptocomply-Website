"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/cryptocomply_logo.svg"
              alt="CryptoComply Logo"
              width={200}
              height={80}
              className="text-[#bed903]"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-[#2c2e2e] hover:text-[#bed903] transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <h1 className="mb-8 text-3xl font-bold text-[#2c2e2e] md:text-4xl">Terms of Service</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-[#2c2e2e]/70 mb-8">Last Updated: June 4, 2025</p>

            {/* Introduction */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#2c2e2e]/80">
                  Welcome to CryptoComply, your AI-powered compliance platform for Web3 due diligence. These Terms of
                  Service ("Terms") govern your access to and use of the CryptoComply platform ("CryptoComply", "we",
                  "us", "our"). By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">1. Overview</h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    CryptoComply is a software-as-a-service ("SaaS") platform offering AI- and rule-based compliance
                    tools to support onboarding, monitoring, and due diligence for wallets, counterparties, and third
                    parties. The services are intended for business use by compliance professionals and teams in the
                    digital asset space.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Services */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">2. Services</h2>
                <p className="text-[#2c2e2e]/80 mb-4">CryptoComply offers features including but not limited to:</p>
                <div className="bg-white border border-gray-200 rounded p-4 mb-4">
                  <ul className="space-y-2 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Wallet screening and re-screening</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Counterparty and third-party monitoring</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Adverse media and sanctions alerts</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>AI-generated compliance summaries and risk scores</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Documented decision tracking for compliance actions</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Configurable thresholds, risk categories, and screening cadences</div>
                    </li>
                  </ul>
                </div>
                <p className="text-[#2c2e2e]/80">
                  We reserve the right to modify, enhance, or discontinue services at any time with or without notice.
                </p>
              </div>
            </section>

            {/* 3. User Responsibilities */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  3. User Responsibilities
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">You agree to:</p>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <ul className="space-y-3 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Use CryptoComply only in compliance with all applicable laws and regulations.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Not use the platform to engage in illegal, abusive, or unauthorized activity.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Accept that CryptoComply is a support tool that does not replace legal counsel or human
                        judgment.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Acknowledge that <strong>you are solely</strong> responsible for the information and data you or your
                        counterparties input into the platform.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Understand that <strong>we are not liable</strong> for inaccuracies, omissions, or outdated information entered
                        by you or third parties.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Account Access and Security */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  4. Account Access and Security
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    You are responsible for maintaining the confidentiality of your account credentials. You agree to
                    promptly notify us of any unauthorized use or suspected breach of your account. We are not liable
                    for any loss or damage arising from your failure to comply with this responsibility.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Data and Privacy */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">5. Data and Privacy</h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    We handle data in accordance with our{" "}
                    <Link href="/privacy-policy" className="text-[#bed903] hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    . You retain ownership of your data, but grant us a non-exclusive, royalty-free license to process,
                    store, and use your data solely for the purpose of providing services. You acknowledge that some
                    data (e.g. blockchain activity, media results, sanctions data) is obtained from third-party sources
                    and may not always be complete, accurate, or up to date.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Disclaimers */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">6. Disclaimers</h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80 mb-4">
                    CryptoComply makes no warranties – express, implied, or statutory – regarding the reliability,
                    accuracy, or completeness of outputs generated by the platform. Our services and outputs (including
                    scores, summaries, alerts) are <strong>informational and advisory</strong> in nature. Decisions made using the
                    platform remain solely your responsibility.
                  </p>
                  <p className="text-[#2c2e2e]/80 mb-4">We are not responsible for:</p>
                  <ul className="space-y-2 text-[#2c2e2e]/80 mb-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Errors in third-party data sources</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Regulatory interpretations or changes</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Delays, outages, or disruptions beyond our control</div>
                    </li>
                  </ul>
                  <p className="text-[#2c2e2e]/80">CryptoComply does not provide legal, tax, or regulatory advice.</p>
                </div>
              </div>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  7. Limitation of Liability
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80 mb-4">To the fullest extent permitted by law:</p>
                  <ul className="space-y-3 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        CryptoComply and Canaria Consulting, LLC shall not be liable for indirect, incidental, special,
                        punitive, or consequential damages arising out of or in connection with the use of the platform,
                        whether based in contract, tort, strict liability, or otherwise.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Our total liability for any claim shall not exceed the amount paid by you to use the service in
                        the 12 months preceding the claim.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Intellectual Property */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  8. Intellectual Property
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    All intellectual property related to CryptoComply – including code, content, trademarks, and product
                    design – is the exclusive property of Canaria Consulting, LLC or its licensors. You receive a
                    limited, non-exclusive, non-transferable license to use the platform in accordance with these Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Suspension and Termination */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  9. Suspension and Termination
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80 mb-4">
                    We may suspend or terminate your access to CryptoComply without notice if:
                  </p>
                  <ul className="space-y-2 text-[#2c2e2e]/80 mb-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>You breach these Terms</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>You engage in activity that threatens the integrity or security of the platform</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Required by law or regulatory authority</div>
                    </li>
                  </ul>
                  <p className="text-[#2c2e2e]/80">
                    You may terminate your use at any time, but no refunds will be issued for any unused portion of your
                    subscription.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Modifications to Terms */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  10. Modifications to Terms
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    We may update these Terms from time to time. If we make material changes, we will notify you via the
                    platform or email. Continued use of CryptoComply after changes constitutes acceptance of the updated
                    Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* 11. Governing Law and Disputes */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  11. Governing Law and Disputes
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    These Terms are governed by the laws of the State of California, without regard to conflict-of-law
                    principles. Any disputes shall be resolved in the state or federal courts located in San Diego,
                    California.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Export Control and Sanctions Compliance */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  12. Export Control and Sanctions Compliance
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80 mb-4">
                    CryptoComply is operated from the United States and is subject to U.S. export control laws,
                    including the Export Administration Regulations (EAR), and U.S. economic sanctions administered by
                    the Office of Foreign Assets Control (OFAC). CryptoComply is also designed to support compliance
                    with applicable sanctions regulations from other jurisdictions, including the United Kingdom,
                    European Union, and United Nations.
                  </p>
                  <p className="text-[#2c2e2e]/80 mb-4">
                    By accessing or using CryptoComply, you represent and warrant that:
                  </p>
                  <ul className="space-y-3 text-[#2c2e2e]/80 mb-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        You are not located in, organized under the laws of, or ordinarily resident in any country or
                        territory that is subject to comprehensive U.S. sanctions or embargoes (including, without
                        limitation, Cuba, Iran, North Korea, Syria, or the Crimea, Donetsk, and Luhansk regions of
                        Ukraine).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        You are not listed on any U.S. or other applicable government restricted party lists, such as
                        OFAC's Specially Designated Nationals (SDN) List, the BIS Denied Persons List, or similar EU or
                        UK sanctions lists.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        You will not use CryptoComply to facilitate or support transactions or relationships with
                        individuals, entities, or jurisdictions subject to applicable sanctions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        You will not use CryptoComply to evade or circumvent export control or sanctions restrictions or
                        assist others in doing so.
                      </div>
                    </li>
                  </ul>
                  <p className="text-[#2c2e2e]/80 mb-4">
                    You agree that your use of CryptoComply must comply with all applicable export controls, trade
                    sanctions, and related laws. You are solely responsible for ensuring that your access to and use of
                    the platform complies with all laws applicable in your jurisdiction, including any local
                    restrictions related to sanctions, crypto activity, and compliance software.
                  </p>
                  <p className="text-[#2c2e2e]/80">
                    We reserve the right to restrict, suspend, or terminate access to CryptoComply for any user or
                    activity that we believe violates export control or sanctions laws or poses undue regulatory or
                    legal risk.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. Acceptable Use and Usage Restrictions */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  13. Acceptable Use and Usage Restrictions
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80 mb-4">You agree that you will not:</p>
                  <ul className="space-y-3 text-[#2c2e2e]/80 mb-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Copy, modify, reverse engineer, decompile, disassemble, or attempt to derive source code from
                        the platform or its components.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Access the platform or use any data obtained from it for the purpose of building a competing
                        product or service.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Use automated systems (e.g., bots, scrapers) to access the platform in a manner that sends more
                        request messages than a human could reasonably produce.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Interfere with the platform's integrity, security, or performance.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Use the service in any way that could damage, disable, or impair the service or interfere with
                        any other user's use.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Upload or transmit any malicious code, viruses, or harmful data.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Use the platform in violation of applicable laws or regulations, including anti-money laundering
                        (AML), counter-terrorist financing (CTF), privacy, and sanctions laws.
                      </div>
                    </li>
                  </ul>
                  <p className="text-[#2c2e2e]/80">
                    We may monitor usage to enforce these Terms and protect the security and integrity of the platform.
                  </p>
                </div>
              </div>
            </section>

            {/* 14. Contact Us */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">14. Contact Us</h2>
                <div className="bg-white border-2 border-[#bed903]/30 rounded-lg p-4">
                  <p className="text-[#2c2e2e]/80 mb-3">For questions about these Terms, please contact:</p>
                  <div className="space-y-2">
                    <p className="text-[#2c2e2e]/80">
                      <strong>Company:</strong> CryptoComply / Canaria Consulting LLC
                    </p>
                    <p className="text-[#2c2e2e]/80">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:support@cryptocomply.co" className="text-[#bed903] hover:underline font-medium">
                        support@cryptocomply.co
                      </a>
                    </p>
                    <p className="text-[#2c2e2e]/80">
                      <strong>Website:</strong>{" "}
                      <a href="https://cryptocomply.co" className="text-[#bed903] hover:underline font-medium">
                        https://cryptocomply.co
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-[#2c2e2e]/70">
            © {new Date().getFullYear()} Canaria Consulting LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
