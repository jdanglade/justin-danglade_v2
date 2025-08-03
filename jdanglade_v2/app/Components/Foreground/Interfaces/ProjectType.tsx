import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

// ProjectCard component type interface
export interface ProjectType {
  projectImage: StaticImageData;
  name: string;
  description: string;
  technologies: IconType[];
}
