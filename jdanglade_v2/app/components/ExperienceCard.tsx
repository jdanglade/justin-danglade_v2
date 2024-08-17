import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CardData {
  title: String;
  details: String;
  techStack: String[];
  image: StaticImport;
}

const ExperienceCard: React.FC<CardData> = ({
  title,
  details,
  techStack,
  image,
}) => {
  return (
    <div className="expCard flex my-8 mx-4 rounded-l">
      <div className="flex flex-col justify-center items-center p-2">
        <span className="text-base">{title}</span>
      </div>
      <div className="flex">
        <div className="flex px-2">
          <Image
            src={image}
            alt="App preview image"
            className="max-w-32 max-h-32 object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col flex-shrink justify-between">
          <div className="flex flex-col py-4 px-8 justify-between items-center">
            <span className="text-sm pb-12">{details}</span>
            <div className="flex border-2 border-blue-500">
              {techStack.map((stackItem, index) => {
                return (
                  <span key={index} className="text-base px-2">
                    {stackItem}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
