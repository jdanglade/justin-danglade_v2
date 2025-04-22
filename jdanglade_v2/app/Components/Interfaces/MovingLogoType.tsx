import { MotionValue } from "framer-motion";
import { IconType } from "react-icons";

// Basic Motion capable Logo interface
export interface MovingLogoType {
  key?: number;
  icon: IconType;
  link?: string;
  style?: {
    color: string;
  };
  time?: MotionValue<number>;
  xPos?: MotionValue<number>;
  yPos?: MotionValue<number>;
  radius?: number;
  offset?: number;
}

export default MovingLogoType;
