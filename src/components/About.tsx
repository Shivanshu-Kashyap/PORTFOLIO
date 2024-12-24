import Shivanshu from "../assets/ShivanshuKashyap.jpg";
import { motion } from 'framer-motion';
import { MapPin, Mail, School } from 'lucide-react';
import { Scene } from './3D/Scene';

export const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 text-white">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-gray-300">
              I'm a passionate IT professional with a strong foundation in software development
              and a keen interest in innovative technologies. My journey in tech has equipped me
              with diverse skills and a problem-solving mindset.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Location: Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Email: shivanshukashyap996@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <School className="w-5 h-5 text-blue-400" />
                <span>B.Tech in Information Technology | RGIPT</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px]">
            <Scene imageUrl={Shivanshu} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;