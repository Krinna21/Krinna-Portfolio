import { useRef, useEffect } from "react";

function getRandomOutsideCircle(width, height, radius) {
  let x, y;
  let cx = width / 2, cy = height / 2;
  do {
    x = Math.random() * width;
    y = Math.random() * height;
  } while (Math.sqrt((x - cx) ** 2 + (y - cy) ** 2) < radius);
  return { x, y };
}

const DOTS = 1200; 
const CURSOR_RADIUS = 60;
const CURSOR_STRENGTH = 46;
const SAFE_RADIUS = 260;
const RETURN_SPEED = 0.09;
const LINE_DISTANCE = 38;
const DOT_SIZE = 3.2;

const PALETTE = [
  "#a98bfa", 
  "#b16bff", 
  "#1ac9ff", 
  "#fa44e9" 
];

function lerpColor(a, b, t) {
  const ah = parseInt(a.replace('#',''), 16), bh = parseInt(b.replace('#',''), 16);
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
  const rr = ar + t * (br - ar), rg = ag + t * (bg - ag), rb = ab + t * (bb - ab);
  return `rgb(${rr|0},${rg|0},${rb|0})`;
}

export default function CanvasBackground({ className, scatter }) {
  const ref = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = canvas.offsetWidth, h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    let cx = w / 2, cy = h / 2;

    let dots = Array.from({ length: DOTS }, () => {
      const { x, y } = getRandomOutsideCircle(w, h, SAFE_RADIUS);
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      return {
        homeX: x,
        homeY: y,
        x,
        y,
        color,
      };
    });

    let animationFrame;
    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = lerpColor(dots[i].color, dots[j].color, 0.5) + "33"; 
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (let dot of dots) {
        let dx = dot.x - mouse.current.x;
        let dy = dot.y - mouse.current.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CURSOR_RADIUS) {
          let angle = Math.atan2(dy, dx);
          dot.x = mouse.current.x + Math.cos(angle) * CURSOR_RADIUS * 2;
          dot.y = mouse.current.y + Math.sin(angle) * CURSOR_RADIUS * 2;
        } else if (scatter) {
          let angle = Math.atan2(dot.homeY - cy, dot.homeX - cx);
          let targetX = cx + Math.cos(angle) * Math.max(w, h) * 0.75;
          let targetY = cy + Math.sin(angle) * Math.max(w, h) * 0.75;
          dot.x += (targetX - dot.x) * 0.13;
          dot.y += (targetY - dot.y) * 0.13;
        } else {
          dot.x += (dot.homeX - dot.x) * RETURN_SPEED;
          dot.y += (dot.homeY - dot.y) * RETURN_SPEED;
        }

        let fromCenter = Math.sqrt((dot.x - cx) ** 2 + (dot.y - cy) ** 2);
        if (fromCenter < SAFE_RADIUS) {
          let angle = Math.atan2(dot.y - cy, dot.x - cx);
          dot.x = cx + Math.cos(angle) * (SAFE_RADIUS + 3);
          dot.y = cy + Math.sin(angle) * (SAFE_RADIUS + 3);
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, 2 * Math.PI);
        ctx.shadowColor = dot.color + "dd";
        ctx.shadowBlur = 10;
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = 0.92;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animationFrame = requestAnimationFrame(draw);
    }

    draw();

    function move(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function leave() {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    }
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);

    function resize() {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      cx = w / 2;
      cy = h / 2;
      dots = Array.from({ length: DOTS }, () => {
        const { x, y } = getRandomOutsideCircle(w, h, SAFE_RADIUS);
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        return {
          homeX: x,
          homeY: y,
          x,
          y,
          color,
        };
      });
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", resize);
    };
  }, [scatter]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "auto",
        display: "block",
        background: "transparent",
      }}
    />
  );
}
