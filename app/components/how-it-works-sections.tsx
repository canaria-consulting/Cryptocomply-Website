import type React from "react"
import { CheckCircle, MessageSquare, Send } from "lucide-react"

interface Section {
  number: string
  title: string
  description: string
  features: string[]
  mockup?: React.ReactNode
}

function ChatMockup() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#bed903] rounded-full flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-4 h-4 text-[#2c2e2e]" />
          </div>
          <div className="bg-gray-100 rounded-lg p-3 flex-1">
            <p className="text-sm text-gray-700">Which alerts in my queue should I prioritize first?</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#2c2e2e] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-white font-bold">AI</span>
          </div>
          <div className="bg-[#bed903]/10 rounded-lg p-3 flex-1">
            <p className="text-sm text-gray-700">
              Based on your compliance program, I recommend prioritizing sanctions-related alerts and those linked to
              severe adverse media first. Would you like me to surface those for you now?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t">
          <input
            type="text"
            placeholder="Ask about policies, risks, or procedures..."
            className="flex-1 text-xs bg-gray-50 border rounded px-3 py-2"
            disabled
          />
          <Send className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

function DataCollectionMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src="/images/data-collection-dashboard.jpg"
        alt="Data collection dashboard showing secure counterparty information forms"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  )
}

function RiskScreeningMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src="/images/risk-screening-interface.jpg"
        alt="Risk screening interface showing blockchain address analysis"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  )
}

function AIPolicyMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src="/images/ai-policy-assistant.jpg"
        alt="AI policy assistant showing compliance recommendations"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  )
}

function CounterpartyRequestMockup() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto border">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Request For Information</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Counterparty Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="type" className="mr-2" defaultChecked />
              <span className="text-sm">Individual</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="type" className="mr-2" />
              <span className="text-sm">Business</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Required Information</label>
          <div className="space-y-3">
            {[
              { label: "Full Name", checked: true },
              { label: "Email Address", checked: true },
              { label: "Wallet Address", checked: true },
              { label: "Date of Birth", checked: true },
              { label: "Citizenship", checked: true },
            ].map((item, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4 text-[#bed903] border-gray-300 rounded"
                  defaultChecked={item.checked}
                />
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WalletScreeningMockup() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto border">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet Screening</h3>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Risk Exposure</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Low</span>
              <span className="text-gray-600">Medium</span>
              <span className="text-gray-600">Severe</span>
            </div>

            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-600">CATEGORY</th>
                  <th className="text-left py-2 text-gray-600">RISK</th>
                  <th className="text-left py-2 text-gray-600">VALUE</th>
                  <th className="text-left py-2 text-gray-600">%</th>
                </tr>
              </thead>
              <tbody className="space-y-1">
                <tr className="border-b">
                  <td className="py-2 text-gray-700">Sanctioned Jurisdiction</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">SEVERE</span>
                  </td>
                  <td className="py-2 text-gray-700">$50,685.55</td>
                  <td className="py-2 text-gray-700">18.1%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-700">Decentralized Exchange</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">MEDIUM</span>
                  </td>
                  <td className="py-2 text-gray-700">$125,780.10</td>
                  <td className="py-2 text-gray-700">44.9%</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700">Exchange</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">LOW</span>
                  </td>
                  <td className="py-2 text-gray-700">$28,123.62</td>
                  <td className="py-2 text-gray-700">24.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIWalletSummarizationMockup() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto border">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Wallet Summarization</h3>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Wallet Name</label>
            <div className="text-sm text-gray-900">John's Wallet</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Wallet Address</label>
            <div className="text-sm text-gray-900 font-mono">bc73H941...+82F45</div>
          </div>

          <div className="flex gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Risk Level</label>
              <div className="text-sm font-medium text-red-600">Severe</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Total Exposure</label>
              <div className="text-sm font-bold text-gray-900">$114,947</div>
            </div>
          </div>
        </div>

        <div className="bg-[#bed903]/10 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-6 h-6 bg-[#bed903] rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-[#2c2e2e]">+</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">AI Analysis</h4>
              <p className="text-xs text-gray-600">Wallet Summary</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 leading-relaxed">
            <p className="mb-2">
              The wallet address bc73H941...+82F45 associated with John's Wallet, is flagged as{" "}
              <strong>Severe Risk</strong> primarily due to its substantial exposure to a sanctioned jurisdiction.
            </p>
            <p>
              Additionally, the wallet has a notable Medium risk exposure through decentralized exchange activities,
              valued at $55,768.10 (46.4%).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksSections() {
  const sections: Section[] = [
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
      mockup: <CounterpartyRequestMockup />,
    },
    {
      number: "02",
      title: "Screen parties and blockchain addresses against all risk sources",
      description:
        "Automatically screen counterparties and wallets against on-chain signals, 250+ sanctions/watchlists, adverse media, and other risk sources through integrated tools and intelligence feeds.",
      features: [
        "Comprehensive screening against on-chain signals and 250+ sanctions/watchlists.",
        "Seamless integration with your existing compliance tools.",
        "Continuous monitoring with scheduled re-screening.",
        "Multi-source intelligence feeds for enhanced risk detection.",
      ],
      mockup: <WalletScreeningMockup />,
    },
    {
      number: "03",
      title: "Get AI assistance on your policies, risk, counterparties, and alerts to act fast",
      description:
        "Get AI-generated insights mapped to your policies, with clear guidance on next steps, so you can accept, escalate, or reject relationships quickly and securely.",
      features: [
        "Policy-aware risk insights tailored to your organization's rules and appetite.",
        "Actionable recommendations to speed up decisions and reduce manual effort.",
        "Consistent standards across every compliance decision, powered by AI.",
        "Expert human support for complex or high-stakes reviews.",
      ],
      mockup: <AIWalletSummarizationMockup />,
    },
    {
      number: "04",
      title: "Have a Conversation with Your Compliance",
      description:
        "Turn static policies and manuals into an interactive experience. Instead of digging through documents and procedures, simply ask your AI assistant, and get fast, policy-aligned answers.",
      features: [
        'Ask anything: from "what risks apply to this wallet?" to "how does my AML policy treat this case?"',
        "AI-guided clarity: responses grounded in your own policies, procedures, and risk appetite.",
        "Cut complexity: translate dense compliance frameworks into simple, actionable insights.",
        "Next-gen technology: specialized AI built for crypto compliance, always available when you need it.",
      ],
      mockup: <ChatMockup />,
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c2e2e] mb-4">How It Works</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {sections.map((section, index) => (
            <div
              key={section.number}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#bed903] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#2c2e2e]">{section.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#2c2e2e]">{section.title}</h3>
                </div>

                <p className="text-base sm:text-lg text-[#2c2e2e]/80 leading-relaxed">{section.description}</p>

                <div className="space-y-3">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#bed903] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#2c2e2e]/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center">
                {section.mockup ? (
                  section.mockup
                ) : (
                  <div className="w-full max-w-md h-64 bg-gradient-to-br from-[#bed903]/10 to-[#bed903]/5 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-[#bed903]/20 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#bed903]">{section.number}</span>
                      </div>
                      <p className="text-sm text-[#2c2e2e]/60">Visual mockup</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
