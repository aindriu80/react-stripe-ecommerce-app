import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../shared/layout';
import { CartContext } from '../../../context/cart-context';

const Canceled = ({ history }) => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(clearCart, []);

  return (
    <Layout>
      <div className='checkout'>
        <h1>Payment Failed</h1>
        <p>Payment was not successful.</p>
        <div>
          <button
            className='button is-black nomad-btn submit'
            onClick={() => navigate(`/shop`)}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Canceled;
