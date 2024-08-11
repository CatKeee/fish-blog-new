"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ProjectCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="m-auto max-w-full">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((index) => (
            <div
              className="flex w-full flex-0-0-1 transform-gpu justify-center bg-red-100"
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex">
            {slides.map((index) => (
              <div
                key={index}
                className={"shrink-0 grow-0 basis-[24%]"
                  .concat(" ")
                  .concat(index === selectedIndex ? "bg-red-500" : "")}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  type="button"
                  className="w-full cursor-pointer"
                >
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

// .embla {
//     max-width: 48rem;
//     margin: auto;
//     --slide-height: 19rem;
//     --slide-spacing: 1rem;
//     --slide-size: 100%;
//   }
//   .embla__viewport {
//     overflow: hidden;
//   }
//   .embla__container {
//     display: flex;
//     touch-action: pan-y pinch-zoom;
//     margin-left: calc(var(--slide-spacing) * -1);
//   }
//   .embla__slide {
//     transform: translate3d(0, 0, 0);
//     flex: 0 0 var(--slide-size);
//     min-width: 0;
//     padding-left: var(--slide-spacing);
//   }
//   .embla__slide__number {
//     box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
//     border-radius: 1.8rem;
//     font-size: 4rem;
//     font-weight: 600;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: var(--slide-height);
//     user-select: none;
//   }
//   .embla-thumbs {
//     --thumbs-slide-spacing: 0.8rem;
//     --thumbs-slide-height: 6rem;
//     margin-top: var(--thumbs-slide-spacing);
//   }
//   .embla-thumbs__viewport {
//     overflow: hidden;
//   }
//   .embla-thumbs__container {
//     display: flex;
//     flex-direction: row;
//     margin-left: calc(var(--thumbs-slide-spacing) * -1);
//   }
//   .embla-thumbs__slide {
//     flex: 0 0 22%;
//     min-width: 0;
//     padding-left: var(--thumbs-slide-spacing);
//   }
//   @media (min-width: 576px) {
//     .embla-thumbs__slide {
//       flex: 0 0 15%;
//     }
//   }
//   .embla-thumbs__slide__number {
//     border-radius: 1.8rem;
//     -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
//     -webkit-appearance: none;
//     appearance: none;
//     background-color: transparent;
//     touch-action: manipulation;
//     display: inline-flex;
//     text-decoration: none;
//     cursor: pointer;
//     border: 0;
//     padding: 0;
//     margin: 0;
//     box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
//     font-size: 1.8rem;
//     font-weight: 600;
//     color: var(--detail-high-contrast);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: var(--thumbs-slide-height);
//     width: 100%;
//   }
//   .embla-thumbs__slide--selected .embla-thumbs__slide__number {
//     color: var(--text-body);
//   }
