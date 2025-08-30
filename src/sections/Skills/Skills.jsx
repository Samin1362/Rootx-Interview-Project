import React from "react";
import Skill from "../Skill/Skill";

const Skills = ({ allData }) => {
  const { skills = [] } = allData || {};

  return (
    <div className="max-w-[1240px] mx-auto p-3">
      {/* skills heading  */}
      <div>
        <h1 className="text-[40px] text-center font-bold text-white bg-[#FF914E] p-2 rounded-lg">
          My Skills
        </h1>
      </div>
      {/* skills content */}
      <div className="grid grid-cols-3 justify-center gap-2 mt-4">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
