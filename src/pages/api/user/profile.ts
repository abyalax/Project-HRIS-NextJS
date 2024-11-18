import { sql } from "@/lib/db";
import { responseAPI } from "@/utils/responseApi";
import { verify } from "@/utils/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        verify(req, res, false, async (decoded: { id: string }) => {
            if (decoded) {
                const profile: any = await sql`SELECT * FROM karyawan WHERE id_karyawan = ${decoded.id}`
                if (profile) {
                    profile.id = decoded.id
                    return responseAPI(res, true, 200, "Success", profile)
                } else {
                    return responseAPI(res, false, 404, "Profile Not Found")
                }
            } else {
                return responseAPI(res, false, 403, "Access Denied")
            }
        })
    }
}