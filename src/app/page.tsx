import { RocketIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

import Icon from "@/components/Icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "Home",
  description: "A Programmer Who Loves E-waste",
};

const homeData = [
  {
    bg: "/bg/01.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
  {
    bg: "/bg/13.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
  {
    bg: "/bg/02.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
  {
    bg: "/bg/03.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
  {
    bg: "/bg/10.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
  {
    bg: "/bg/07.jpg",
    title: "This is a test",
    desc: "This is a test description",
    href: "/",
  },
];

export default function Home() {
  return (
    <DefaultLayout>
      <div className="">
        <section className="flex flex-col gap-8">
          <Alert className="border-blue-500 bg-blue-50 text-blue-500 dark:bg-blue-950">
            <RocketIcon className="h-4 w-4 !text-blue-500" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              The website is under development, please stay tuned...
            </AlertDescription>
          </Alert>

          <h1 className="text-edge-outline pt-8 text-center text-4xl font-black transition-[font-size] sm:pt-12 sm:text-6xl">
            A Programmer <br />
            Who Loves E-waste
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-secondary-foreground/60">
            {/* Although the road is long, it will come; although the task is
            difficult, it will be accomplished. */}
            The sword leans against the blue sky, the flute leans against the
            tower, the cloud shadows are leisurely, and the crane shadows are
            leisurely.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-secondary-foreground/60">
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="ri:github-fill"
                size="1.5rem"
                className="text-secondary-foreground/80 group-hover:text-secondary-foreground"
              />
            </Button>
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="my:gitee-fill"
                size="1.3rem"
                className="text-secondary-foreground/80 group-hover:text-[#c01b20]"
              />
            </Button>
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="my:zhihu-circle-fill"
                size="1.5rem"
                className="text-secondary-foreground/80 group-hover:text-[#1772f6]"
              />
            </Button>
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="my:juejin-fill"
                size="1.5rem"
                className="text-secondary-foreground/80 group-hover:text-[#1e80ff]"
              />
            </Button>
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="my:bilibili-fill"
                size="1.5rem"
                className="text-secondary-foreground/80 group-hover:text-[#fb7299]"
              />
            </Button>
            <Button
              className="group rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Icon
                name="my:csdn-fill"
                size="1.3rem"
                className="text-secondary-foreground/80 group-hover:text-[#fc5531]"
              />
            </Button>
          </div>
          <div className="">
            <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {homeData.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded bg-secondary"
                >
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={item.bg}
                      alt="Image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <div className="group absolute left-0 top-0 flex size-full flex-col items-center justify-center bg-black/50">
                    <h1 className="text-2xl font-bold text-white transition-all group-hover:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
