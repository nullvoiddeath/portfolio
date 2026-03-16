"use client";

import { useEffect, useRef } from "react";

export function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w: number;
    let h: number;

    // Mouse position (smoothed)
    let mouseX = -1;
    let mouseY = -1;
    let targetMouseX = -1;
    let targetMouseY = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      targetMouseX = -1;
      targetMouseY = -1;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Wave layers — each with different speed, amplitude, frequency
    const layers = [
      { y: 0.15, amp: 16, freq: 0.010, speed: 0.014, alpha: 0.12 },
      { y: 0.20, amp: 13, freq: 0.009, speed: 0.013, alpha: 0.14 },
      { y: 0.25, amp: 17, freq: 0.007, speed: 0.011, alpha: 0.16 },
      { y: 0.30, amp: 18, freq: 0.008, speed: 0.012, alpha: 0.18 },
      { y: 0.35, amp: 14, freq: 0.010, speed: 0.015, alpha: 0.15 },
      { y: 0.40, amp: 20, freq: 0.006, speed: 0.010, alpha: 0.20 },
      { y: 0.45, amp: 12, freq: 0.012, speed: 0.018, alpha: 0.14 },
      { y: 0.50, amp: 22, freq: 0.007, speed: 0.008, alpha: 0.18 },
      { y: 0.55, amp: 16, freq: 0.009, speed: 0.014, alpha: 0.16 },
      { y: 0.60, amp: 19, freq: 0.011, speed: 0.011, alpha: 0.20 },
      { y: 0.65, amp: 10, freq: 0.013, speed: 0.020, alpha: 0.14 },
      { y: 0.70, amp: 24, freq: 0.005, speed: 0.009, alpha: 0.18 },
      { y: 0.75, amp: 15, freq: 0.008, speed: 0.016, alpha: 0.16 },
      { y: 0.80, amp: 11, freq: 0.014, speed: 0.019, alpha: 0.14 },
      { y: 0.85, amp: 20, freq: 0.006, speed: 0.010, alpha: 0.16 },
    ];

    let t = 0;
    const cursorRadius = 200;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Smooth mouse tracking
      if (targetMouseX < 0) {
        mouseX += (mouseX < 0 ? 0 : -mouseX) * 0.05;
        mouseY += (mouseY < 0 ? 0 : -mouseY) * 0.05;
      } else {
        if (mouseX < 0) {
          mouseX = targetMouseX;
          mouseY = targetMouseY;
        } else {
          mouseX += (targetMouseX - mouseX) * 0.08;
          mouseY += (targetMouseY - mouseY) * 0.08;
        }
      }

      for (const layer of layers) {
        const baseY = layer.y * h;
        ctx.beginPath();
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= w; x += 3) {
          let y =
            baseY +
            Math.sin(x * layer.freq + t * layer.speed * 0.8) * layer.amp +
            Math.sin(x * layer.freq * 2.3 + t * layer.speed * 0.5 + 1.5) * layer.amp * 0.4 +
            Math.sin(x * layer.freq * 0.5 + t * layer.speed * 0.3 + 3.0) * layer.amp * 0.6;

          // Cursor repulsion — push waves away from mouse
          if (mouseX > 0) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < cursorRadius) {
              const force = (1 - dist / cursorRadius) ** 2;
              y += dy * force * 0.8;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(0, 0, 0, ${layer.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Purple shadow line — slightly offset
        const purpleBaseY = baseY + 3;
        ctx.beginPath();
        ctx.moveTo(0, purpleBaseY);
        for (let x = 0; x <= w; x += 3) {
          let y =
            purpleBaseY +
            Math.sin(x * layer.freq + t * layer.speed * 0.8 + 0.3) * layer.amp * 0.9 +
            Math.sin(x * layer.freq * 2.3 + t * layer.speed * 0.5 + 1.8) * layer.amp * 0.35 +
            Math.sin(x * layer.freq * 0.5 + t * layer.speed * 0.3 + 3.3) * layer.amp * 0.55;

          if (mouseX > 0) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < cursorRadius) {
              const force = (1 - dist / cursorRadius) ** 2;
              y += dy * force * 0.8;
            }
          }

          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(100, 50, 150, ${layer.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
