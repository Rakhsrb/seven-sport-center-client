import { TrainerMember } from "@/types/RootTypes";
import { Award, Clock, Users } from "lucide-react";
import Image from "next/image";

interface TrainerProps {
  member: TrainerMember;
}

export default function TrainerCard({ member }: TrainerProps) {
  return (
    <div
      className={`group bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full`}
    >
      <div className="relative overflow-hidden h-full">
        <div className="aspect-[3/4] overflow-hidden">
          <Image
            src={member.photo || "/placeholder.svg"}
            alt={member.fullName}
            unoptimized={true}
            width={"100"}
            height={"100"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold text-white mb-2">
            {member.fullName}
          </h3>
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
            <div className="flex flex-col items-center">
              <Clock size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Tajriba</span>
              <span className="text-xs font-semibold">
                {member.experience} Yil
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Award size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Darajasi</span>
              <span className="text-xs font-semibold">
                {member.achievements}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={18} className="mb-1 text-red-500" />
              <span className="text-xs text-white/70">Shogirtlar soni</span>
              <span className="text-xs font-semibold">{member.clients}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
