import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { HeroBackground } from './3D/HeroBackground'; // Import the HeroBackground

export const Contact = () => {
  return (
    <section className="relative py-20 bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

      {/* Foreground Content */}
      <div className="relative container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
