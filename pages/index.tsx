import { GetServerSidePropsContext } from 'next';
import React from 'react';

const Index = ({ services }) => {
  return (
    <div>
      <p>Bye Bye World</p>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
