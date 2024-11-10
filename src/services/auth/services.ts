import bcrypt from "bcrypt"
import { sql } from "@/lib/db";

export async function signUp(userData: adminType, callback: Function) {

    const data = await sql`SELECT * FROM admin_hr WHERE email = ${userData.email}`

    if (data.length > 0) {
        callback(false);
    } else {
        userData.password = await bcrypt.hash(userData.password, 10)
        await sql`
        INSERT INTO admin_hr (username, nama_lengkap, email, password ) 
        VALUES (${userData.username}, ${userData.nama_lengkap}, ${userData.email}, ${userData.password})`
        callback(true);
    }
}

export async function signIn(email: string) {
    const data = await sql`SELECT * FROM admin_hr WHERE email = ${email}`
    if (data) {
        return data[0]
    } else {
        return null
    }
}

interface googleType {
    id?: string,
    email: string,
    password?: string,
    username: string,
}

export async function loginWithGoogle( data: googleType, callback: Function) {

    const user = await sql`SELECT * FROM users WHERE email = ${data.email}`

    if (user.length > 0) {
        callback(user[0])
    } else {
        data.password = ""
        const res = await sql`
        INSERT INTO users (username, email, password, image) 
        VALUES (${data.username}, ${data.email}, ${data.password})`
        if (res) {
            callback(data)
        }
    }
}