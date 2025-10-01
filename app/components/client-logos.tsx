import Image from "next/image"

export function ClientLogos() {
  const clients = [
    {
      name: "RIPPLE",
      logo: "/images/client-logos/ripple-logo-new.png",
      width: 150,
      height: 50,
      containerClassName: "-mx-2 -my-14",
    },
    {
      name: "OKX",
      logo: "/images/client-logos/okx-logo.svg",
      width: 100,
      height: 30,
    },
    {
      name: "TRUMP MEME",
      logo: "/images/client-logos/trump-meme-logo.png",
      width: 160,
      height: 45,
    },
    {
      name: "WORMHOLE FOUNDATION",
      logo: "/images/client-logos/wormhole-foundation-logo.png",
      width: 250,
      height: 60,
      containerClassName: "-mx-8",
    },
    {
      name: "CELO",
      logo: "/images/client-logos/celo-logo.svg",
      width: 114,
      height: 26,
    },
    {
      name: "ARKHAM",
      logo: "/images/client-logos/arkham-logo.png",
      width: 160,
      height: 45,
      transform: "translateY(4px)",
      className: "mx-4",
      containerClassName: "-mx-4",
    },
    {
      name: "NEAR",
      logo: "/images/client-logos/near-logo.png",
      width: 130,
      height: 45,
      className: "mx-4",
      containerClassName: "-mx-4",
    },
    {
      name: "FALCONX",
      logo: "/images/client-logos/falconx-logo.png",
      width: 160,
      height: 45,
      className: "mx-4",
      containerClassName: "-mx-4",
    },
    {
      name: "VEDA",
      logo: "/images/client-logos/veda-logo.png",
      width: 140,
      height: 40,
      className: "mx-4",
      containerClassName: "-mx-4",
    },
  ]

  return (
    <section className="pb-10 bg-white">
      <div className="container max-w-full">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center min-h-[60px] w-[calc(50%-1rem)] sm:w-[calc(25%-1.5rem)] xl:w-[calc(20%-1.6rem)] ${client.containerClassName || ""}`}
              style={{
                transform: client.transform,
              }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={client.width}
                height={client.height}
                className={`object-contain ${client.className || ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
