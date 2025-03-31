import { TrainerMember } from "@/types/RootTypes";

export async function getTrainers(): Promise<TrainerMember[]> {
  try {
    const response = await fetch(`http://localhost:3001/api/trainer`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch trainers");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching trainers:", error);
    return [];
  }
}

export default async function TrainersData() {
  const trainers = await getTrainers();
  return { trainers };
}
