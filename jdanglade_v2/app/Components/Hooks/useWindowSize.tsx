import { useState, useEffect } from "react";
type WidthAndHeightTuple = [number, number];

function getCurrentWidthAndHeight(): WidthAndHeightTuple {
  return [window.innerWidth, window.innerHeight] as WidthAndHeightTuple;
}

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
