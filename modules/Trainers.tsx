import TrainersCarousel from "@/components/shared/trainers-carousel";
import TrainersData from "@/components/shared/trainers-data";
import TrainersSkeleton from "@/components/shared/trainers-skeleton";
import { Suspense } from "react";

export default async function TrainersModule() {
  return (
    <Suspense fallback={<TrainersSkeleton />}>
      <TrainersModuleInner />
    </Suspense>
  );
}

async function TrainersModuleInner() {
  const { trainers } = await TrainersData();

  if (!trainers || trainers.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-red-600">
              No trainers found
            </p>
          </div>
        </div>
      </section>
    );
  }

  return <TrainersCarousel trainers={trainers} />;
}
