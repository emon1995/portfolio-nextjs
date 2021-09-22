import React, { FunctionComponent } from 'react';
import { ISkill } from '../type';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { name, Icon, level } }) => {
  const bar_width = `${level}%`;
  return (
    <div className='my-4 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500'>
      <div
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500'
        style={{
          width: bar_width,
        }}>
        <Icon className='mr-3' /> {name}
      </div>
    </div>
  );
};

export default Bar;
