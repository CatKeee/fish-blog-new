import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-8 text-sm text-secondary-foreground/50">
      &copy; {new Date().getFullYear()} Kunio
    </footer>
  );
};

export default Footer;
