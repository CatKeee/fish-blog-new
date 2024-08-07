"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import Icon from "./Icon";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <Icon name="ri:sun-cloudy-line" className="dark:hidden" size="1.2rem" />
        <Icon
          name="ri:moon-clear-line"
          className="hidden dark:block"
          size="1.2rem"
        />
      </Button>
    </>
  );
};
export default ThemeToggle;
