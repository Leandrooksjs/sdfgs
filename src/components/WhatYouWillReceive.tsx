import React, { useState, useRef, useEffect } from "react";
import { CAROUSEL_BONUSES } from "../data/content";

export const WhatYouWillReceive: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const rafId = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMovedSignificantly = useRef(false);

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !containerRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll(".carousel-card");
      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setCurrentIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    });
  };

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".carousel-card");
    const targetCard = cards[index] as HTMLElement;
    if (!targetCard) return;

    isProgrammaticScroll.current = true;
    setCurrentIndex(index);

    const cardRect = targetCard.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const targetScrollLeft =
      cardRect.left -
      containerRect.left +
      container.scrollLeft -
      (container.clientWidth - targetCard.offsetWidth) / 2;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const clampedScroll = Math.max(0, Math.min(targetScrollLeft, maxScroll));

    container.style.scrollSnapType = "none";
    container.scrollTo({ left: clampedScroll, behavior: "smooth" });

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (container) {
        container.style.scrollSnapType = "x mandatory";
      }
      isProgrammaticScroll.current = false;
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    hasMovedSignificantly.current = false;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const distance =
      (e.pageX - containerRef.current.offsetLeft - startX.current) * 1.2;

    if (Math.abs(distance) > 5) {
      hasMovedSignificantly.current = true;
    }

    containerRef.current.scrollLeft = scrollLeftStart.current - distance;
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
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-4 select-none active:cursor-grabbing sm:gap-6 sm:px-8 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAROUSEL_BONUSES.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  if (!hasMovedSignificantly.current) {
                    scrollToCard(index);
                  }
                }}
                className={`carousel-card aspect-square w-[92vw] max-w-[680px] shrink-0 snap-center overflow-hidden rounded-3xl border bg-white shadow-md transition-all duration-300 sm:w-[72vw] lg:w-[60vw] ${
                  currentIndex === index
                    ? "scale-[1.01] border-rose-400 ring-2 ring-rose-200 shadow-lg"
                    : "border-slate-200/90 opacity-95 hover:border-slate-300"
                }`}
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
              max={CAROUSEL_BONUSES.length - 1}
              step={1}
              value={currentIndex}
              onChange={(e) => scrollToCard(Number(e.target.value))}
              aria-label="Deslizar entre os materiais"
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-rose-100 outline-none touch-pan-x
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
