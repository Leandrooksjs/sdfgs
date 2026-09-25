import React, { useRef, useState } from "react";
import { CAROUSEL_BONUSES } from "../data/content";

export const WhatYouWillReceive: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const updateProgressFromScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
  };

  const handleSlider = (value: number) => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = (value / 100) * maxScroll;
    setScrollProgress(value);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;

    const distance = e.pageX - startX.current;
    container.scrollLeft = scrollLeftStart.current - distance;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="o-que-vai-receber"
      className="bg-transparent px-4 py-12 text-slate-800 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            VEJA NA PRÁTICA TUDO O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onScroll={updateProgressFromScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex cursor-grab gap-4 overflow-x-auto px-2 py-4 select-none active:cursor-grabbing sm:gap-6 sm:px-8 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAROUSEL_BONUSES.map((item) => (
              <div
                key={item.id}
                className="carousel-card aspect-square w-[92vw] max-w-[680px] shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md sm:w-[72vw] lg:w-[60vw]"
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white">
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    draggable={false}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain pointer-events-none select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 w-full max-w-sm px-3 sm:mt-8">
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={scrollProgress}
              onInput={(e) =>
                handleSlider(Number((e.target as HTMLInputElement).value))
              }
              onChange={(e) => handleSlider(Number(e.target.value))}
              aria-label="Deslizar entre os materiais"
              className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-rose-100 outline-none touch-pan-x
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:w-14
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-rose-500
                [&::-webkit-slider-thumb]:shadow-sm
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:w-14
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:bg-rose-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
