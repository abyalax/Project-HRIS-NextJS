import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        role: string;
        name: string;
        email: string;
        image: string | null;
    }

    interface Session {
        user: User;
        accessToken: string;
    }

}