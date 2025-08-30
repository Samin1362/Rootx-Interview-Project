import React from 'react';

const Project = ({project}) => {
  const {projectName, projectDescription} = project;
  return (
    <div className='border-2 border-gray-400 p-4 text-center rounded-lg text-white bg-[#FF914E] h-[250px] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>{projectName}</h1>
      <p>{projectDescription}</p>
    </div>
  );
};

export default Project;