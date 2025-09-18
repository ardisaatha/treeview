"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  open: boolean;
  x?: number;
  y?: number;
  placement?: Placement;
  onClose?: () => void;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  open,
  x = 0,
  y = 0,
  placement = "bottom",
  onClose,
  children,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        onClose?.();
      }
    };
    if (open) {
      window.addEventListener("mousedown", handleClick);
    }
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  // placement offset
  let style: React.CSSProperties = { top: y, left: x };
  if (placement === "top") style = { top: y - 40, left: x };
  if (placement === "bottom") style = { top: y + 10, left: x };
  if (placement === "left") style = { top: y, left: x - 120 };
  if (placement === "right") style = { top: y, left: x + 10 };

  return ReactDOM.createPortal(
    <div
      ref={tooltipRef}
      className="tw-absolute tw-z-50 tw-bg-white tw-border tw-rounded-md tw-shadow-md tw-p-2 tw-w-40"
      style={style}
    >
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;
