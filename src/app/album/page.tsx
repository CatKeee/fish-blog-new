"use client";

// import type { Metadata } from "next";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import Icon from "@/components/Icon";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// export const metadata: Metadata = {
//   title: "Projects",
//   description: "123",
// };

interface LogEntry {
  title: string;
  date: string;
  path: string;
  description?: string;
}

const logEntries: LogEntry[] = [
  { title: "01", date: "Dec 16, 2022", path: "/guofu/12.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/09.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/03.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/03.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/06.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/guofu/06.jpg" },
  { title: "01", date: "Dec 16, 2022", path: "/bg/13.jpg" },
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

  // { title: "01", date: "Dec 16, 2022", path: "/guofu/avatar.png" },
  // { title: "01", date: "Dec 16, 2022", path: "/guofu/guofu.svg" },
  // { title: "01", date: "Dec 16, 2022", path: "/guofu/hb-white.png" },
  // { title: "01", date: "Dec 16, 2022", path: "/guofu/hb.png" },
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
            <PhotoProvider>
              {logEntries.map((item, index) => (
                <div
                  key={index}
                  className="focus group relative mb-px break-inside-avoid overflow-hidden"
                >
                  <PhotoView src={item.path}>
                    <Image
                      src={item.path}
                      alt="Photo by Drew Beamer"
                      priority
                      fill
                      className="!static bg-muted object-contain"
                    />
                  </PhotoView>
                  <p className="absolute bottom-0 w-full translate-y-full bg-black/50 p-2 leading-none text-white transition-transform group-hover:translate-y-0">
                    {item.date}
                  </p>
                </div>
              ))}
            </PhotoProvider>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Album;
