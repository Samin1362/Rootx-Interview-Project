import React from "react";
import Project from "../../components/Project/Project";

const Projects = ({ allData }) => {
  const { projects = [] } = allData || {};
  console.log(projects);
  return (
    <div>
      <div className="max-w-[1240px] mt-[30px] mx-auto">
        {/* skills heading  */}
        <div>
          <h1 className="text-[40px] text-center font-bold text-white bg-[#FF914E] p-2 rounded-lg">
            My Projects
          </h1>
        </div>
        {/* skills content */}
        <div className="grid mt-3 grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
