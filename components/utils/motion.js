export const navVariants = {
  hidden: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 300,
     
  
      
    },
  },
  show: {
    opacity: 1, 
    scale: 1.1,
    transition: {
      repeat: Infinity, repeatType: 'mirror', ease: 'linear',
      duration: 4.0,
      // stiffness: 80,
      // type: 'spring'
      // delay: 1,
    },
  },
};

export const navVariant = {
  hidden: {
    opacity: 0,
    y:150,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:4,
      type: 'spring',
      stiffness: 80,
      delay: 2.5,
    },
  },
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:2,
      type: 'spring',
      stiffness: 80,
      delay: .4,
    },
  },
};


export const buttonVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:1.9,
      type: 'spring',
      stiffness: 80,
      delay: 2,
    },
  },
};

export const descVariant = {
  hidden: {
    opacity: 0,
    y: -150,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration:2,
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};