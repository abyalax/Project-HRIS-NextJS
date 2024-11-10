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
                if (user) {
                    const passwordConfirm = await compare(password, user.password)
                    if (passwordConfirm) {
                        return user
                    }
                    return null
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
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
            }
            if (account?.provider === "google") {

                const data = {
                    username: user.name,
                    email: user.email,
                    type: 'google'
                }

                await loginWithGoogle(data, (data: any) => {
                    token.email = data.email;
                    token.email = data.username;
                    token.email = data.password;
                    token.id = data.id
                })
            }
            return token
        },

        async session({ session, token }: any) {
            if ('email' in token) {
                session.user.email = token.email;
            }
            if ('role' in token) {
                session.user.role = token.role;
            }
            if ('image' in token) {
                session.user.image = token.image;
            }
            if ('id' in token) {
                session.user.id = token.id;
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