import { MotionValue } from "framer-motion";
import { ReactNode } from "react";

// Context to access time context
export interface TimeContextType {
  time: MotionValue<number>;
  visibleIcons: number;
}

export interface TimeContextProps {
  children: ReactNode;
}

export default TimeContextType;
