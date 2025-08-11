"use client";

import { login, logout } from "@/lib/auth-actions";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "@/components/ui/avatar";
import { LogIn, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar({ session }: { session: Session | null }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-surface text-main shadow-md py-3 sm:py-4 border-b">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="sm:w-[50px] sm:h-[50px]"
            priority
          />
          <span className="text-lg sm:text-2xl font-bold text-main">
            Travel Planner
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {session ? (
            <>
              <Link
                href={"/trips"}
                className="hidden sm:block text-main hover:text-sky-500 transition-colors text-sm lg:text-base"
              >
                My Trips
              </Link>
              <Link
                href={"/globe"}
                className="hidden sm:block text-main hover:text-sky-500 transition-colors text-sm lg:text-base"
              >
                Globe
              </Link>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link href="/profile" className="transition-transform hover:scale-105">
                  <UserAvatar user={session.user} size="sm" />
                </Link>

                <button
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-md cursor-pointer transition-colors text-xs sm:text-sm"
                  onClick={logout}
                >
                  <span className="hidden sm:inline">Sign Out</span>
                  <span className="sm:hidden">Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            <button
              className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-md cursor-pointer transition-colors text-xs sm:text-sm"
              onClick={login}
            >
              <span className="hidden sm:inline mr-2">Sign In</span>
              <span className="sm:hidden mr-2">Sign In</span>
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md p-2 border border-card-main bg-surface text-main transition-colors"
          >
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}