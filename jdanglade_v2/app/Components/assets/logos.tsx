import {
  TbBrandNextjs,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbSql,
  TbBrandPrisma,
} from "react-icons/tb";
import { IoLogoGithub, IoLogoLinkedin, IoImage } from "react-icons/io5";
import { MovingLogoType } from "../Interfaces/MovingLogoType";

// List of contact options
export const contactOptions: MovingLogoType[] = [
  { icon: IoLogoGithub, link: "https://www.github.com/jdanglade" },
  {
    icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/in/justin-danglade/",
  },
  {
    icon: IoImage,
    link: "https://www.github.com/jdanglade",
  },
];

// Logos to render
export const logos: MovingLogoType[] = [
  {
    key: 1,
    icon: TbBrandNextjs,
    style: { color: "rgb(f,f,f)" },
  },
  {
    key: 2,
    icon: TbBrandGraphql,
    style: { color: "rgb(225,0,152)" },
  },
  {
    key: 3,
    icon: TbBrandMongodb,
    style: { color: "rgb(75,165,95)" },
  },
  {
    key: 4,
    icon: TbBrandNodejs,
    style: { color: "rgb(56,124,160)" },
  },
  {
    key: 5,
    icon: TbSql,
    style: { color: "rgb(f,f,f)" },
  },
  {
    key: 6,
    icon: TbBrandPrisma,
    style: { color: "rgb(102,100,242)" },
  },
];
