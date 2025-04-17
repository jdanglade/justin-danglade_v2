import { useState, useEffect } from "react";
// Tuple to describe x and y lengths of the window
type WidthAndHeightTuple = [number, number];

// Handler function for the resize event
function getCurrentWidthAndHeight(): WidthAndHeightTuple {
  return [window.innerWidth, window.innerHeight] as WidthAndHeightTuple;
}

// Custom hook to get the current window width and height
export function useWindowSize() {
  const [windowSize, setWidthAndHeight] = useState(getCurrentWidthAndHeight());

  function handler() {
    setWidthAndHeight(getCurrentWidthAndHeight());
  }

  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return windowSize;
}
