import { ServiceCard } from "@/components/shared/Service-card";
import Title from "@/components/shared/Title";
import { Clock, Dumbbell, Heart } from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Professional Trening Uskunalari",
    description:
      "Bolalarimiz uchun xavfsiz va zamonaviy sport jihozlari bilan jihozlangan zal. Trening samaradorligini oshirish uchun eng yaxshi sharoitlarni taqdim etamiz.",
  },
  {
    icon: Heart,
    title: "Sog‘lom Turmush Tarzi",
    description:
      "Dzyudo nafaqat jismoniy kuch, balki sog‘lom turmush tarzining asosi. Bolalarning umumiy rivojlanishiga ko‘maklashamiz va ularni mustahkam iroda bilan tarbiyalaymiz.",
  },
  {
    icon: Clock,
    title: "Samarali Mashg‘ulot Dasturlari",
    description:
      "Har bir bola uchun individual yondashuv! Mashg‘ulot dasturlarimiz dzyudo texnikalarini mukammal egallash va sport natijalarini yaxshilashga qaratilgan.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen services py-16">
      <div className="container mx-auto h-full flex flex-col justify-center gap-10 px-6">
        <div className="w-full xl:max-w-[50%] space-y-6">
          <Title>BIZNING XIZMATLARIMIZ</Title>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            BIZ SIZGA NIMALARNI TAKLIF ETAMIZ
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
