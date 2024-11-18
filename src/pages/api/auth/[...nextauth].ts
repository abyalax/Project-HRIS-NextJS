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
                console.log("User: ", user);

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
            console.log("JWT Callback - Token:", token);
            console.log("JWT Callback - Account:", account);
            console.log("JWT Callback - User:", user);
            if (account?.provider === "credentials") {
                token.id = user.id;
                token.name = user.nama;
                token.email = user.email;
                token.image = user.image;
                token.role = user.role
            }
            if (account?.provider === "google") {
                console.log("User: ", user);

                const data = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: 'karyawan',
                    type: 'google'
                }
                console.log("Data to be passed to loginWithGoogle:", data);
                await loginWithGoogle(data, (data: any) => {
                    token.name = data.name;
                    token.role = data.role;
                    token.image = data.image;
                    token.email = data.email;
                    token.id = data.id;
                });
            }
            console.log("Assign Token:", token);
            return token
        },

        async session({ session, token }: any) {
            console.log("Session Callback - Token:", token);
            console.log("Session Callback - Session:", session);
            if ('id' in token) {
                session.user.id = token.id;
            }
            if ('name' in token) {
                session.user.name = token.name;
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
            console.log("Assign Session", session);

            return session
        }
    },
    pages: {
        signIn: "/auth/login"
    },
}

export default NextAuth(authOptions)