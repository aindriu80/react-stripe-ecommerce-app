import React from 'react';
import { useNavigate } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

function MainSection() {
  const history = useNavigate();
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag' />
        </div>
        <div className='ms-m-description'>
          <h2>Designd for fashion Crafted for sport</h2>
          <p>
            We make products that effortless transition from day to night. From
            the board toom to the fitness studio, and everywhere in between,
            each Nomads piece is thoughfully created to be the perfect balance
            of form and fashion
          </p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history('/product/1')}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;