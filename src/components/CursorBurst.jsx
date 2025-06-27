import { useEffect, useRef } from "react";

const COLORS = [
  "#b16bff",
  "#1ac9ff",
  "#fa44e9",
  "#a98bfa"
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

export default function CursorBurst() {
  const canvasRef = useRef(null);
  const bursts = useRef([]);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    function handleMove(e) {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
      const burst = [];
      for (let i = 0; i < 13; i++) {
        const angle = random(0, Math.PI * 2);
        const speed = random(1.5, 6);
        burst.push({
          x: cursor.current.x,
          y: cursor.current.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: randomColor(),
          radius: random(7, 16),
          blur: random(12, 38)
        });
      }
      bursts.current.push(...burst);
    }

    window.addEventListener("mousemove", handleMove);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      bursts.current = bursts.current.filter((p) => p.alpha > 0.03);
      for (const p of bursts.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.blur;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96; 
        p.vy *= 0.96;
        p.radius *= 0.98;
        p.alpha *= 0.93;
      }

      ctx.save();
      ctx.globalAlpha = 1;
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(cursor.current.x, cursor.current.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(draw);
    }
    draw();

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10000,
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
