"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import { Logos } from "./assets/logos";
import { useTimeContext } from "./Hooks/useTimeContext";
import { TimeProvider } from "./Contexts/TimeContext";
import { MovingLogoType } from "./Interfaces/MovingLogoType";

/*--Animated Logos--*/
export const MotionLogo: React.FC = () => {
  // Linear || Circular
  // Dynamically change the logo animation type
  return (
    <TimeProvider>
      <CircularMotion />
    </TimeProvider>
  );
};

// Circular Motion for Logos
const CircularMotion: React.FC = () => {
  // Position elements in a perfect circle
  const numOfIcons = Logos.length;
  const radius = numOfIcons * 20;
  const offsetAngles = useTransform(() =>
    Array.from({ length: numOfIcons }, (_, i) => (i / numOfIcons) * 2 * Math.PI)
  );
  const offsets = offsetAngles.get();
  const xFuntion = Math.cos;
  const yFunction = Math.sin;

  // Logos to animation
  const logos: MovingLogoType[] = Logos.map((logo, index) => {
    return {
      key: logo.key,
      icon: logo.icon,
      link: logo.link,
      style: logo.style,
      xMovement: xFuntion,
      yMovement: yFunction,
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
      {/* border-2 border-red-500 */}
      {logos.map((logo, index) => {
        return (
          visibleIcons > index && (
            <MovingLogo
              key={logo.key}
              icon={logo.icon}
              link={logo.link}
              style={{ color: logo.style?.color || "#fff" }}
              xMovement={logo.xMovement}
              yMovement={logo.yMovement}
              offset={offsets[index]}
              radius={radius}
            />
          )
        );
      })}
    </motion.div>
  );
};

// Linear Motion for Logos
const LinearMotion: React.FC = () => {
  const numOfIcons = Logos.length;

  return <motion.div className="flex "></motion.div>;
  {
    /* border-2 border-red-500 */
  }
};

// Logo component for circular motion
const MovingLogo: React.FC<MovingLogoType> = (logo) => {
  // Move according to time and offset about a circle
  const time = useTimeContext().time;
  const { offset = 0, radius = 1 } = logo;

  // 'x' and 'y'
  const x = useTransform(time, (t) => {
    return logo.xMovement(-t / 8000 - offset) * radius;
  });
  const y = useTransform(time, (t) => {
    return logo.yMovement(-t / 8000 - offset) * -radius;
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
      {/* border-2 border-green-500 */}
      <a
        rel="noopener noreferrer"
        href={logo.link}
        target="_blank"
        className=""
      >
        <logo.icon style={logo.style} className="flex relative w-16 h-16" />
      </a>
    </motion.div>
  );
};

export default MotionLogo;
