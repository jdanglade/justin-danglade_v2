import { createContext, useEffect, useState } from "react";
import { useTime } from "framer-motion";
import TimeContextType, {
  TimeContextProps,
} from "../Interfaces/TimeContextType";
import { logos } from "../assets/logos";

// Time context
export const TimeContext = createContext<TimeContextType | undefined>(
  undefined
);

// Time context provider
export const TimeProvider: React.FC<TimeContextProps> = ({ children }) => {
  const numOfIcons = logos.length;
  const time = useTime();
  // Icons will become visible every 1 second
  const [visibleIcons, setVisibleIcons] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      visibleIcons < numOfIcons && setVisibleIcons((prev: number) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <TimeContext.Provider value={{ time, visibleIcons }}>
      {children}
    </TimeContext.Provider>
  );
};
