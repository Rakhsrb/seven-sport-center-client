import { ServiceCard } from "@/components/shared/Service-card";
import Title from "@/components/shared/Title";
import { Clock, Dumbbell, Heart } from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Качественное Оборудование",
    description:
      "Тренируйтесь на современном фитнес-оборудовании, разработанном для оптимальной производительности и безопасности. Мы инвестируем в премиальные тренажеры для улучшения вашего тренировочного опыта.",
  },
  {
    icon: Heart,
    title: "Забота о Здоровье",
    description:
      "Наш подход сосредоточен на вашем общем благополучии, а не только на физической форме. Мы предоставляем персонализированное руководство, чтобы помочь вам достичь устойчивых улучшений здоровья.",
  },
  {
    icon: Clock,
    title: "Стратегии Тренировок",
    description:
      "Максимизируйте свои результаты с экспертно разработанными планами тренировок, адаптированными под ваши цели. Наши тренеры разрабатывают эффективные стратегии для оптимизации вашего времени в тренажерном зале.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen services py-16">
      <div className="container mx-auto h-full flex flex-col justify-center gap-10 px-6">
        <div className="w-full xl:max-w-[50%] space-y-6">
          <Title>BIZNING XIZMATLARIMIZ</Title>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            CHEKORLARINGIZNI KENGAYTING BIZ SIZGA TAKLIF ETAMIZ
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
