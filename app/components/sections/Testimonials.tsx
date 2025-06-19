'use client';

import { Testimonial } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This agency transformed our digital presence. Our engagement rates tripled within just two months of working with them.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, Global Corp',
    content: 'Their creative approach to our campaign resulted in a 150% ROI. Absolutely outstanding work!',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Founder, Bloom Cosmetics',
    content: 'From branding to social media strategy, they delivered beyond our expectations. Truly partners in our growth.',
  },
];

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say."
          highlightedText="Clients"
          highlightColor="text-indigo-600"
        />

        <div className="max-w-4xl mx-auto relative h-64">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              activeTestimonial === index && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gray-50 rounded-xl p-8 shadow-md"
                >
                  <div className="flex flex-col h-full justify-center">
                    <div className="text-2xl mb-6 text-gray-700 italic"> &#39;&#39;{testimonial.content}&#39;&#39;</div>
                    <div className="mt-auto">
                      <div className="font-bold text-lg text-gray-800">{testimonial.name}</div>
                      <div className="bg-indigo-600 text-white px-2 py-1 rounded inline-block text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};