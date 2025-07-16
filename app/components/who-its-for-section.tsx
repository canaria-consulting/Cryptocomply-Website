import { Building2, ArrowLeftRight, Wallet, Network, CircleDollarSign, PieChart } from "lucide-react"

export default function WhoItsForSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c2e2e]">Who It's For</h2>
          <p className="text-lg sm:text-xl text-[#2c2e2e]/80 max-w-3xl mx-auto">
            CryptoComply supports a wide range of Web3 teams managing onboarding, grants, payments, and both vendor and
            partner risk, across the crypto ecosystem.
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
              For DeFi protocols, DAOs, and foundations managing treasury operations, partner onboarding, and community
              or grant disbursements, with added visibility into smart contract, DApp, and liquidity pool exposure.
            </p>
          </div>

          {/* Exchanges (CEX & DEX) */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <ArrowLeftRight className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Exchanges (CEX & DEX)</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Used by centralized and decentralized exchanges for KYC, risk screening, and ongoing monitoring across
              wallets, counterparties, and user flows.
            </p>
          </div>

          {/* Wallet Providers */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Wallet Providers</h3>
            <p className="text-base text-[#2c2e2e]/70">
              For custodial and non-custodial wallets screening users and tracking wallet activity in real time, with
              compliance controls, alerts, and audit-ready logs.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <Network className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Infrastructure</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Built for Layer 1s, Layer 2s, bridges, DeFi protocols handling validator onboarding, vendor risk, and
              technical counterparties, with tools for scalable, automated reviews.
            </p>
          </div>

          {/* Stablecoin and Token Projects */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <CircleDollarSign className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Stablecoin and Token Projects</h3>
            <p className="text-base text-[#2c2e2e]/70">
              Manage compliance around issuers, smart contracts, protocol integrations, and counterparty screening
              across payment rails and liquidity.
            </p>
          </div>

          {/* Investors and Allocators */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#bed903] rounded-lg flex items-center justify-center">
              <PieChart className="h-6 w-6 text-[#2c2e2e]" />
            </div>
            <h3 className="text-xl font-medium text-[#2c2e2e]">Investors and Allocators</h3>
            <p className="text-base text-[#2c2e2e]/70">
              For venture firms and funds performing diligence on protocols, tokens, and founders, unifying on-chain
              exposure with off-chain reputation and media risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
