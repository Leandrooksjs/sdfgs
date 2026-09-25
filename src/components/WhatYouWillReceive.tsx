import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
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

  const handlePrev = () => {
    const newIdx = Math.max(0, currentIndex - 1);
    scrollToCard(newIdx);
  };

  const handleNext = () => {
    const newIdx = Math.min(CAROUSEL_BONUSES.length - 1, currentIndex + 1);
    scrollToCard(newIdx);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    hasMovedSignificantly.current = false;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const distance = (e.pageX - containerRef.current.offsetLeft - startX.current) * 1.2;
    if (Math.abs(distance) > 5) {
      hasMovedSignificantly.current = true;
    }
    containerRef.current.scrollLeft = scrollLeftStart.current - distance;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  };

  return (
    <section
      id="o-que-vai-receber"
      className="bg-transparent px-4 py-12 sm:py-16 text-slate-800"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            VEJA NA PRÁTICA TUDO O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        <div className="relative">
          {/* Previous Button (Desktop) */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Card anterior"
            className="absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button (Desktop) */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === CAROUSEL_BONUSES.length - 1}
            aria-label="Próximo card"
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-6 sm:px-12 select-none cursor-grab active:cursor-grabbing touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAROUSEL_BONUSES.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  if (!hasMovedSignificantly.current) {
                    scrollToCard(index);
                  }
                }}
                className={`carousel-card snap-center shrink-0 w-[82vw] max-w-[320px] sm:max-w-[360px] flex flex-col rounded-3xl border bg-white shadow-md transition-all duration-300 overflow-hidden cursor-pointer touch-pan-y ${
                  currentIndex === index
                    ? "border-rose-400 ring-2 ring-rose-200 shadow-lg scale-[1.01]"
                    : "border-slate-200/90 hover:border-slate-300 opacity-95"
                }`}
              >
                {/* Header idêntico à imagem de referência: azul suave com coração branco e BÔNUS 0X */}
                <div className="w-full bg-[#8cb9e6] py-2 sm:py-2.5 px-3 flex items-center justify-center gap-1.5 select-none text-white shadow-xs">
                  <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white text-white shrink-0" aria-hidden="true" />
                  <span className="font-black text-sm sm:text-base tracking-wide uppercase">
                    BÔNUS {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="w-full bg-white flex items-center justify-center p-3 aspect-square overflow-hidden touch-pan-y">
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    draggable={false}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain rounded-2xl select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                <div className="border-t border-slate-100 py-3.5 px-3 text-center bg-white flex flex-col items-center justify-center">
                  <p className="text-xs sm:text-sm font-black text-slate-800 line-clamp-1 leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Controls & Dots */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Card anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {CAROUSEL_BONUSES.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToCard(dotIdx)}
                  aria-label={`Ir para o card ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === dotIdx
                      ? "w-7 h-2.5 bg-rose-500 shadow-sm shadow-rose-200"
                      : "w-2.5 h-2.5 bg-rose-200/80 hover:bg-rose-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === CAROUSEL_BONUSES.length - 1}
              aria-label="Próximo card"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
