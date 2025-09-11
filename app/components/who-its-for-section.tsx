import { Building2, ArrowLeftRight, Wallet, Network, CircleDollarSign, PieChart } from "lucide-react"

export default function WhoItsForSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c2e2e]">Who It's For</h2>
          <p className="text-lg sm:text-xl text-[#2c2e2e]/80 max-w-3xl mx-auto">
            Bringing compliance to DeFi. CryptoComply helps crypto teams manage compliance and risk with an AI-powered platform.  
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Protocols and Foundations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Protocols and Foundations</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Simplify treasury operations, grants, and community onboarding with visibility into smart contracts, liquidity pools, and counterparties.
            </p>
          </div>

          {/* Exchanges (CEX & DEX) */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <ArrowLeftRight className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Exchanges (CEX & DEX)</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Automate KYC, ongoing wallet monitoring, and counterparty screening with AI-filtered alerts.
            </p>
          </div>

          {/* Wallet Providers */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Wallet Providers</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Screen users, track wallet activity in real time, and manage compliance risks with audit-ready logs.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <Network className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Infrastructure</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Automate KYB/KYC and wallet/vault/LP screening with AI-assisted risk interpretations and configurable monitoring. 
            </p>
          </div>

          {/* Stablecoin and Token Projects */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <CircleDollarSign className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Stablecoin and Token Projects</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Mitigate issuer and counterparty risk across payment rails, liquidity, and integrations.
            </p>
          </div>

          {/* Investors and Allocators */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <PieChart className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Investors and Allocators</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Perform faster diligence on tokens, founders, and protocols with AI-generated risk summaries combining on-chain and off-chain insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
