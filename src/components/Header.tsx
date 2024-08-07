"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Icon from "./Icon";
import AppConfig from "@/config/app";
import GlobalSearch from "./Search";
import NavDrawer from "./NavDrawer";
import QuickSearch from "./QuickSearch";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b p-2 backdrop-blur">
      <div className="flex w-1/5 sm:hidden">
        <NavDrawer />
      </div>

      <Link
        className="flex w-auto flex-1 items-center justify-center gap-1 px-2 sm:w-1/5 sm:flex-initial sm:justify-start"
        href={"/"}
        scroll={true}
      >
        {/* <Icon name="ri:remix-run-fill" size="1.2rem" className="" /> */}
        {/* <img src="/guofu.svg" alt="logo" className="w-8 h-8" /> */}
        <Avatar className="size-8 rounded-none">
          <AvatarImage src="/guofu.svg" alt="@shadcn" />
          <AvatarFallback>LOGO</AvatarFallback>
        </Avatar>
      </Link>

      <div className="hidden gap-4 sm:flex">
        {AppConfig.navs.map((nav) => {
          return (
            <Link
              prefetch
              key={nav.title}
              className={`relative transition-colors hover:text-foreground/80 ${
                pathname === nav.path ? "text-foreground" : "text-foreground/60"
              }`}
              href={nav.path}
              scroll={nav.scroll}
              target={nav.target ? "_blank" : "_self"}
            >
              {nav.title}
              {nav.target ? (
                <Icon
                  name="ri:arrow-right-up-line"
                  className="absolute -right-2 top-0"
                  size="0.6rem"
                />
              ) : null}
            </Link>
          );
        })}
      </div>
      <div className="flex w-1/5 justify-end">
        {/* <GlobalSearch /> */}
        <QuickSearch />
        <ThemeToggle />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
