import { signUp } from "@/services/auth/services";
import { responseAPI } from "@/utils/responseApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        await signUp(req.body, (status: boolean) => {
            if (status) {
                return responseAPI(res, true, 200, "Pendaftaran Berhasil")
            } else {
                return responseAPI(res, false, 400, "Pendaftaran Gagal")
            }
        })
    }

}