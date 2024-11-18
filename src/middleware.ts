import withAuth from "@/middlewares/withAuth";
import { NextResponse } from "next/server";

export function mainMiddleware() {
    const res = NextResponse.next()
    return res
}

const param = {
    middleware: mainMiddleware,
    requireAuth: ["admin", "/"]
}

export default withAuth(param)