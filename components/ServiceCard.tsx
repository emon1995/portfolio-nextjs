import React, { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className='flex items-center p-2 m-4 space-x-2 gap-y-6'>
      <Icon className='w-12 h-12 text-green' />
      <div>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
