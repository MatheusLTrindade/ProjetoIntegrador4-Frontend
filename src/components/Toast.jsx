// icons
import { FaExclamationTriangle,FaExclamationCircle, FaInfoCircle, FaCheckCircle, FaWindowClose } from 'react-icons/fa';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function Toast({ type, message, onClose }) {
  let icon, bg_toast

  switch (type) {
    case 'alert':
      icon = <FaExclamationTriangle className='text-yellow-500'/>
      bg_toast = 'bg-yellow-800/60'
    case 'error':
      icon = <FaExclamationCircle className='text-white'/>
      bg_toast = 'bg-red-500'
      break;
    case 'info':
      icon = <FaInfoCircle className='text-blue-500'/>
      bg_toast = 'bg-blue-800'
      break;
    case 'success':
      icon = <FaCheckCircle className='text-green-500'/>
      bg_toast = 'bg-green-800'
      break;
  }

  function handleClose() {if (onClose) { onClose() }}

  return (
    <motion.div 
      variants={ fadeIn('left', 0.4) }
      initial='hidden'
      animate='show'
      exit='hidden'
      className={`p-4 ${bg_toast} text-white rounded-md shadow-md flex items-center absolute bottom-2 right-2 z-20 min-w-2/4`}>
      <div className='mr-4'>{icon}</div>
      <div>
        <p className='font-bold'>{type.toUpperCase()}</p>
        <p>{message}</p>
      </div>
      <div className='absolute top-2 right-2 text-white/50 hover:text-red-500 cursor-pointer' onClick={handleClose}><FaWindowClose/></div>
    </motion.div>
  )
}