'use client';

import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Container } from '../common/Container';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Elevate Your <span className="text-teal-400">Brand</span> With Our Expertise
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We craft digital experiences that engage audiences and drive growth for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button variant="primary" icon="arrow">
                Get Started
              </Button>
              <Button variant="outline" icon="chevron">
                Learn More
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-rose-400 opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-teal-400 opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-teal-400 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/marketing-dashboard.png" 
                  alt="Marketing Dashboard" 
                  className="w-full h-auto object-cover mix-blend-overlay opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};