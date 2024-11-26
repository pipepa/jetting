import CredentialsProvider from "next-auth/providers/credentials"
import type { AuthOptions } from "next-auth"
import type { CustomUser } from "@/types/next-auth"

async function validateUser(login: string) {
  // Example validation against environment variables
  if (login === process.env.AUTH_LOGIN_ADMIN) {
    return { id: '1', role: 'admin', username: 'admin' }
  } else if (login === process.env.AUTH_LOGIN_STAFF) {
    return { id: '2', role: 'staff', username: 'staff' }
  }
  return null;
}

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          login: { label: "Login", type: "text" },
        },
        async authorize (credentials): Promise<CustomUser | null> {
          if (credentials) {
            const user = await validateUser(credentials.login);
            if (user) {
              return user;
            }
          }
          return null;
        }
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {  // This means the JWT is being created and we have user data from authorize
          token.id = user.id;
          token.role = user.role;
          token.username = user.username;
        }
        return token;
      },
      session: async ({ session, token }) => {
        // Ensure that session.user exists
        session.user = session.user
    
        // Check and assign id
        if (typeof token.id === 'string') {
          session.user.id = token.id;
        }
    
        // Check and assign role
        if (typeof token.role === 'string') {
          session.user.role = token.role;
        }
    
        // Check and assign username
        if (typeof token.username === 'string') {
          session.user.username = token.username;
        }
    
        return session;
      },
  
      // Always redirect to /flights
      async signIn({ user, account, profile, email, credentials }) {
        return true;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl + "/flights";
      }
    }
  }