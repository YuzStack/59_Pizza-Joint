import { Link, useOutletContext } from 'react-router';
/* eslint-disable */
import { motion } from 'motion/react';

function Toppings() {
  const { pizza, addTopping } = useOutletContext();

  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

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

  return (
    <motion.div
      className='toppings container'
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              initial={{ color: '#fff' }}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255, 255, 255)',
            boxShadow: '0px 0px 8px rgb(255, 255, 255)',
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Toppings;
