import type { TrainerMember } from "@/types/RootTypes";
import { Award, Clock, Users } from "lucide-react";
import Image from "next/image";

interface TrainerProps {
  member: TrainerMember;
}

export default function TrainerCard({ member }: TrainerProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col group">
      <div className="aspect-square overflow-hidden">
        <Image
          src={member.photo || "/placeholder.svg"}
          alt={member.fullName}
          unoptimized={true}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow border-t">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {member.fullName}
        </h3>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Clock size={14} className="text-gray-500" />
                <span className="text-xs text-gray-500">Tajriba</span>
              </div>
              <span className="text-sm font-medium text-red-600">
                {member.experience} Yil
              </span>
            </div>

            <div className="flex flex-col text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Award size={14} className="text-gray-500" />
                <span className="text-xs text-gray-500">Darajasi</span>
              </div>
              <span className="text-sm font-medium text-red-600">
                {member.level} belbog
              </span>
            </div>

            <div className="flex flex-col text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Users size={14} className="text-gray-500" />
                <span className="text-xs text-gray-500">Shogirtlar</span>
              </div>
              <span className="text-sm font-medium text-red-600">
                {member.students}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
