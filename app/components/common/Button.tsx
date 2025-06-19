'use client';

import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: 'arrow' | 'chevron';
  onClick?: () => void;
  href?: string;
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon,
  onClick,
  href,
}: ButtonProps) => {
  const baseClasses = 'px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary: 'bg-teal-400 hover:bg-teal-300 text-gray-900',
    outline: 'border border-white hover:bg-white hover:text-gray-900 text-white',
  };

  const iconComponent = {
    arrow: <FiArrowRight className="ml-2" />,
    chevron: <FiChevronDown className="ml-2" />,
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && iconComponent[icon]}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};