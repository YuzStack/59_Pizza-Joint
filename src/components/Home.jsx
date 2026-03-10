import { Link } from 'react-router';
/* eslint-disable */
import { motion } from 'motion/react';
import Loader from './Loader';

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.4,
    },
  },
};

function Home() {
  return (
    <motion.div
      className='home container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button variants={buttonVariant} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
}

export default Home;
