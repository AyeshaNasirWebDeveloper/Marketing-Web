'use client';

import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { 
  FiTwitter, 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin,
  FiYoutube,
  FiGithub
} from 'react-icons/fi';

const socialLinks = [
  {
    name: 'Twitter',
    icon: <FiTwitter className="w-5 h-5" />,
    url: 'https://twitter.com',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Facebook',
    icon: <FiFacebook className="w-5 h-5" />,
    url: 'https://facebook.com',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: <FiInstagram className="w-5 h-5" />,
    url: 'https://instagram.com',
    color: 'hover:text-pink-600'
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="w-5 h-5" />,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-700'
  },
  {
    name: 'YouTube',
    icon: <FiYoutube className="w-5 h-5" />,
    url: 'https://youtube.com',
    color: 'hover:text-red-600'
  },
  {
    name: 'GitHub',
    icon: <FiGithub className="w-5 h-5" />,
    url: 'https://github.com',
    color: 'hover:text-gray-700'
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold mb-4 text-white">
              <span className="text-teal-400">Ayesha&apos;s Tech</span>
            </div>
            <p className="mb-6">Elevating brands through innovative marketing solutions.</p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Other footer columns remain the same */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Brand Strategy', 'Digital Marketing', 'Web Design', 'Content Creation'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-300 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-300 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p>123 Marketing Ave</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">info@ayeshatech.agency</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Ayesha&apos;s Tech Marketing Agency. All rights reserved.</p>
        </motion.div>
      </Container>
    </footer>
  );
};