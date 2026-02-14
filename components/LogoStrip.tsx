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
  const imgHeight = size === "small" ? 24 : 32

  return (
    <div className="flex flex-wrap items-center gap-6" role="list" aria-label="Credibility logos">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="opacity-50 grayscale brightness-0 invert transition-opacity hover:opacity-75"
          role="listitem"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={imgHeight}
            height={imgHeight}
            className="h-auto w-auto object-contain"
            style={{ maxHeight: `${imgHeight}px` }}
          />
        </div>
      ))}
    </div>
  )
}
