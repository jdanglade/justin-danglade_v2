"use client";

import { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const bg_Ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Use pointer position to update the background style of the referred element
    const updateMousePosition = (event: MouseEvent) => {
      // If element that is being referred to is null then exit function
      if (!bg_Ref.current) {
        return;
      }

      // Collect x and y positions of the pointer
      const { clientX, clientY } = event;
      // Set background color accordingly
      bg_Ref.current.style.setProperty("--x", `${clientX}px`);
      bg_Ref.current.style.setProperty("--y", `${clientY}px`);
    };
    // Run after "mousemove" event
    window.addEventListener("mousemove", updateMousePosition);

    // Releave after every render
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={bg_Ref}
      // Background color gradient is based arround the x and y variables from the pointer position
      className={
        "fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_farthest-side_at_var(--x,_50%)_var(--y,_50%),_#25005e_0%,_#000_100%)]"
      }
    />
  );
};

export default Background;
