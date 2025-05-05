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
  xMovement: CallableFunction;
  yMovement: CallableFunction;
  radius: number | 0;
  offset: number | 1;
}

export default MovingLogoType;
