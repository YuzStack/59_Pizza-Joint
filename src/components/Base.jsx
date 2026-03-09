import { Link, useOutletContext } from 'react-router';
/* eslint-disable */
import { motion } from 'motion/react';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.3,
    },
  },
};

const nextBtnVariant = {
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
};

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

function Base() {
  const { pizza, addBase } = useOutletContext();
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className='base container'
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              initial={{ color: '#fff' }}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className='next' variants={nextBtnVariant}>
          <Link to='/toppings'>
            <motion.button variants={buttonVariant} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Base;
