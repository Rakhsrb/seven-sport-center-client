import Title from "@/components/shared/Title";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-red-700 rounded-full absolute inset-0 max-w-[600px] max-h-[600px]" />
            <Image
              src="/about.png"
              alt="Dzyudo klubi haqida"
              width={600}
              height={800}
              className="w-full object-cover relative"
              priority
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            <Title>DZYUDO KLUBIMIZ HAQIDA</Title>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2756] leading-tight">
              XAVFSIZ SPORT MUHITI. BOLALARNING JISMONIY VA MA'NAVIY
              RIVOJLANISHI UCHUN ENG YAXSHI TANLOV!
            </h1>

            <div className="space-y-4 text-gray-700">
              <p>
                Namanngan shahridagi dzyudo klubi bolalar uchun sport va
                tarbiyaning mukammal uyg'unligini taqdim etadi. Bizning malakali
                murabbiylarimiz har bir yosh sportchiga maxsus yondashuv bilan
                shug'ullanadi.
              </p>

              <p>
                Dzyudo nafaqat jismoniy tarbiya, balki intizom, hurmat va
                irodani shakllantirishga yordam beradi. Klubimizda farzandingiz
                sport bilan shug'ullanishi va sog'lom hayot tarzini
                shakllantirishi mumkin.
              </p>
            </div>

            <div>
              <Link
                href="tel:+998900021462"
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm"
              >
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
