import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import config from "@/config/app";

import Icon from "./Icon";

const NavDrawer = () => {
  return (
    <Drawer shouldScaleBackground setBackgroundColorOnScale={false}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size={"icon"} className="w-auto px-2">
          <Icon name="ri:menu-2-line" size="1.2rem" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex h-[90vh] w-full flex-col">
          <DrawerHeader>
            <DrawerTitle>Quick Navigation</DrawerTitle>
            <DrawerDescription>{config.description}</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={"/"}
                className="flex items-center gap-2 rounded border bg-secondary/50 p-3 px-4 hover:bg-secondary"
              >
                <Icon name="ri:home-2-line" />
                Home
              </Link>
              {config.navs.map((nav) => {
                return (
                  <Link
                    key={nav.title}
                    href={nav.path}
                    scroll={nav.scroll}
                    className="flex items-center gap-2 rounded border bg-secondary/50 p-3 px-4 hover:bg-secondary"
                  >
                    {nav.icon ? <Icon name={nav.icon} /> : null}
                    {nav.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
