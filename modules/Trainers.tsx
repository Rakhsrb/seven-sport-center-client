import type React from "react";
import { Mail, Instagram, Award, Clock, Users } from "lucide-react";
import Link from "next/link";

interface TrainerProps {
  image: string;
  name: string;
  position: string;
  experience?: string;
  specialty?: string;
  clients?: string;
  index: number;
}

const Trainer: React.FC<TrainerProps> = ({
  image,
  name,
  position,
  experience = "5+ лет",
  specialty = "Силовые тренировки",
  clients = "200+",
}) => {
  return (
    <div
      className={`group bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-[-100px] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-red-600 mr-2"></div>
            <span className="text-white/80 font-medium">{position}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transform translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
            <div className="flex flex-col items-center">
              <Clock size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Опыт</span>
              <span className="text-sm font-semibold">{experience}</span>
            </div>
            <div className="flex flex-col items-center">
              <Award size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Специализация</span>
              <span className="text-sm font-semibold">{specialty}</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Клиенты</span>
              <span className="text-sm font-semibold">{clients}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 p-4 flex flex-col gap-3 opacity-0 transform translate-y-[-10px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
          <Link
            href="#"
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
          >
            <Instagram size={16} />
          </Link>
          <Link
            href="#"
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>

      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <span className="text-gray-600 font-medium">
          Записаться на тренировку
        </span>
        <Link
          href={`/trainers/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <span className="sr-only">Подробнее</span>
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
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function Trainers() {
  const teamMembers = [
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Джон Сансаев",
      position: "Силовой тренер",
      experience: "7+ лет",
      specialty: "Бодибилдинг",
      clients: "250+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Алекс Петров",
      position: "Фитнес инструктор",
      experience: "5+ лет",
      specialty: "Кроссфит",
      clients: "180+",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png",
      name: "Максим Волков",
      position: "Креативный директор",
      experience: "10+ лет",
      specialty: "Функциональный тренинг",
      clients: "300+",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-red-600"></div>
              <span className="text-red-600 uppercase font-medium tracking-wider">
                НАША КОМАНДА
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">
              НАШИ САМЫЕ ОПЫТНЫЕ ТРЕНЕРЫ
            </h2>
          </div>

          <Link
            href="/trainers"
            className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors uppercase font-medium text-sm flex items-center group"
          >
            Узнать больше
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Trainer
              key={index}
              index={index}
              image={member.image}
              name={member.name}
              position={member.position}
              experience={member.experience}
              specialty={member.specialty}
              clients={member.clients}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
