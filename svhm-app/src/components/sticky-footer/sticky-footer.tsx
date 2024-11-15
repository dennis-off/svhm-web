import React from "react";

export default function StickyFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative h-[512px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+512px)]">
        <div className="sticky top-[calc(100vh-512px)] h-[512px]">
          {children}
        </div>
      </div>
    </div>
  );
}
