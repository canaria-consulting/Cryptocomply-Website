import Image from "next/image"

export default function HeroClientLogos() {
  const clients = [
    {
      name: "RIPPLE",
      logo: "/images/client-logos/ripple-logo-new.png",
      width: 100, // Scaled down from 150
      height: 33, // Scaled down from 50
      containerClassName: "-mx-1 -my-6", // Scaled down from -mx-2 -my-14
    },
    {
      name: "OKX",
      logo: "/images/client-logos/okx-logo.svg",
      width: 67, // Scaled down from 100
      height: 20, // Scaled down from 30
    },
    {
      name: "TRUMP MEME",
      logo: "/images/client-logos/trump-meme-logo-new.png",
      width: 107, // Scaled down from 160
      height: 30, // Scaled down from 45
      specialFilter: false, // Changed to false to use same filter as siblings
    },
    {
      name: "WORMHOLE FOUNDATION",
      logo: "/images/client-logos/wormhole-foundation-logo.png",
      width: 167, // Scaled down from 250
      height: 40, // Scaled down from 60
      containerClassName: "-mx-3", // Scaled down from -mx-8
    },
    {
      name: "CELO",
      logo: "/images/client-logos/celo-logo.svg",
      width: 76, // Scaled down from 114
      height: 17, // Scaled down from 26
    },
    {
      name: "ARKHAM",
      logo: "/images/client-logos/arkham-logo.png",
      width: 107, // Scaled down from 160
      height: 30, // Scaled down from 45
      transform: "translateY(2px)", // Scaled down from translateY(4px)
      className: "mx-2", // Scaled down from mx-4
      containerClassName: "-mx-2", // Scaled down from -mx-4
    },
    {
      name: "NEAR",
      logo: "/images/client-logos/near-logo.png",
      width: 87, // Scaled down from 130
      height: 30, // Scaled down from 45
      className: "mx-2", // Scaled down from mx-4
      containerClassName: "-mx-2", // Scaled down from -mx-4
    },
    {
      name: "FALCONX",
      logo: "/images/client-logos/falconx-logo.png",
      width: 107, // Scaled down from 160
      height: 30, // Scaled down from 45
      className: "mx-2", // Scaled down from mx-4
      containerClassName: "-mx-2", // Scaled down from -mx-4
    },
    {
      name: "VEDA",
      logo: "/images/client-logos/veda-logo-tertiary.png",
      width: 93, // Scaled down from 140
      height: 27, // Scaled down from 40
      className: "mx-2",
      containerClassName: "-mx-2",
    },
  ]

  return (
    <div className="mt-16 pt-12 border-t border-white/20">
      <div className="text-center mb-10">
        <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Trusted by leading Web3 teams</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`flex items-center justify-center min-h-[32px] w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] xl:w-[calc(11.11%-0.89rem)] ${client.containerClassName || ""}`}
            style={{
              transform: client.transform,
            }}
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={client.width}
              height={client.height}
              className={`object-contain transition-opacity duration-300 ${
                client.specialFilter
                  ? "filter grayscale contrast-150 brightness-200 opacity-80 hover:opacity-100"
                  : "filter brightness-0 invert opacity-70 hover:opacity-100"
              } ${client.className || ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
