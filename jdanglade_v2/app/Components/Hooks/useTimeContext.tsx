import { useContext } from "react";
import { TimeContext } from "../Contexts/TimeContext";

// Error protected time context hook
export const useTimeContext = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useTime must be used within a Time Provider");
  }
  return context;
};
