'use client';

import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Container } from '../common/Container';

export const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let&apos;s create something amazing together. Get in touch with our team today.
          </p>
          <Button 
            variant="primary" 
            className="px-8 py-4 text-lg font-medium"
            href="#contact"
          >
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};