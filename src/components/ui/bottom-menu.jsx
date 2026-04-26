"use client";

import { useState } from "react";
import { Home, Plus, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { icon: Plus, label: "Add Star", action: "add" },
  { icon: Star, label: "My Stars", action: "myStars"}
];

export default function BottomMenu({ onAddClick, onMyStarsClick }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
          flex items-center gap-2
          bg-white/70 border
          border-white/50 rounded-full
          px-4 py-3 shadow-lg
          backdrop-blur-sm
        "
      >
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredIdx === idx;
          const isNeighbor =
            hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          return (
            <div key={item.label} className="flex items-center">
              <button
                onClick={() => {
                  if (item.action === "add") {
                    onAddClick?.();
                  } else if (item.action == "myStars") {
                    onMyStarsClick?.()
                  } else {
                    navigate(item.path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`
                  group relative flex items-center justify-center
                  rounded-full transition-all duration-300

                  ${
                    isActive
                      ? "bg-white text-black shadow-md scale-110"
                      : "text-black hover:bg-white/80"
                  }
                  ${
                    isHovered
                      ? "w-14 h-14"
                      : isNeighbor
                        ? "w-12 h-12"
                        : "w-10 h-10"
                  }
                `}
              >
                <item.icon
                  className={`
                    transition-all duration-300
                    ${isHovered ? "w-7 h-7" : isNeighbor ? "w-5 h-5" : "w-4 h-4"}
                  `}
                  strokeWidth={2.5}
                />

                <span
                  className="
                    absolute -top-10
                    scale-0 opacity-0
                    bg-black text-white text-xs
                    px-2 py-1 rounded-md
                    transition-all duration-200 transform
                    group-hover:scale-100 group-hover:opacity-100
                  "
                >
                  {item.label}
                </span>
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
