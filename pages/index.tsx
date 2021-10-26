import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import { fadeInUP, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const Index = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'>
      <Head>
        <title>Web Developer | About | Emon</title>
      </Head>
      <h6 className='my-3 font-medium'>
        I am currently pursuing B.sc Engineering(Final Year) in Computer Science
        Engineering from City University. I have 1+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginRight: '-1.5rem', marginLeft: '-1.5rem' }}>
        <h4 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h4>

        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'>
          {services.map((service) => (
            <motion.div
              variants={fadeInUP}
              key={service.title}
              className='col-span-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
