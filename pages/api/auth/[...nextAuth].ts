import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
// import TwitterProvider from 'next-auth/providers/twitter'


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.NEXT_AUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.NEXT_AUTH_GITHUB_CLIENT_SECRET as string
        }),
        // TwitterProvider({
        //     clientId: "",
        //     clientSecret: ""
        // }),
    ],
    callbacks: {
        jwt({ token , account , isNewUser , profile , user }) {
            return {
                ...token,
                ac:account,
                isNew:isNewUser,
                prof: profile,
                us: user
            }
        },
        session({ session , token , user }) {
            console.log("sessio" , session)
            return {
                ...session,
                token,
            }
        }
    },
    debug: true,
    logger: {
        error(code, metadata) {
            console.log(code , metadata , "======= ERROR ======")
        },
        warn(code) {
            console.log(code , " ===== WARNING ===== ")
        },
    },
    theme: {
        colorScheme: 'light',
    },
    jwt: {
        maxAge: 60 * 30,
    },
    session: {
        maxAge: 60 * 30,
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    useSecureCookies: false
}

export default NextAuth(authOptions)