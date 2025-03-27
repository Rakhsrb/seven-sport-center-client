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
              alt="Fitness trainer with battle ropes"
              width={600}
              height={800}
              className="w-full object-cover relative"
              priority
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            <Title>SPORT ZALIMIZ HAQIDA</Title>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2756] leading-tight">
              БЕЗОПАСНЫЙ СПОРТ. ПРАВИЛЬНЫЕ РЕШЕНИЯ, КОТОРЫЕ ЭКОНОМЯТ НАШЕ
              ДРАГОЦЕННОЕ ВРЕМЯ!
            </h1>

            <div className="space-y-4 text-gray-700">
              <p>
                Brook представляет ваши услуги с гибкими, удобными и cdpose
                макетами. Вы можете выбрать ваши любимые макеты и элементы для
                cular ts с неограниченными возможностями настройки.
                Предполагается пиксельное копирование дизайнеров.
              </p>

              <p>
                Brook представляет ваши услуги с помощью гибких, удобных и
                многофункциональных макетов. Вы можете выбрать свои любимые
                макеты.
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
