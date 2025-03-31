import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
