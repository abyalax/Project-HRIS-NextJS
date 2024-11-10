import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import { loginWithGoogle, signIn } from "@/services/auth/services";

const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = await signIn(email)
                if (user.role == "karyawan") {
                    if (user) {
                        const passwordConfirm = await compare(password, user.password)
                        if (passwordConfirm) {
                            console.log("Login as karyawan ", user);

                            return user
                        }
                        return null
                    } else {
                        return null
                    }
                } else if (user.role == "admin") {
                    console.log("Login as admin ", user);

                    return user
                } else {
                    return null
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
        })
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            if (account?.provider === "credentials") {
                token.id = user.id;
                token.name = user.nama;
                token.email = user.email;
                token.image = user.image;
                token.role = user.role;
            }
            if (account?.provider === "google") {
                const data = {
                    id: user.id,
                    nama: user.name,
                    email: user.email,
                    image: user.image,
                    type: 'google'
                }
                console.log("Data to be passed to loginWithGoogle:", data);
                await loginWithGoogle(data, (data: any) => {
                    token.role = data.role;
                    token.image = data.image;
                    token.email = data.email;
                    token.id = data.id;
                });
            }
            return token
        },

        async session({ session, token }: any) {
            if ('id' in token) {
                session.user.id = token.id;
            }
            if ('nama' in token) {
                session.user.nama = token.name;
            }
            if ('email' in token) {
                session.user.email = token.email;
            }
            if ('role' in token) {
                session.user.role = token.role;
            }
            if ('image' in token) {
                session.user.image = token.image;
            }
            const accesToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '', {
                algorithm: 'HS256',
            })
            session.accessToken = accesToken

            return session
        }
    },
    pages: {
        signIn: "/auth/login"
    },
}

export default NextAuth(authOptions)