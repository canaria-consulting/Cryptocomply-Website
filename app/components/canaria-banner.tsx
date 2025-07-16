import Link from "next/link"
import Image from "next/image"

export default function CanariaBanner() {
  return (
    <div className="bg-[#f8f8f8] border-b border-gray-200 py-2">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center text-sm">
          <span className="text-[#2c2e2e]/70 mr-3">A product of</span>
          <Link
            href="https://www.canariaconsulting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-[#bed903] transition-colors"
          >
            <div className="h-5 flex items-center">
              <Image
                src="/canaria.svg"
                alt="Canaria"
                width={16}
                height={16}
                className="h-[60%] w-auto object-contain"
                style={{ marginRight: "8px" }}
              />
            </div>
            <span
              className="font-bold text-primary"
              style={{
                fontFamily: "Poppins, sans-serif",
                transform: "translateX(-2px)",
              }}
            >
              Canaria
            </span>
          </Link>
          <span className="hidden md:inline text-[#2c2e2e]/70 ml-3">— Your Web3 compliance partner</span>
        </div>
      </div>
    </div>
  )
}
