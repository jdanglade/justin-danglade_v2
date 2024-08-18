import React from "react";

export interface CardData {
  title: String;
  details: String;
  techStack: String[];
}

const CustomCard: React.FC<CardData> = ({ title, details, techStack }) => {
  return (
    <div className="flex-col relative m-6 border-2 border-red-500">
      <div className="flex-col border-2  border-green-500">
        <div className="flex py-4 px-6 items-baseline border-2 border-blue-500">
          <span className="text-base pr-4">{title}</span>
          <span className="text-sm">{details}</span>
        </div>
        <div className="flex py-4 px-6 justify-center items-baseline border-2 border-blue-500">
          {techStack.map((stackItem, index) => {
            return (
              <span key={index} className="text-base pr-2">
                {stackItem}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
