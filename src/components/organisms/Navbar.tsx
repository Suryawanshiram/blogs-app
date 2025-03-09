"use client";

import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  console.log(user);

  return (
    <nav className="flex items-center justify-between w-full h-16 px-4 py-2 bg-white shadow-md">
      <div className="px-5 flex items-center gap-4 justify-between w-full">
        <Link href="/">
          <h1 className="text-amber-600 text-3xl font-semibold">
            Tech<span className="text-blue-600">Blogs</span>
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
          <div className="flex gap-4 w-full justify-end">
            <p className="rounded-md border px-3 py-1.5 text-green-500">
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
