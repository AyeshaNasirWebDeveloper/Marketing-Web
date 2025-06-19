'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../common/Button';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900 text-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="w-full px-4 py-4 mx-auto sm:px-6" style={{ maxWidth: '100%' }}>
        <div className="flex justify-between items-center w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold min-w-fit"
          >
            <Link 
              href="/" 
              className="text-teal-400 hover:text-teal-300 transition duration-300"
              style={{ display: 'inline-block' }}
            >
              Ayesha&apos;s Tech
            </Link>
          </motion.div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-teal-300 transition duration-300 text-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="ml-2">
              <Button variant="secondary" className="text-nowrap">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button - visible only on mobile */}
          <div className="md:hidden flex items-center justify-end">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 w-full"
            style={{ overflow: 'hidden' }}
          >
            <div className="flex flex-col space-y-3 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-teal-300 transition duration-300 py-2 text-nowrap"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-2"
              >
                <Button variant="secondary" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};