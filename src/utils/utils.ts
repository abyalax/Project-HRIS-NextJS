import { type ClassValue, clsx } from "clsx"
import { NextApiRequest, NextApiResponse } from "next";
import { twMerge } from "tailwind-merge"
import { responseAPI } from "./responseApi";
import jwt from "jsonwebtoken"

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
        case "In Review":
            return "bg-blue-400";
        case "Approved":
            return "bg-green-500";
        case "Rejected":
            return "bg-red-500";
        case "Completed":
            return "bg-gray-400";
        case "Canceled":
            return "bg-gray-400 ";
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
    return Number(min);
};

export const verify = (req: NextApiRequest, res: NextApiResponse, isAdmin: boolean, callback: Function) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.NEXTAUTH_SECRET || '',
            async (err: any, decoded: any) => {
                if (decoded && (isAdmin ? decoded.role === 'admin' : true)) {
                    callback(decoded)
                } else {
                    return responseAPI(res, false, 400, "Failed to verify token")
                }
            })
    } else {
        return responseAPI(res, false, 403, "Access Denied")
    }
}
