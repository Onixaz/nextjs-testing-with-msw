import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = credentials;
          //dummy auth logic (replace with e.g external auth REST API endpoint)
          if (username === "admin" && password === "12345") {
            const user = {
              username: "admin",
              role: "admin",
            };
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
    maxAge: 60 * 60 * 24 * 7,
  },
  jwt: {
    secret: "add-this-to-env-file-please",
  },
  callbacks: {
    jwt: async (token: any, user: any) => {
      user && (token.user = user);
      return token;
    },
    session: async (session: any, user: any) => {
      session.user = user.user;
      return session;
    },
  },
});
