import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  return (
    <Link to="/contacts">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 lg:w-20 lg:h-20 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl group"
        data-cursor-text="Chat"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="lg:w-7 lg:h-7"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </motion.div>
        
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-foreground"
          animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </Link>
  );
};

export default FloatingContact;
