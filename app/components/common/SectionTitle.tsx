'use client';

import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  highlightedText?: string;
  highlightColor?: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  highlightedText,
  highlightColor = 'text-indigo-600',
  className = '',
}: SectionTitleProps) => {
  const renderTitle = () => {
    if (!highlightedText) return title;
    
    const parts = title.split(highlightedText);
    return (
      <>
        {parts[0]}
        <span className={highlightColor}>{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        {renderTitle()}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};