'use client';

import { Service } from '../../types';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

const services: Service[] = [
  {
    title: 'Brand Strategy',
    description: 'Crafting compelling brand narratives that resonate with your audience.',
    icon: '✨',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver measurable results across all channels.',
    icon: '📈',
  },
  {
    title: 'Web Design',
    description: 'Beautiful, functional websites that convert visitors into customers.',
    icon: '🖥️',
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that tells your story and builds meaningful connections.',
    icon: '✍️',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive marketing solutions tailored to your unique business needs."
          highlightedText="Services"
          highlightColor="text-indigo-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-3xl mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};