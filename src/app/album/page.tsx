import "react-photo-view/dist/react-photo-view.css";

import type { Metadata } from "next";
import React from "react";

import DefaultLayout from "@/layouts/default";

import AlbumContent from "./_components/content";

export const metadata: Metadata = {
  title: "Album",
  description: "Various kinds of pictures are stored here.",
};

const albumList: AlbumItem[] = [
  { title: "01", date: "Dec 16, 2022", path: "/guofu/12.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/09.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/03.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/03.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/06.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/06.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/13.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/14.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/15.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/01.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/01.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/04.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/11.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/07.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/07.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/04.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/bg-2.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/08.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/02.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/08.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/09.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/bg-1.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/02.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/10.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/12.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/05.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/11.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/10.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/13.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/05.jpg" },
];

const Album = () => {
  return (
    <DefaultLayout>
      <div className="">
        <section className="flex flex-col items-center gap-2 pb-8 pt-4 sm:pb-12 sm:pt-8">
          <h1 className="text-edge-outline text-3xl font-bold">Album</h1>
          <p className="text-center text-secondary-foreground/60">
            Various kinds of pictures are stored here.
          </p>
        </section>
        <section className="mx-auto max-w-screen-lg animate-in">
          <div className="columns-1 gap-px overflow-hidden rounded sm:columns-2 md:columns-3 lg:columns-4">
            <AlbumContent albums={albumList} />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Album;
