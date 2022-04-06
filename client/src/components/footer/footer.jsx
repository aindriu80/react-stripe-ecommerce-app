import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>&copy; {year} NOMAD - Aindriú Mac Giolla Eoin </div>
  );
};
export default Footer;
