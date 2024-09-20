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
import { ScrollArea } from "@/components/ui/scroll-area";

import Icon from "./Icon";
import { Input } from "./ui/input";

const GlobalSearch = () => {
  return (
    <Drawer direction="bottom" shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Icon name="ri:search-line" size="1.2rem" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex h-[90vh] w-full flex-col">
          <DrawerHeader>
            <DrawerTitle>Search</DrawerTitle>
            <DrawerDescription>
              <Input placeholder="Search..." autoFocus />
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <ScrollArea>123123</ScrollArea>
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

export default GlobalSearch;
