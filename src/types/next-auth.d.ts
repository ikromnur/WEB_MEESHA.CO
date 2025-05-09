import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
    } & DefaultSession["USER"];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    role?: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    accessToken?: string;
  }
}

export type RequestWithAuth = NextRequest & {
  auth: {
    user?: {
      name?: string | null;
      email?: string | null;
      role?: string;
      image?: string | null;
      token?: string;
    };
  };
};
