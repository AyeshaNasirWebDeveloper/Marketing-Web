'use client';

import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';

export const About = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: <FiAward className="w-8 h-8" /> },
    { value: '50+', label: 'Team Members', icon: <FiUsers className="w-8 h-8" /> },
    { value: 'Global', label: 'Presence', icon: <FiGlobe className="w-8 h-8" /> },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that set you apart.',
      color: 'text-indigo-600',
    },
    {
      title: 'Integrity',
      description: 'Honest communication and ethical practices form the foundation of all we do.',
      color: 'text-teal-500',
    },
    {
      title: 'Impact',
      description: 'We measure success by the tangible results we create for your business.',
      color: 'text-rose-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <Container>
        <SectionTitle
          title="About Our Agency"
          subtitle="Discover the story behind our success and what drives us forward"
          highlightedText="Our Agency"
          highlightColor="text-indigo-600"
        />

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2012, Ayesha&apos;s Tech began as a small team of passionate marketers with a vision to transform how brands connect with their audiences. What started as a boutique agency has grown into an award-winning firm serving clients across multiple industries.
            </p>
            <p className="text-gray-600 mb-4">
              We&apos;ve stayed true to our core belief: marketing should be both creative and data-driven. This unique combination has helped our clients achieve remarkable growth and establish lasting brand equity.
            </p>
            <p className="text-gray-600">
              Today, we&apos;re proud to be recognized as one of the fastest-growing marketing agencies in the region, but our focus remains on delivering exceptional results for every client, no matter their size.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Facts</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-lg p-4 text-center"
                  >
                    <div className={`text-indigo-600 mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-1 text-gray-800">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Our Approach</h4>
                <p className="text-gray-600">
                  We combine strategic thinking with creative execution, leveraging data insights to craft campaigns that resonate with your target audience and drive measurable business outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6 text-gray-800"
          >
            Our Core Values
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            These principles guide every decision we make and every solution we deliver
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`text-4xl font-bold mb-4 ${value.color}`}>{value.title}</div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to work with us?</h3>
              <p className="text-indigo-100">
                Discover how our unique approach can transform your marketing results.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};