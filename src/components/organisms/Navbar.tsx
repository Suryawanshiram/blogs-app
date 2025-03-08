import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex items-center justify-between w-full h-16 px-4 py-2 bg-white shadow-md">
      <div className="px-5 flex items-center gap-4 justify-between w-full">
        <Link href="/">
          <h1 className="text-amber-600 text-3xl font-semibold">
            Blogs<span className="text-blue-600">Ram</span>
          </h1>
        </Link>

        <Link
          href="/"
          className="text-base font-medium hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-base font-medium hover:text-blue-500 transition-colors"
        >
          Dashboard
        </Link>
      </div>

      <div className="flex gap-2 w-full justify-end">
        {user ? (
          <div className="flex gap-2">
            <p className="py-2 rounded-md border px-2 text-green-500">
              {user.given_name}
            </p>
            <LogoutLink className={buttonVariants({ variant: "secondary" })}>
              Logout
            </LogoutLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 justify-end w-full px-4">
              <LoginLink className={buttonVariants()}>Sign in</LoginLink>
              <RegisterLink
                className={buttonVariants({ variant: "secondary" })}
              >
                Sign up
              </RegisterLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
