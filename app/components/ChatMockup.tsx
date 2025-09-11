interface ChatMockupProps {
  title: string
}

export const ChatMockup = ({ title }: ChatMockupProps) => (
  <div className="w-full h-full flex flex-col">
    <div className="bg-gray-50 border-b px-4 sm:px-6 py-4">
      <h4 className="font-medium text-[#2c2e2e]">{title}</h4>
    </div>
    <div className="flex-1 p-4 sm:p-6 space-y-4">
      <div className="space-y-3">
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
            <p className="text-sm">What risks apply to wallet 0x734B41E...82E7e6?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#bed903] rounded-lg px-4 py-2 max-w-md">
            <p className="text-sm text-[#2c2e2e]">
              Based on your AML policy, this wallet has <strong>Severe Risk</strong> due to:
            </p>
            <ul className="text-xs mt-2 space-y-1 text-[#2c2e2e]">
              <li>• Sanctioned jurisdiction exposure ($20,887)</li>
              <li>• High-risk DEX activity ($55,788)</li>
              <li>• Policy threshold exceeded by 340%</li>
            </ul>
            <p className="text-xs mt-2 text-[#2c2e2e]">
              <strong>Recommendation:</strong> Reject per Section 4.2.1
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
            <p className="text-sm">How does my AML policy treat this case?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#bed903] rounded-lg px-4 py-2 max-w-md">
            <p className="text-sm text-[#2c2e2e]">
              Your AML Policy Section 4.2.1 states: "Wallets with &gt;$15K sanctioned jurisdiction exposure require
              automatic rejection."
            </p>
            <p className="text-xs mt-2 text-[#2c2e2e]">
              This wallet exceeds the threshold. Would you like me to generate the rejection documentation?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
