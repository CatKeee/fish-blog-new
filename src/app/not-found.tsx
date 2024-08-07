import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "页面找不到喇～",
};

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl">404</h1>
      <p>不找喇找不到喇，世界已如此忙碌～</p>
      <Link href="/" className={buttonVariants()}>
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
