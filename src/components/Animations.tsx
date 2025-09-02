// import React, { useEffect, useRef } from "react";

// type HexColor = `#${string}`;

// interface GradientBarProps {
//   height?: number;
//   colors?: readonly HexColor[];
//   lineHeight?: number;
//   blur?: number;
//   margin?: number;   // відступи від країв
//   maxWidth?: number; // максимальна довжина лінії
//   speed?: number;    // px/кадр — швидкість руху градієнта
// }

// export default function GradientBar({
//   height = 80,
//   colors = ["#27aae1", "#1c75bc", "#2b3990", "#d34d4f"],
//   lineHeight = 3,
//   blur = 0.6,
//   margin = 20,
//   maxWidth = 1080,
//   speed = 2,
// }: GradientBarProps) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let raf = 0;
//     let offset = 0; // фаза градієнта в px

//     const setSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = height;
//     };
//     setSize();

//     // offscreen pattern, перебудовується на resize
//     let patternCanvas = document.createElement("canvas");
//     let pctx = patternCanvas.getContext("2d")!;
//     let pattern: CanvasPattern | null = null;

//     const rebuildPattern = () => {
//       const barWidth = Math.min(canvas.width - margin * 2, maxWidth);
//       // довжина циклу = ширина смуги → безшовне повторення
//       patternCanvas.width = Math.max(1, Math.floor(barWidth));
//       patternCanvas.height = Math.max(1, Math.ceil(lineHeight * 4));
//       pctx = patternCanvas.getContext("2d")!;
//       pctx.clearRect(0, 0, patternCanvas.width, patternCanvas.height);

//       // малюємо линійний градієнт по всій довжині циклу і дублюємо перший колір в кінці
//       const grad = pctx.createLinearGradient(0, 0, patternCanvas.width, 0);
//       const n = colors.length;
//       for (let i = 0; i <= n; i++) {
//         grad.addColorStop(i / n, colors[i % n]);
//       }
//       pctx.fillStyle = grad;
//       pctx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

//       pattern = ctx.createPattern(patternCanvas, "repeat");
//     };

//     const draw = () => {
//       if (!pattern) rebuildPattern();

//       const yCenter = Math.floor(canvas.height / 2);
//       const barWidth = Math.min(canvas.width - margin * 2, maxWidth);
//       const startX = (canvas.width - barWidth) / 2;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       ctx.save();
//       if (blur > 0) ctx.filter = `blur(${blur}px)`;
//       // прокручуємо візерунок: зрушуємо систему координат на -offset,
//       // а саму «пілюлю» малюємо зі зворотним +offset, щоб вона лишалась на місці
//       ctx.translate(-offset, 0);
//       if (pattern) ctx.fillStyle = pattern;

//       const r = lineHeight / 2;
//       const w = barWidth;
//       const h = lineHeight;
//       const y = yCenter - h / 2;

//       ctx.beginPath();
//       ctx.moveTo(startX + offset + r, y);
//       ctx.lineTo(startX + offset + w - r, y);
//       ctx.quadraticCurveTo(startX + offset + w, y, startX + offset + w, y + r);
//       ctx.lineTo(startX + offset + w, y + h - r);
//       ctx.quadraticCurveTo(startX + offset + w, y + h, startX + offset + w - r, y + h);
//       ctx.lineTo(startX + offset + r, y + h);
//       ctx.quadraticCurveTo(startX + offset, y + h, startX + offset, y + h - r);
//       ctx.lineTo(startX + offset, y + r);
//       ctx.quadraticCurveTo(startX + offset, y, startX + offset + r, y);
//       ctx.closePath();
//       ctx.fill();
//       ctx.restore();

//       // фаза по колу довжиною barWidth → безшовний цикл
//       offset = (offset + speed) % Math.max(1, barWidth);
//       raf = requestAnimationFrame(draw);
//     };

//     const onResize = () => {
//       cancelAnimationFrame(raf);
//       setSize();
//       rebuildPattern();
//       raf = requestAnimationFrame(draw);
//     };

//     rebuildPattern();
//     raf = requestAnimationFrame(draw);

//     window.addEventListener("resize", onResize);
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [height, colors, lineHeight, blur, margin, maxWidth, speed]);

//   return (
//     <div className="relative w-full flex justify-center items-center">
//       <canvas ref={canvasRef} className="block" />
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";

type HexColor = `#${string}`;

interface GradientBarProps {
  height?: number;
  colors?: readonly HexColor[];
  lineHeight?: number;
  blur?: number;
  margin?: number;   // відступи від країв
  maxWidth?: number; // максимальна довжина лінії
  speed?: number;    // px/кадр — швидкість руху градієнта
  pulse?: boolean;   // вкл/викл пульсацію товщини
}

export default function GradientBar({
  height = 80,
  colors = ["#27aae1", "#1c75bc", "#2b3990", "#d34d4f"],
  lineHeight = 3,
  blur = 0.6,
  margin = 20,
  maxWidth = 1080,
  speed = 1.2,
  pulse = true,
}: GradientBarProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let offset = 0; // фаза градієнта в px
    let time = 0;   // час для пульсації

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
    };
    setSize();

    // offscreen pattern, перебудовується на resize
    let patternCanvas = document.createElement("canvas");
    let pctx = patternCanvas.getContext("2d")!;
    let pattern: CanvasPattern | null = null;

    const rebuildPattern = () => {
      const barWidth = Math.min(canvas.width - margin * 2, maxWidth);
      // довжина циклу = ширина смуги → безшовне повторення
      patternCanvas.width = Math.max(1, Math.floor(barWidth));
      patternCanvas.height = Math.max(1, Math.ceil(lineHeight * 4));
      pctx = patternCanvas.getContext("2d")!;
      pctx.clearRect(0, 0, patternCanvas.width, patternCanvas.height);

      // малюємо линійний градієнт по всій довжині циклу і дублюємо перший колір в кінці
      const grad = pctx.createLinearGradient(0, 0, patternCanvas.width, 0);
      const n = colors.length;
      for (let i = 0; i <= n; i++) {
        // нелінійний розподіл: використаємо квадрат для більшого часу на середніх відтінках
        const rawT = i / n;
        const t = rawT * rawT; // кривизна переходів
        grad.addColorStop(t, colors[i % n]);
      }
      pctx.fillStyle = grad;
      pctx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

      pattern = ctx.createPattern(patternCanvas, "repeat");
    };

    const draw = () => {
      if (!pattern) rebuildPattern();

      const yCenter = Math.floor(canvas.height / 2);
      const barWidth = Math.min(canvas.width - margin * 2, maxWidth);
      const startX = (canvas.width - barWidth) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      if (blur > 0) ctx.filter = `blur(${blur}px)`;
      ctx.translate(-offset, 0);
      if (pattern) ctx.fillStyle = pattern;

      // пульсація товщини (синус)
      const pulseFactor = pulse ? (1 + 0.5 * Math.sin(time / 30)) : 1;
      const dynamicHeight = lineHeight * pulseFactor;

      const r = dynamicHeight / 2;
      const w = barWidth;
      const h = dynamicHeight;
      const y = yCenter - h / 2;

      ctx.beginPath();
      ctx.moveTo(startX + offset + r, y);
      ctx.lineTo(startX + offset + w - r, y);
      ctx.quadraticCurveTo(startX + offset + w, y, startX + offset + w, y + r);
      ctx.lineTo(startX + offset + w, y + h - r);
      ctx.quadraticCurveTo(startX + offset + w, y + h, startX + offset + w - r, y + h);
      ctx.lineTo(startX + offset + r, y + h);
      ctx.quadraticCurveTo(startX + offset, y + h, startX + offset, y + h - r);
      ctx.lineTo(startX + offset, y + r);
      ctx.quadraticCurveTo(startX + offset, y, startX + offset + r, y);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // оновлюємо фазу
      offset = (offset + speed) % Math.max(1, barWidth);
      time++;
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      setSize();
      rebuildPattern();
      raf = requestAnimationFrame(draw);
    };

    rebuildPattern();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [height, colors, lineHeight, blur, margin, maxWidth, speed, pulse]);

  return (
    <div className="relative w-full flex justify-center items-center">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
