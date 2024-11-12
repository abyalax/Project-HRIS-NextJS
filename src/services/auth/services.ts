import bcrypt from "bcrypt"
import { sql } from "@/lib/db";

export async function signUp(userData: adminType, callback: Function) {

    const dataAdmin = await sql`SELECT * FROM admin WHERE email = ${userData.email}`
    const dataKaryawan = await sql`SELECT * FROM karyawan WHERE email = ${userData.email}`

    if (dataAdmin.length || dataKaryawan.length > 0) {
        callback(false);
    }
    else {
        userData.password = await bcrypt.hash(userData.password, 10)
        await sql`
        INSERT INTO karyawan (nama, email, password, role) 
        VALUES (${userData.nama}, ${userData.email}, ${userData.password}, 'karyawan')`
        callback(true);
    }
}

export async function signIn(email: string) {
    const admin = await sql`SELECT * FROM admin WHERE email = ${email}`
    const karyawan = await sql`SELECT * FROM karyawan WHERE email = ${email}`

    if (admin.length > 0) {
        return admin[0]
    }
    if (karyawan.length > 0) {
        return karyawan[0]
    } else {
        return null
    }
}

interface googleType {
    id: string,
    nama: string,
    email: string,
    password?: string,
}

export async function loginWithGoogle(data: googleType, callback: Function) {
    const admin = await sql`SELECT * FROM admin WHERE id_admin = ${data.id}`
    if (admin.length > 0) {
        callback(admin[0])
        return;
    }

    const karyawan = await sql`SELECT * FROM karyawan WHERE id_karyawan = ${data.id}`
    if (karyawan.length > 0) {
        callback(karyawan[0])
    } else {
        data.password = ''
        const res = await sql`
            INSERT INTO karyawan ( id_karyawan ,nama, email, password, role) 
            VALUES (${data.id}, ${data.nama}, ${data.email}, ${data.password}, 'karyawan')`
        if (res) {
            callback(data)
        } else {
            console.error('Failed to insert new karyawan');
            callback(null);
        }
    }
}
