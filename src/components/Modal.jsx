/* eslint-disable */
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: '100%', opacity: 1, transition: { delay: 0.2 } },
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
          exit='hidden'
        >
          <motion.div className='modal' variants={modalVariant}>
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
