"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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

          <h1 className="mb-8 text-3xl font-bold text-[#2c2e2e] md:text-4xl">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-[#2c2e2e]/70 mb-8">Last Updated: June 2, 2025</p>

            {/* Introduction */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Introduction
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">
                  Welcome to CryptoComply ("we," "our," or "us"), a service provided by Canaria Consulting, LLC. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                  Web3 compliance software solution and related services (collectively, the "Service").
                </p>

                <p className="text-[#2c2e2e]/80">
                  CryptoComply acts as a data controller for the personal information it collects directly from users
                  and as a data processor for information our customers input into the Service for compliance purposes.
                  Customers are responsible for ensuring they have the right to provide such data under applicable law.
                </p>
                <p className="text-[#2c2e2e]/80">
                  "Personal Data" or "personal information" refers to any information that relates to an identified or
                  identifiable individual, including as defined under applicable data protection laws such as the GDPR
                  and CCPA/CPRA.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Information We Collect
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                    Information You Provide
                  </h3>
                  <div className="bg-white border border-gray-200 rounded p-4">
                    <ul className="space-y-2 text-[#2c2e2e]/80">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>Account Information:</strong> Business contact details, user credentials, and profile
                          information
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>Business Information:</strong> Company details, compliance documentation, and
                          transaction records
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>User Content:</strong> Information you input into our platform for compliance purposes
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                    Information Automatically Collected
                  </h3>
                  <div className="bg-white border border-gray-200 rounded p-4">
                    <ul className="space-y-2 text-[#2c2e2e]/80">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>Technical Data:</strong> IP addresses, browser type, device information
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>Usage Data:</strong> Feature interaction, access logs, and platform analytics
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>Blockchain Data:</strong> Public blockchain addresses and transaction data processed
                          through our service
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  How We Use Your Information
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">We use the information we collect for the following purposes:</p>

                <div className="bg-white border border-gray-200 rounded p-4 mb-4">
                  <ul className="text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Service Provision:</strong> To provide, operate, and maintain the Service, including
                        user authentication, account setup, and customer support.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Compliance Screening:</strong> To screen names, wallet addresses, and other identifiers
                        against watchlists (e.g., sanctions, PEP, enforcement lists), public blockchain records, and
                        adverse media databases.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Ongoing Monitoring:</strong> To continuously monitor submitted or linked wallet
                        addresses and party names for updates on sanctions designations, enforcement actions, or
                        negative news.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Risk Analysis:</strong> To assess risk levels associated with parties and transactions
                        based on compliance data, behavior, or public reputation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Fraud Detection & Security:</strong> To detect, prevent, and investigate security
                        incidents, fraud, and unauthorized access or misuse of the Service.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Product Improvement:</strong> To improve our Service, develop new features, and
                        understand usage trends through aggregated analytics.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Legal & Regulatory Compliance:</strong> To comply with applicable laws, regulations, and
                        legal obligations, including responding to lawful requests from authorities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Communications:</strong> To contact you with Service-related communications, account
                        updates, or administrative notices.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Information Sharing and Disclosure
                </h2>

                <p className="text-[#2c2e2e]/80 mb-4">We may share your information with:</p>
                <div className="bg-white border border-gray-200 rounded p-4 mb-4">
                  <ul className="space-y-2 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Service providers who assist in operating our platform</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Law enforcement or regulatory bodies when legally required</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Business partners with your explicit consent</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Professional advisors (attorneys, accountants, auditors)</div>
                    </li>
                  </ul>
                </div>
                <p className="text-[#2c2e2e]/80 mb-4">We do not sell your personal information to third parties.</p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Data Security
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">
                  We implement industry-standard security measures to protect your information, including:
                </p>

                <div className="bg-white border border-gray-200 rounded p-4">
                  <ul className="text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Encryption of data in transit and at rest</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Regular security assessments and penetration testing</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Access controls and authentication mechanisms</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Secure data backup and recovery procedures</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Data Retention
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">
                  We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy
                  Policy, including to comply with our legal obligations, resolve disputes, and enforce our agreements.
                  Retention periods vary depending on the type of data:
                </p>

                <div className="bg-white border border-gray-200 rounded p-4">
                  <ul className="text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        Account and profile information: Retained until the account is deleted or inactive for 3 years
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Compliance-related documentation: Retained for up to 7 years or as required by law</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Technical and usage data: Retained for 12 months unless otherwise required</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Cookies and Tracking Technologies
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    We may use cookies and similar technologies to enhance your experience, analyze usage patterns, and
                    improve our Service. You can manage cookie preferences through your browser settings or opt-out
                    tools provided in your region.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights and Choices */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Your Rights and Choices
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">You have the right to:</p>

                <div className="bg-white border border-gray-200 rounded p-4">
                  <ul className="space-y-2 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Access your personal information</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Correct inaccurate data</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Request deletion of your data (subject to legal requirements)</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Opt-out of marketing communications</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Request exporting your data in a structured format</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* International Data Transfers */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  International Data Transfers
                </h2>
                <div className="bg-white border border-gray-200 rounded p-4">
                  <p className="text-[#2c2e2e]/80">
                    We may transfer your information to servers located outside your country of residence. We rely on
                    appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European
                    Commission for data transfers outside the EEA and UK. These clauses ensure your personal data is
                    protected when transferred internationally.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Changes to This Policy
                </h2>
                <p className="text-[#2c2e2e]/80 mb-4">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by:
                </p>

                <div className="bg-white border border-gray-200 rounded p-4">
                  <ul className="space-y-2 text-[#2c2e2e]/80">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Posting the new policy on our website</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Sending an email to registered users</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#bed903] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>Displaying a notice within our Service</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-4 flex items-center">
                  Contact Us
                </h2>
                <div className="bg-white border-2 border-[#bed903]/30 rounded-lg p-4">
                  <p className="text-[#2c2e2e]/80 mb-3">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#2c2e2e]/80">
                      <strong>Company:</strong> Canaria Consulting, LLC
                    </p>
                    <p className="text-[#2c2e2e]/80">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline font-medium">
                        privacy@cryptocomply.co
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-6 flex items-center">
                  Additional Information for Specific Jurisdictions
                </h2>

                {/* California Residents Section */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-[#2c2e2e] mb-4">California Residents</h3>
                  <p className="text-[#2c2e2e]/80 mb-6">
                    If you are a California resident and the processing of Personal Data about you is subject to the
                    California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), you have the
                    following rights:
                  </p>

                  {/* Notice at Collection */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                      Notice at Collection
                    </h4>
                    <p className="text-[#2c2e2e]/80 mb-3">
                      You have the right to receive notice of our data practices at or before the point of collection,
                      including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-[#2c2e2e]/80 mb-3">
                      <li>Categories of Personal Data collected</li>
                      <li>Purposes for collection and use</li>
                      <li>Whether information is sold or shared</li>
                      <li>Retention period for collected information</li>
                    </ul>
                    <p className="text-[#2c2e2e]/80 text-sm italic">
                      These details are provided throughout this privacy policy.
                    </p>
                  </div>

                  {/* Right to Know */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                      Right to Know
                    </h4>
                    <p className="text-[#2c2e2e]/80 mb-3">
                      You have the right to request disclosure of the Personal Data we have collected about you,
                      including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-[#2c2e2e]/80 mb-3">
                      <li>Categories of Personal Data collected</li>
                      <li>Sources of Personal Data</li>
                      <li>Business purposes for collection</li>
                      <li>Categories of third parties with whom we share Personal Data</li>
                    </ul>
                   <div className="bg-white border border-gray-200 rounded p-3">
                      <p className="text-[#2c2e2e]/80 text-sm">
                        <strong>To make a "request to know":</strong> Email us at{" "}
                        <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline">
                          privacy@cryptocomply.co
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Rights to Request Correction or Deletion */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                      Rights to Request Correction or Deletion
                    </h4>
                    <p className="text-[#2c2e2e]/80 mb-3">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1 text-[#2c2e2e]/80 mb-3">
                      <li>Request correction of inaccurate Personal Data</li>
                      <li>Request deletion of Personal Data (subject to certain exceptions)</li>
                    </ul>
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <p className="text-[#2c2e2e]/80 text-sm">
                        <strong>To make a correction or deletion request:</strong> Email us at{" "}
                        <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline">
                          privacy@cryptocomply.co
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Right to Opt-Out */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                      Right to Opt-Out / "Do Not Sell or Share My Personal Information"
                    </h4>
                    <div className="space-y-3">
                      <p className="text-[#2c2e2e]/80">
                        The CCPA/CPRA defines "sell," "share," and "personal information" broadly. While we do not sell
                        Personal Data in the traditional sense, some of our data sharing practices (such as using
                        advertising and analytics providers) may be considered "selling" or "sharing" under the
                        CCPA/CPRA.
                      </p>
                      <div className="bg-white border border-gray-200 rounded p-3">
                        <p className="text-[#2c2e2e]/80 text-sm">
                          You can exercise your right to opt out of the sale or sharing of personal information by
                          clicking the “Do Not Sell or Share My Personal Information” link on our homepage or by
                          emailing us at
                          <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline ml-2">
                            privacy@cryptocomply.co
                          </a>
                          .
                        </p>
                      </div>
                      <p className="text-[#2c2e2e]/80 text-sm">
                        We do not knowingly sell or share Personal Data of minors under 16 years of age.
                      </p>
                    </div>
                  </div>

                  {/* Right to Limit Use of Sensitive Personal Information */}
                  <div className="mb-6">
                    <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                      Right to Limit Use of Sensitive Personal Information
                    </h4>
                    <div className="space-y-3 mb-4">
                      <p className="text-[#2c2e2e]/80">
                        You have the right to limit our use of sensitive Personal Data to only what is necessary to
                        provide our services or as otherwise permitted by law. We do not collect or use Sensitive
                        Personal Information, as defined by the CCPA/CPRA (e.g., precise geolocation, government
                        identifiers, or racial/ethnic data), for any purposes other than those necessary to provide our
                        Service or comply with the law.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Authorized Agents</h5>
                        <p className="text-[#2c2e2e]/80 text-sm mb-2">
                          You may designate an authorized agent to make requests on your behalf. We will:
                        </p>
                        <ul className="text-[#2c2e2e]/80 text-sm space-y-1">
                          <li>Require proof of authorization</li>
                          <li>Verify your identity directly for certain requests</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Verification Process</h5>
                        <p className="text-[#2c2e2e]/80 text-sm mb-2">
                          To fulfill requests related to specific pieces of Personal Data, we will verify your identity
                          to the degree required by law by:
                        </p>
                        <ul className="text-[#2c2e2e]/80 text-sm space-y-1">
                          <li>Confirming requests from your registered email address</li>
                          <li>Requesting additional verification information as needed</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Non-Discrimination</h5>
                        <p className="text-[#2c2e2e]/80 text-sm">
                          We will not discriminate against you for exercising your CCPA/CPRA rights.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Shine the Light Law</h5>
                        <div className="space-y-2">
                          <p className="text-[#2c2e2e]/80 text-sm">
                            Under California Civil Code Section 1798.83 (the "Shine the Light" law), California
                            residents may request information about our disclosure of Personal Data to third parties for
                            their direct marketing purposes. We do not disclose Personal Data to third parties for their
                            direct marketing purposes as defined by this law.
                          </p>
                        </div>
                      </div>
                      <p className="text-[#2c2e2e]/80">
                        For questions about our California privacy practices, email{" "}
                        <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline">
                          privacy@cryptocomply.co
                        </a>
                        . We will respond to one request per California resident each year.
                      </p>
                    </div>
                  </div>
                  {/* Additional Rights */}
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-[#2c2e2e] mb-6 flex items-center">
                  European Economic Area Residents, UK
                </h2>

                <p className="text-[#2c2e2e]/80 mb-6">
                  If you are located in the European Union or United Kingdom, the processing of your Personal Data is
                  subject to additional rights and protections under applicable data protection laws (including GDPR and
                  UK GDPR).
                </p>

                {/* Legal Basis */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-[#2c2e2e] mb-3 border-l-4 border-[#bed903] pl-3">
                    Legal Basis for Processing
                  </h4>
                  <p className="text-[#2c2e2e]/80 mb-3">
                    We collect and process your Personal Data based on one or more of the following legal bases:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <span className="text-[#2c2e2e] font-medium text-sm">• Your consent</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <span className="text-[#2c2e2e] font-medium text-sm">• Performance of a contract with you</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <span className="text-[#2c2e2e] font-medium text-sm">
                        • Compliance with our legal obligations
                      </span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <span className="text-[#2c2e2e] font-medium text-sm">• Our legitimate business interests</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <span className="text-[#2c2e2e] font-medium text-sm">• Necessity to provide our services</span>
                    </div>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-[#2c2e2e] mb-4 border-l-4 border-[#bed903] pl-3">
                    Your Rights
                  </h4>
                  <p className="text-[#2c2e2e]/80 mb-6">Under these laws, you have the following rights:</p>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Access and Portability</h5>
                      <ul className="text-[#2c2e2e]/80 text-sm space-y-1">
                        <li>Request access to your Personal Data</li>
                        <li>
                          Receive a copy of your Personal Data in a structured, commonly used, and machine-readable
                          format
                        </li>
                        <li>Transfer your Personal Data to another service provider where technically feasible</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Control and Rectification</h5>
                      <ul className="text-[#2c2e2e]/80 text-sm space-y-1">
                        <li>Request correction of inaccurate Personal Data</li>
                        <li>Object to the processing of your Personal Data</li>
                        <li>Restrict the processing of your Personal Data under certain circumstances</li>
                        <li>Request erasure of your Personal Data ("right to be forgotten")</li>
                        <li>Withdraw your consent at any time for future processing where we rely on consent</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-[#2c2e2e] mb-2 text-[#bed903]">Special Rights</h5>
                      <p className="text-[#2c2e2e]/80 text-sm">
                        <strong>France residents:</strong> You may provide specific instructions regarding the use of
                        your Personal Data after your death.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-[#2c2e2e] mb-4 border-l-4 border-[#bed903] pl-3">
                    Exercising Your Rights
                  </h4>
                  <p className="text-[#2c2e2e]/80 mb-6">
                    We have appointed a Data Protection Officer (DPO) to oversee our privacy practices.
                  </p>
                  <p className="text-[#2c2e2e]/80 text-sm mb-2">
                    <strong>To exercise any of these rights:</strong>
                  </p>
                  <ul className="text-[#2c2e2e]/80 text-sm space-y-1">
                    <li>
                      Email our DPO at{" "}
                      <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline">
                        privacy@cryptocomply.co
                      </a>
                    </li>
                  </ul>
                  <p className="text-[#2c2e2e]/80 text-sm">
                    We will respond to your request within the timeframe required by applicable law.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-base font-medium text-[#2c2e2e] mb-4 border-l-4 border-[#bed903] pl-3">
                    Supervisory Authority
                  </h4>
                  <p className="text-[#2c2e2e]/80 mb-6">
                    While we encourage you to contact us first with any questions or concerns, you have the right to
                    lodge a complaint with your local data protection supervisory authority.
                  </p>
                  <p className="text-[#2c2e2e]/80 mb-6">
                    For more information about our data protection practices or to exercise your rights, please contact
                    our Data Protection Officer at{" "}
                    <a href="mailto:privacy@cryptocomply.co" className="text-[#bed903] hover:underline ml-2">
                      privacy@cryptocomply.co
                    </a>
                    .
                  </p>
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
