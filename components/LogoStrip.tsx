import Image from "next/image"

interface LogoStripProps {
  size?: "default" | "small"
}

const logos = [
  { name: "UPenn", src: "/images/upenn-logo.jpeg" },
  { name: "Google", src: "/images/google-logo.png" },
  { name: "Amazon", src: "/images/amazon-logo.png" },
]

export default function LogoStrip({ size = "default" }: LogoStripProps) {
  const imgHeight = size === "small" ? 28 : 36

  return (
    <div className="flex flex-wrap items-center gap-8" role="list" aria-label="Credibility logos">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center transition-opacity hover:opacity-100"
          style={{ opacity: 0.9 }}
          role="listitem"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={size === "small" ? 90 : 110}
            height={imgHeight}
            className="h-auto w-auto object-contain"
            style={{ maxHeight: `${imgHeight}px` }}
          />
        </div>
      ))}
    </div>
  )
}
