import { attendanceMonthlyType } from "@/types/utils";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: Date | null) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
  ];
  if(dateString == null ) return "";
  const date = new Date(dateString);
  const dayName = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${monthName} ${year}`;
}

export const stylingStatus = (status: string) => {
  switch (status) {
      case "Pending":
          return "bg-[#FFC107]"; // Kuning terang
      case "New":
          return "bg-[#2196F3]"; // Biru muda
      case "Approved":
          return "bg-[#4CAF50]"; // Hijau
      case "Rejected":
          return "bg-[#F44336]"; // Merah
      case "Completed":
          return "bg-[#9E9E9E]"; // Abu-abu netral
      default:
          return "";
  }
}

