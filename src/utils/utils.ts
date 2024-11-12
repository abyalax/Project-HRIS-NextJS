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
          return "bg-yellow-500";
      case "New":
          return "bg-blue-500"; 
      case "Approved":
          return "bg-green-500";
      case "Rejected":
          return "bg-red-500";
      case "Completed":
          return "bg-gray-400";
      default:
          return "";
  }
}

