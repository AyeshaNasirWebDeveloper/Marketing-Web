'use client';

import { Stat } from '../../types';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';

const stats: Stat[] = [
  { number: '250+', label: 'Happy Clients' },
  { number: '98%', label: 'Client Retention' },
  { number: '5x', label: 'Average ROI' },
];

export const Stats = () => {
  return (
    <section className="py-16 px-6 bg-indigo-600 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};