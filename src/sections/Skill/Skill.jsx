import React from 'react';

const Skill = ({skill}) => {
  return (
    <div className='border-2 border-black p-3 bg-[#FF914E] rounded-lg items-center'>
      <h1 className='font-2xl font-bold'>{skill}</h1>
    </div>
  );
};

export default Skill;