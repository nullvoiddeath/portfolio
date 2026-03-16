"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FullPageScrollProps {
  children: ReactNode[];
}

export function FullPageScroll({ children }: FullPageScrollProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;

  // Cooldown to prevent rapid slide changes
  const cooldown = 800; // ms — matches CSS transition duration

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    if (clamped === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(clamped);
    // Notify other components
    window.dispatchEvent(new CustomEvent("slidechange", { detail: { slide: clamped } }));
    setTimeout(() => setIsAnimating(false), cooldown);
  };

  useEffect(() => {
    let accumulated = 0;
    const threshold = 50; // px of scroll needed to trigger

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      accumulated += e.deltaY;

      if (Math.abs(accumulated) >= threshold) {
        if (accumulated > 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
        accumulated = 0;
      }

      // Reset accumulator after a pause
      clearTimeout((onWheel as { timer?: ReturnType<typeof setTimeout> }).timer);
      (onWheel as { timer?: ReturnType<typeof setTimeout> }).timer = setTimeout(() => {
        accumulated = 0;
      }, 200);
    };

    // Touch support
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        goToSlide(currentSlide + (diff > 0 ? 1 : -1));
      }
    };

    // Keyboard support
    const onKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentSlide, isAnimating, totalSlides]);

  // Handle nav anchor clicks
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        goToSlide(0);
        return;
      }
      const id = href.slice(1);
      const container = containerRef.current;
      if (!container) return;
      const slides = Array.from(container.children);
      const idx = slides.findIndex(
        (el) => el.id === id || el.querySelector(`#${id}`)
      );
      if (idx >= 0) {
        e.preventDefault();
        goToSlide(idx);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [currentSlide, isAnimating, totalSlides]);

  return (
    <div className="fixed inset-0 z-[1] overflow-hidden">
      <div
        ref={containerRef}
        className="h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {children.map((child, i) => (
          <div key={i} className="h-screen w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group flex h-3 w-3 items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block h-1.5 w-1.5 transition-all duration-300"
              style={{
                backgroundColor: i === currentSlide
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(0, 0, 0, 0.1)",
                transform: i === currentSlide ? "scale(1.5)" : "scale(1)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
