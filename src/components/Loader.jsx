/* eslint-disable */
import { motion } from 'motion/react';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { repeat: Infinity, repeatType: 'reverse', duration: 0.5 },
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

function Loader() {
  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate='animationOne'
      />
    </>
  );
}

export default Loader;
