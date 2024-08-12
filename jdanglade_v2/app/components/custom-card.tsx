import React from "react";

export interface CardData {
  title: String;
  details: String;
  techStack: String[];
}

const CustomCard: React.FC<CardData> = ({ title, details, techStack }) => {
  return (
    <div className="expCard flex relative my-8 mx-4 rounded-l">
      {/*  */}
      <div className="expCardContent flex justify-center items-center relative p-2">
        <span className="text-base">{title}</span>
      </div>
      <div className=" flex">
        {/* border-2 border-green-500 */}
        <div className="expCardContent flex py-4 justify-center items-center">
          {/* border-2 border-blue-500 */}
          <span className="text-sm">{details}</span>
        </div>
        <div className="expCardContent flex py-4 px-6 justify-center items-center ">
          {/* border-2 border-blue-500 */}
          {techStack.map((stackItem, index) => {
            return (
              <span key={index} className=" text-base pr-2">
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
