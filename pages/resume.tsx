import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const Resume = () => {
  return (
    <div className='px-6 py-2'>
      {/* education & exp */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Computer Science Engineering
            </h5>
            <p className='font-semibold'>City University(2019-2022)</p>
            <p className='my-3'>
              I am currently pursuing BSC in Computer Science Engineering form
              City University
            </p>
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Software Engineer Jr.</h5>
            <p className='font-semibold'>Self Learning(2020-)</p>
            <p className='my-3'>I am doing this self Learning...</p>
          </div>
        </div>
      </div>
      {/* languages & tool */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Frameworks</h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Software</h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
