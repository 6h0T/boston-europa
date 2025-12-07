import Image from "next/image"

export default function GiantLogoSection() {
  return (
    <section className="w-full pb-8 pt-0 flex justify-center items-center bg-white overflow-hidden">
      <div className="relative w-full max-w-[50vw] md:max-w-[35vw] px-4">
        <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-white to-transparent z-10" />
        <Image
          src="/BAM LOGO1.svg"
          alt="Boston Asset Manager Logo"
          width={540}
          height={230}
          className="w-full h-auto object-contain opacity-50"
          priority
        />
      </div>
    </section>
  )
}
