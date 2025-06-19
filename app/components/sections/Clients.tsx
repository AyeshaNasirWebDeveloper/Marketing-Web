'use client';

import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import Image from 'next/image';

const clients = [
  {
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    width: 160,
    height: 35
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    width: 120,
    height: 40
  },
];

export const Clients = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <Container>
        <SectionTitle
          title="Trusted by the world's most innovative companies"
          subtitle="We're proud to partner with industry leaders who trust our marketing expertise"
          highlightedText="innovative companies"
          highlightColor="text-indigo-600"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated background elements */}
          <motion.div
            initial={{ x: -100, y: -100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 opacity-20 blur-xl -z-10"
          />
          <motion.div
            initial={{ x: 100, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-100 opacity-20 blur-xl -z-10"
          />

          {/* Clients grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="flex justify-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Animated testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl p-8 text-white"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl font-medium mb-6"
              >
                &#39;Working with Ayesha&apos;s Tech transformed our marketing approach. Their data-driven strategies helped us achieve 3x growth in customer acquisition while reducing costs.&#39;
              </motion.blockquote>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">👔</span>
                </div>
                <div className="text-left">
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-indigo-200">CMO, TechCorp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};