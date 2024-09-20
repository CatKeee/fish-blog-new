"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Icon from "@/components/Icon";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center gap-1 underline underline-offset-4 hover:opacity-50"
      onClick={() => {
        router.back();
      }}
    >
      <Icon name="ri:arrow-right-s-line" />
      <span className="font-mono">cd ..</span>
    </div>
  );
};

export default BackButton;
