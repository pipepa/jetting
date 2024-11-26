import { DefaultUser } from "next-auth";

type CustomUser = {
  id: string
  role: string
  username: string
}

declare module "next-auth" {
  interface User extends CustomUser {}

  interface Session {
    user: User;
  }
}