"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

function AuthProvider({ children }: { children: React.ReactNode }) {
  return <KindeProvider>{children}</KindeProvider>;
}

export default AuthProvider;
