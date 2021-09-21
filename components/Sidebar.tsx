import Image from 'next/image';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import ProfilePic from '../public/emon.jpg';

const Sidebar = () => {
  return (
    <div>
      <Image
        className='mx-auto rounded-full h-30 w-30 '
        src={ProfilePic}
        alt='user avatar'
        height='300w'
        width='300w'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Emon</span> Hossain
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
      <a
        href=''
        download='name'
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'>
        {' '}
        <GiTie className='w-6 h-6' /> Download Resume
      </a>
      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href=''>
          <AiFillFacebook className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Dhaka,BanglaDesh</span>
        </div>
        <p className='my-2 justify-self-auto'>emonhossain995@gmail.com</p>
        <p className='my-2'>01824568854 | 01632272838</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto: emonhossain995@gmail.com')}>
        Email Me
      </button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'>
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
