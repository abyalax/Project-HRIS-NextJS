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
    if (dateString == null) return "";
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

export function convertLateDuration(timeString: string) {
    const [hours, minutes] = timeString.split(':').map(Number);

    if (hours === 0 && minutes === 0) {
        return "On Time";
    }

    let result = [];

    if (hours > 0) result.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) result.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);

    return result.join(' and ');
}
/**
 const time1 = "00:15:00";  // 15 minutes
 const time2 = "01:20:00";  // 1 hour 20 minutes
 const time3 = "00:00:00";  // On Time
 */
 type DataItem = Record<string, any>;

 export const getMinValue = (data: DataItem[], key: string): number => {
     if (data.length === 0) return 0;
 
     const min = Math.min(...data.map((item) => item[key]));
     console.log(Number(min));
     
     return Number(min);
 };


