import Image from "next/image";
import { ProjectType } from "./Interfaces/ProjectType";

// An element that contains an example project
const ProjectCard: React.FC<ProjectType> = ({
  projectImage,
  name,
  description,
  technologies,
}) => {
  return (
    <div className="flex justify-center items-start relative border-2 border-green-500">
      <Image
        src={projectImage}
        alt="Profile Picture"
        priority
        className="flex object-cover w-5/6 h-auto relative border-2 border-blue-500"
      />
      <div className="flex flex-col justify-center items-center w-5/6 h-auto relative border-2 border-blue-500">
        <h1 className="flex text-nowrap text-2xl relative border-2 border-red-500">
          {name}
        </h1>
        <p>{description}</p>
        {technologies.map((tech, index) => (
          <p key={index}>Technologies used</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
