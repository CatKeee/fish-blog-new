"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
  albums: AlbumItem[];
}

const AlbumContent = (props: Props) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      groupAll: true,
    });
  });
  return (
    <>
      {props.albums.map((item, index) => (
        <div
          key={index}
          className="focus group relative mb-px break-inside-avoid overflow-hidden"
        >
          <Image
            src={item.path}
            alt="Photo by Drew Beamer"
            priority
            fill
            {...{
              "data-fancybox": "",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="!static bg-muted object-contain"
          />
          <p className="absolute bottom-0 w-full translate-y-full bg-black/50 p-2 leading-none text-white transition-transform group-hover:translate-y-0">
            {item.date}
          </p>
        </div>
      ))}
    </>
  );
};

export default AlbumContent;
