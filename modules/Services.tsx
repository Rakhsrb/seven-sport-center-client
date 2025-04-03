import Title from "@/components/shared/Title";
import { ArrowRight, Clock, Dumbbell, Heart } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Professional Trening Uskunalari",
    description:
      "Bolalarimiz uchun xavfsiz va zamonaviy sport jihozlari bilan jihozlangan zal. Trening samaradorligini oshirish uchun eng yaxshi sharoitlarni taqdim etamiz.",
  },
  {
    icon: Heart,
    title: "Sog'lom Turmush Tarzi",
    description:
      "Dzyudo nafaqat jismoniy kuch, balki sog'lom turmush tarzining asosi. Bolalarning umumiy rivojlanishiga ko'maklashamiz va ularni mustahkam iroda bilan tarbiyalaymiz.",
  },
  {
    icon: Clock,
    title: "Samarali Mashg'ulot Dasturlari",
    description:
      "Har bir bola uchun individual yondashuv! Mashg'ulot dasturlarimiz dzyudo texnikalarini mukammal egallash va sport natijalarini yaxshilashga qaratilgan.",
  },
];

export default function Services() {
  return (
    <section className="py-24 relative services">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mb-16">
          <Title>BIZNING XIZMATLARIMIZ</Title>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            BIZ SIZGA NIMALARNI <br /> TAKLIF ETAMIZ
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              style={{
                boxShadow: "rgba(111, 100, 100, 0.2) 0px 7px 29px 0px",
              }}
              className="bg-white border-gray-100 p-8 h-full flex flex-col group hover:border-gray-200 transition-all duration-300 relative"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100 overflow-hidden">
                <div className="h-full bg-red-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>

              <div className="mb-6 relative">
                <div className="inline-flex p-3 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gray-800 group-hover:text-red-600" />
                </div>
                <div className="absolute -z-10 top-3 left-3 w-10 h-10 border border-gray-200 opacity-0 group-hover:opacity-100 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-gray-800 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300"
              >
                Batafsil
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 group"
          >
            Barcha xizmatlarni ko&apos;rish
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
