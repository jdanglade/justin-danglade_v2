import {
  TbBrandNextjs,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbSql,
  TbBrandPrisma,
} from "react-icons/tb";
import { IoLogoGithub, IoLogoLinkedin, IoImage } from "react-icons/io5";
import { MovingLogoType } from "../MotionLogo/Interfaces/MovingLogoType";

// List of contact options
const startingPoint = () => {};
export const ContactOptions: MovingLogoType[] = [
  {
    icon: IoLogoGithub,
    link: "https://www.github.com/jdanglade",
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/in/justin-danglade/",
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  // {
  //   icon: IoImage,
  //   link: "https://www.github.com/jdanglade",
  //   xMovement: startingPoint,
  //   yMovement: startingPoint,
  //   radius: 0,
  //   offset: 0,
  // },
];

// Logos to render
export const Logos: MovingLogoType[] = [
  {
    key: 1,
    icon: TbBrandNextjs,
    link: "https://nextjs.org",
    style: { color: "rgb(f,f,f)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    key: 2,
    icon: TbBrandGraphql,
    link: "https://graphql.org",
    style: { color: "rgb(225,0,152)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    key: 3,
    icon: TbBrandMongodb,
    link: "https://www.mongodb.com",
    style: { color: "rgb(75,165,95)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    key: 4,
    icon: TbBrandNodejs,
    link: "https://nodejs.org",
    style: { color: "rgb(56,124,160)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    key: 5,
    icon: TbSql,
    link: "https://www.mysql.com",
    style: { color: "rgb(f,f,f)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
  {
    key: 6,
    icon: TbBrandPrisma,
    link: "https://www.prisma.io",
    style: { color: "rgb(102,100,242)" },
    xMovement: startingPoint,
    yMovement: startingPoint,
    radius: 0,
    offset: 0,
  },
];
