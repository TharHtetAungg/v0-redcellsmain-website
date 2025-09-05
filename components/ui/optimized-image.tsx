import Image from "next/image"

type Props = {
  src: string
  alt: string
  priority?: boolean
}

export default function OptimizedImage({ src, alt, priority = false }: Props) {
  return (
    <Image
      src={src || "/blog/clone-supplier.jpg"}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
      placeholder="blur"
      blurDataURL="/placeholder/blur.png"
      className="object-cover rounded-lg shadow-lg"
    />
  )
}
