import React, { useRef, useState } from "react";
import { CAROUSEL_BONUSES } from "../data/content";
import { DeferredImage } from "./DeferredImage";

export const WhatYouWillReceive: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDraggingCarousel = useRef(false);
  const carouselStartX = useRef(0);
  const scrollLeftStart = useRef(0);

  const isDraggingSlider = useRef(false);

  const updateProgressFromScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.max(0, Math.min(100, progress)));
  };

  const setCarouselProgress = (value: number) => {
    const container = containerRef.current;
    if (!container) return;

    const clamped = Math.max(0, Math.min(100, value));
    const maxScroll = container.scrollWidth - container.clientWidth;

    container.scrollLeft = (clamped / 100) * maxScroll;
    setScrollProgress(clamped);
  };

  const progressFromPointer = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const thumbWidth = 56;
    const usableWidth = Math.max(1, rect.width - thumbWidth);
    const relativeX = clientX - rect.left - thumbWidth / 2;
    const progress = (relativeX / usableWidth) * 100;

    setCarouselProgress(progress);
  };

  const handleCarouselPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    const container = containerRef.current;
    if (!container) return;

    isDraggingCarousel.current = true;
    carouselStartX.current = e.clientX;
    scrollLeftStart.current = container.scrollLeft;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleCarouselPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!isDraggingCarousel.current || !container) return;

    const distance = e.clientX - carouselStartX.current;
    container.scrollLeft = scrollLeftStart.current - distance;
  };

  const handleCarouselPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingCarousel.current) return;

    isDraggingCarousel.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleSliderPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;

    isDraggingSlider.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    progressFromPointer(e.clientX);
  };

  const handleSliderPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingSlider.current) return;
    progressFromPointer(e.clientX);
  };

  const handleSliderPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingSlider.current) return;

    isDraggingSlider.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section
      id="o-que-vai-receber"
      className="perf-section bg-transparent px-4 py-12 text-slate-800 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            VEJA NA PRÁTICA UM POUCO DO QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onScroll={updateProgressFromScroll}
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={handleCarouselPointerEnd}
            onPointerCancel={handleCarouselPointerEnd}
            className="flex cursor-grab gap-4 overflow-x-auto px-2 py-4 select-none active:cursor-grabbing sm:gap-6 sm:px-8 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAROUSEL_BONUSES.map((item) => (
              <div
                key={item.id}
                className="carousel-card aspect-square w-[92vw] max-w-[680px] shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md sm:w-[72vw] lg:w-[60vw]"
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white">
                  <DeferredImage
                    src={item.imageSrc}
                    alt={item.alt}
                    width={1254}
                    height={1254}
                    draggable={false}
                    referrerPolicy="no-referrer"
                    rootMargin="180px"
                    className="pointer-events-none h-full w-full select-none object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 w-full max-w-sm px-3 sm:mt-8">
            <div
              ref={sliderRef}
              role="slider"
              aria-label="Deslizar entre os materiais"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(scrollProgress)}
              tabIndex={0}
              onPointerDown={handleSliderPointerDown}
              onPointerMove={handleSliderPointerMove}
              onPointerUp={handleSliderPointerEnd}
              onPointerCancel={handleSliderPointerEnd}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setCarouselProgress(scrollProgress + 2);
                }

                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setCarouselProgress(scrollProgress - 2);
                }

                if (e.key === "Home") {
                  e.preventDefault();
                  setCarouselProgress(0);
                }

                if (e.key === "End") {
                  e.preventDefault();
                  setCarouselProgress(100);
                }
              }}
              className="relative h-5 w-full cursor-ew-resize touch-none select-none outline-none"
            >
              <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-rose-100" />
              <div
                className="absolute top-1/2 h-5 w-14 -translate-y-1/2 rounded-full bg-rose-500 shadow-sm"
                style={{
                  left: `calc((100% - 56px) * ${scrollProgress / 100})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
