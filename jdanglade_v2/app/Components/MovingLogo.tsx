"use client";

import React from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import { logos } from "./assets/logos";
import { useTimeContext } from "./Hooks/useTimeContext";
import { TimeProvider } from "./Contexts/TimeContext";
import LogoMotionType, { MovingLogoType } from "./Interfaces/MovingLogoType";

/*--Animated Logos--*/
export const MovingLogo: React.FC = () => {
  // Linear || Circular

  return (
    <TimeProvider>
      <CircularMotion />
    </TimeProvider>
  );
};

// Circular Motion for Logos
const CircularMotion: React.FC = () => {
  // Position elements in a perfect circle
  const numOfIcons = logos.length;
  const radius = numOfIcons * 20;
  const offsetAngles = useTransform(() =>
    Array.from({ length: numOfIcons }, (_, i) => (i / numOfIcons) * 2 * Math.PI)
  );
  const offsets = offsetAngles.get();
  console.log(offsets);

  // Logos to animation
  const Logos: MovingLogoType[] = logos.map((logo, index) => {
    return {
      key: logo.key,
      icon: logo.icon,
      style: logo.style,
      rotation: true,
      radius: radius,
      offset: offsets[index],
    };
  });

  // Animate Logos
  const visibleIcons = useTimeContext().visibleIcons;
  return (
    <motion.div
      style={{
        height: radius * 2,
        width: radius * 2,
        padding: radius + 32,
      }}
      className="flex justify-center items-center relative z-0"
    >
      {Logos.map((logo, index) => {
        return (
          visibleIcons > index && (
            <LogoMotion
              key={logo.key}
              icon={logo.icon}
              style={{ color: logo.style?.color || "#fff" }}
              offset={offsets[index]}
              radius={radius}
            />
          )
        );
      })}
    </motion.div>
  );
};

// Logo component for circular motion
const LogoMotion: React.FC<MovingLogoType> = (logo) => {
  // Move according to time and offset about a circle
  const { offset = 10, radius = 150 } = logo;
  const time = useTimeContext().time;
  const x = useTransform(time, (t) => {
    return Math.cos(-t / 8000 - offset) * radius;
  });
  const y = useTransform(time, (t) => {
    return Math.sin(-t / 8000 - offset) * -radius;
  });

  // Framer Motion variants
  const LogoVariants = {
    initial: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  // Render the logo
  return (
    <motion.div
      variants={LogoVariants}
      initial="initial"
      animate="show"
      style={{
        translateX: x,
        translateY: y,
      }}
      className="flex justify-center items-center absolute"
    >
      <logo.icon style={logo.style} className="flex relative w-16 h-16" />
    </motion.div>
  );
};

// Linear Motion for Logos
const LinearMotion: React.FC = () => {
  return <></>;
};

// Logo component for linear motion
const LinearMotionLogo: React.FC<MovingLogoType> = (logo) => {
  return <></>;
};

export default MovingLogo;
