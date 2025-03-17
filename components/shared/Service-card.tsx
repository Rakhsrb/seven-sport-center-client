import type React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 text-black p-8 min-h-[400px] flex flex-col items-start text-left rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full opacity-50 group-hover:bg-red-100 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-100 rounded-tr-full opacity-30 group-hover:bg-red-100 transition-colors duration-300"></div>

      <div className="relative z-10 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-full shadow-md group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300">
        <Icon className="w-10 h-10 stroke-1 text-gray-800 group-hover:text-red-600 transition-colors duration-300" />
      </div>

      <div className="relative z-10 flex flex-col items-start flex-grow">
        <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>

        <div className="w-12 h-1 bg-gray-200 group-hover:bg-red-400 mb-4 transition-colors duration-300"></div>

        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <button className="flex items-center text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors duration-300">
          Узнать больше
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-red-500 transition-colors duration-300"></div>
    </div>
  );
}
