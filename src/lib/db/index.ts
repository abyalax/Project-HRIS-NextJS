import { dbURL } from "@/utils/constant";
import { neon } from "@neondatabase/serverless";

export const sql = neon(dbURL || '');