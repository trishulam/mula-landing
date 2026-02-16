import Image from "next/image"

interface LogoStripProps {
  size?: "default" | "small"
}

const logos = [
  { name: "UPenn", src: "/images/penn-logo-final.png", width: 170, scaleSmall: 1.45, scaleDefault: 1.65 },
  { name: "Google", src: "/images/google-logo-final.png", width: 185, scaleSmall: 2.2, scaleDefault: 2.35 },
  { name: "Amazon", src: "/images/amazon-logo-final-white.png", width: 195, scaleSmall: 2.15, scaleDefault: 2.3 },
]

export default function LogoStrip({ size = "default" }: LogoStripProps) {
  const imgHeight = size === "small" ? 34 : 42

  return (
    <div className="flex flex-wrap items-center gap-9" role="list" aria-label="Credibility logos">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center overflow-visible opacity-90 transition-opacity hover:opacity-100"
          role="listitem"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={size === "small" ? logo.width : logo.width + 24}
            height={imgHeight}
            className="h-auto w-auto object-contain"
            style={{
              maxHeight: `${imgHeight}px`,
              transform: `scale(${size === "small" ? logo.scaleSmall : logo.scaleDefault})`,
              transformOrigin: "center",
            }}
          />
        </div>
      ))}
    </div>
  )
}
