import React from 'react';
import Layout from './shared/layout';
import Image404 from '../assets/404.avif';

const Notfound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <Layout>
      <div className='container'>
        <p style={style}>404 - Unfortunately we can't find that page</p>
        <img src={Image404} alt='404 Image' />
        <br />
      </div>
    </Layout>
  );
};

export default Notfound;
