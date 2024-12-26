import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { HeroBackground } from './3D/HeroBackground';
import { useState } from 'react';
import Logo from '../assets/PortfolioLogo.png'; // Importing the logo
import Shivanshu from '../assets/Shivanshu_Kashyap_CV.pdf'

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo Image */}
          <div className="text-white text-2xl font-bold">
            <img src={Logo} alt="Portfolio Logo" className="h-12" /> {/* Use your logo image */}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="text-white md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </div>

          {/* Links */}
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-full left-0 w-full bg-black/90 md:bg-transparent md:static md:flex md:justify-center md:space-x-8 md:items-center text-white text-lg`}
          >
            <li>
              <a
                href="#about"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />

        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-4">Shivanshu Kashyap</h1>
            <h2 className="text-2xl mb-8">B.Tech in IT | Web Developer</h2>

            <a
              href={Shivanshu}
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
