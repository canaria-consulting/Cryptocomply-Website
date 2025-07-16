"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

const sections = [
  {
    number: "01",
    title: "Collect and organize counterparty data securely",
    description:
      "Gather comprehensive information from individuals, businesses, and wallets through secure, customizable workflows that integrate with your existing processes.",
    features: [
      "Securely collect key details from individuals, businesses, and wallets.",
      "Customize workflows to align with your existing processes.",
      "Centralize compliance documentation in one platform.",
      "Integrate with your existing systems for seamless data flow.",
    ],
    mockupTitle: "Counterparty Request For Information",
    mockupType: "form",
    bgColor: "bg-white",
  },
  {
    number: "02",
    title: "Screen parties and wallets against all risk sources",
    description:
      "Automatically screen counterparties and wallets against on-chain signals, 250+ sanctions/watchlists, adverse media, and other risk sources through integrated tools and intelligence feeds.",
    features: [
      "Comprehensive screening against on-chain signals and 250+ sanctions/watchlists.",
      "Seamless integration with your existing compliance tools.",
      "Continuous monitoring with scheduled re-screening.",
      "Multi-source intelligence feeds for enhanced risk detection.",
    ],
    mockupTitle: "Wallet Screening",
    mockupType: "dashboard",
    bgColor: "bg-[#f3f3f3]",
  },
  {
    number: "03",
    title: "Get AI-backed insights and act fast (accept, escalate, reject)",
    description:
      "Receive AI-generated risk summaries aligned to your policy, with clear recommendations to accelerate decision-making and maintain consistent compliance standards.",
    features: [
      "AI-powered risk summaries aligned to your policy.",
      "Clear recommendations to accelerate decision-making.",
      "Maintain consistent compliance standards.",
      "Access to human expert support for complex cases.",
    ],
    mockupTitle: "AI Wallet Summarization",
    mockupType: "decision",
    bgColor: "bg-white",
  },
]

// Individual fields
const individualFields = [
  "Full Name",
  "Email Address",
  "Wallet Address",
  "Date of Birth",
  "Citizenship",
  "Country of Residence",
]

// Business fields
const businessFields = [
  "Full Legal Name",
  "DBA/Trade Name",
  "Email",
  "Entity Formation Type",
  "Place of Establishment",
  "Date of Establishment",
]

// Platform mockup components
const FormMockup = ({ title }: { title: string }) => {
  const [selectedType, setSelectedType] = useState<"individual" | "business">("individual")

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-gray-50 border-b px-6 py-4">
        <h4 className="font-medium text-[#2c2e2e]">{title}</h4>
      </div>
      <div className="flex-1 p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Counterparty Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedType("individual")}
                className="flex-1 border rounded-md px-4 py-2 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <span>Individual</span>
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      selectedType === "individual" ? "border-[#9aad00]" : "border-gray-300"
                    }`}
                  >
                    {selectedType === "individual" && (
                      <div className="w-full h-full rounded-full bg-[#9aad00] scale-50" />
                    )}
                  </div>
                </div>
              </button>
              <button
                onClick={() => setSelectedType("business")}
                className="flex-1 border rounded-md px-4 py-2 bg-white shadow-sm transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <span>Business</span>
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      selectedType === "business" ? "border-[#9aad00]" : "border-gray-300"
                    }`}
                  >
                    {selectedType === "business" && (
                      <div className="w-full h-full rounded-full bg-[#9aad00] scale-50" />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Required Information</label>
            <div className="space-y-2">
              {(selectedType === "individual" ? individualFields : businessFields).map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white shadow-sm transition-all duration-300 ease-in-out"
                  style={{
                    transform: `translateY(${i * 2}px)`,
                    opacity: 1,
                  }}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-[#9aad00] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#9aad00] stroke-[2.5px]" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardMockup = ({ title }: { title: string }) => {
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Define the risk values that will be used consistently throughout the component
  const lowRiskValue = 38659.84
  const mediumRiskValue = 55788.1
  const severeRiskValue = 20886.55

  // Calculate percentages
  const total = lowRiskValue + mediumRiskValue + severeRiskValue
  const lowPercent = ((lowRiskValue / total) * 100).toFixed(1)
  const mediumPercent = ((mediumRiskValue / total) * 100).toFixed(1)
  const severePercent = ((severeRiskValue / total) * 100).toFixed(1)

  // Format currency based on screen size
  const formatCurrency = (value: number) => {
    return isMobile
      ? `$${Math.round(value).toLocaleString()}`
      : `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  // Format percentage based on screen size
  const formatPercent = (value: string) => {
    return isMobile ? `${Math.round(Number.parseFloat(value))}%` : `${value}%`
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-gray-50 border-b px-6 py-4">
        <h4 className="font-medium text-[#2c2e2e]">{title}</h4>
      </div>
      <div className="flex-1 p-6">
        <div className="space-y-3 sm:space-y-4">
          {/* Risk Exposure with Legend */}
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-sm font-medium">Risk Exposure</h6>
            <div className="flex items-center gap-3 text-[9px] xs:text-[10px]">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 bg-green-100 rounded-full"></div>
                <span>Low</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 bg-yellow-100 rounded-full"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 bg-red-100 rounded-full"></div>
                <span>Severe</span>
              </div>
            </div>
          </div>

          {/* Risk Summary Bar - Proportional to percentages */}
          <div className="mb-3 border rounded overflow-hidden">
            <div className="flex h-8 text-[8px] xs:text-[9px] sm:text-[10px]">
              <div
                className="bg-green-100 flex items-center justify-center px-1 text-center"
                style={{ width: `${lowPercent}%` }}
              >
                <span className="font-medium whitespace-nowrap">{formatCurrency(lowRiskValue)}</span>
              </div>
              <div
                className="bg-yellow-100 flex items-center justify-center px-1 text-center"
                style={{ width: `${mediumPercent}%` }}
              >
                <span className="font-medium whitespace-nowrap">{formatCurrency(mediumRiskValue)}</span>
              </div>
              <div
                className="bg-red-100 flex items-center justify-center px-1 text-center"
                style={{ width: `${severePercent}%` }}
              >
                <span className="font-medium whitespace-nowrap">{formatCurrency(severeRiskValue)}</span>
              </div>
            </div>
          </div>

          {/* Counterparty Exposure Table - Without Header */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-[10px] sm:text-xs">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-2 font-medium text-gray-500">CATEGORY</th>
                  <th className="text-left p-2 font-medium text-gray-500">RISK</th>
                  <th className="text-right p-2 font-medium text-gray-500">VALUE</th>
                  <th className="p-2 font-medium text-gray-500">
                    <div className="grid grid-cols-2 items-center">
                      <div className="text-left"></div>
                      <div className="text-right">%</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Sanctioned Jurisdiction</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-red-100 text-red-700 rounded text-[10px] font-medium">
                      SEVERE
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(severeRiskValue)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-red-50 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{ width: `${severePercent}%` }}></div>
                      </div>
                      <div className="text-right">{formatPercent(severePercent)}</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Decentralized Exchange</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">
                      MEDIUM
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(mediumRiskValue)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-yellow-50 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${mediumPercent}%` }}></div>
                      </div>
                      <div className="text-right">{formatPercent(mediumPercent)}</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Exchange</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(28123.62)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "24.4%" }}></div>
                      </div>
                      <div className="text-right">24.4%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Bridge</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(8383.18)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "7.3%" }}></div>
                      </div>
                      <div className="text-right">7.3%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Smart Contract</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(866.97)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.8%" }}></div>
                      </div>
                      <div className="text-right">0.8%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Token Smart Contract</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(624.29)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.5%" }}></div>
                      </div>
                      <div className="text-right">0.5%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Fee</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(470.08)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.4%" }}></div>
                      </div>
                      <div className="text-right">0.4%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Mining</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(116.69)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.1%" }}></div>
                      </div>
                      <div className="text-right">0.1%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Lending</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(73.25)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.1%" }}></div>
                      </div>
                      <div className="text-right">0.1%</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">NFT Platform - Collection</td>
                  <td className="p-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                      LOW
                    </span>
                  </td>
                  <td className="p-2 text-right">{formatCurrency(1.75)}</td>
                  <td className="p-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="w-20 h-2 bg-green-50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "0.0%" }}></div>
                      </div>
                      <div className="text-right">0.0%</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const DecisionMockup = ({ title }: { title: string }) => (
  <div className="w-full h-full flex flex-col">
    <div className="bg-gray-50 border-b px-4 sm:px-6 py-4">
      <h4 className="font-medium text-[#2c2e2e]">{title}</h4>
    </div>
    <div className="flex-1 p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Side - Only show on larger screens */}
        <div className="hidden sm:flex flex-col space-y-4">
          {/* Wallet Name */}
          <div>
            <div className="text-xs sm:text-sm text-gray-500 mb-1">Wallet Name</div>
            <div className="text-xs sm:text-sm bg-gray-50 p-2 rounded">John's Wallet</div>
          </div>

          {/* Wallet Address */}
          <div>
            <div className="text-xs sm:text-sm text-gray-500 mb-1">Wallet Address</div>
            <div className="text-xs sm:text-sm bg-gray-50 p-2 rounded flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm truncate">0x734B41...82E7e6</span>
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 0 00-2-2h-8a2 0 00-2 2v8a2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Risk Level */}
          <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
            <div className="text-xs sm:text-sm text-gray-600">Risk Level</div>
            <div className="text-sm sm:text-lg font-medium text-red-600">Severe</div>
          </div>

          {/* Total Exposure */}
          <div className="bg-white border rounded-lg p-3 sm:p-4">
            <div className="text-xs sm:text-sm text-gray-600">Total Exposure</div>
            <div className="text-sm sm:text-lg font-medium">$114,947</div>
          </div>
        </div>

        {/* AI Analysis - Show on all screens */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-[#bed903] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2c2e2e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L7 12L12 22L17 12L12 2Z" />
                <path d="M2 12L12 7L22 12L12 17L2 12Z" />
              </svg>
            </div>
            <div>
              <h6 className="font-medium">AI Analysis</h6>
              <p className="text-xs sm:text-sm text-gray-600">Wallet Summary</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm leading-relaxed">
            <p>
              The wallet address <span className="font-mono">0x734B41E...82E7e6</span>, known as{" "}
              <span className="font-medium">John's Wallet</span>, is flagged as{" "}
              <span className="text-red-600 font-medium">Severe</span> Risk primarily due to its{" "}
              <span className="font-medium">substantial exposure to a sanctioned jurisdiction</span>.
            </p>

            <p>
              Additionally, the wallet has a notable <span className="font-medium">Medium risk</span> exposure through{" "}
              <span className="font-medium">decentralized exchange activities</span>, valued at{" "}
              <span className="font-medium">$55,788.10 (48.4%)</span>.
            </p>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="font-medium text-red-800">
                Given the Severe risk classification, it is recommended to{" "}
                <span className="font-bold">reject the engagement</span> with this wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function HowItWorksSections() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-[42px] font-normal text-[#2c2e2e]">How It Works</h2>
      </div>

      {sections.map((section, index) => (
        <section key={section.number} className={`py-32 ${section.bgColor} ${index === 0 ? "pt-20" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-[#bed903] rounded-full text-[#2c2e2e] font-bold">
                  {section.number}
                </div>
                <h3 className="text-3xl font-normal text-[#2c2e2e]">{section.title}</h3>
                <p className="text-lg font-light text-[#2c2e2e]/90">{section.description}</p>
                <ul className="space-y-4">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-[#9aad00] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#9aad00] stroke-[2.5px]" />
                      </div>
                      <span className="flex-1 text-base font-light text-[#2c2e2e] text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform Preview */}
              <div className="flex-1 w-full">
                <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-lg border border-gray-200">
                  <div className="aspect-[4/3] w-full">
                    {section.mockupType === "form" && <FormMockup title={section.mockupTitle} />}
                    {section.mockupType === "dashboard" && <DashboardMockup title={section.mockupTitle} />}
                    {section.mockupType === "decision" && <DecisionMockup title={section.mockupTitle} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
