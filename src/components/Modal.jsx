/* eslint-disable */
import { motion, AnimatePresence } from 'motion/react';

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariant}
          initial='hidden'
          animate='visible'
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
