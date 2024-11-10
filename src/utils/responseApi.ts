import { NextApiResponse } from "next"

export const responseAPI = (res: NextApiResponse, status: boolean, statusCode: number, message: string, data?: any) => {
    return res.status(statusCode).json({
        status,
        statusCode,
        message,
        data
    })
}