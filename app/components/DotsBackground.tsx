"use client";

import { useEffect, useState } from "react";

interface Dot {
  id: number;
  left: string;
  top: string;
  size: "medium" | "large";
}

export function DotsBackground() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const dots: Dot[] = [];
    const gridCells: Set<string> = new Set();
    const cellSize = 20;
    const maxCols = Math.ceil(100 / cellSize);
    const maxRows = Math.ceil(100 / cellSize);

    let attempts = 0;
    const maxAttempts = 10 * 10;

    while (dots.length < 10 && attempts < maxAttempts) {
      const col = Math.floor(Math.random() * maxCols);
      const row = Math.floor(Math.random() * maxRows);
      const cellKey = `${col},${row}`;

      if (!gridCells.has(cellKey)) {
        gridCells.add(cellKey);
        const size = Math.random() < 0.3 ? "medium" : "large";
        const offsetX = Math.random() * cellSize;
        const offsetY = Math.random() * cellSize;
        const left = col * cellSize + offsetX;
        const top = row * cellSize + offsetY;

        dots.push({
          id: dots.length,
          left: `${left}%`,
          top: `${top}%`,
          size,
        });
      }
      attempts++;
    }

    setDots(dots);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full bg-[#D5848C]/50 ${
            dot.size === "medium" ? "w-16 h-16" : "w-32 h-32"
          }`}
          style={{
            left: dot.left,
            top: dot.top,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
