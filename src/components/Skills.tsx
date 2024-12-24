
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SkillIcon } from './3D/SkillsGlobe';

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-black/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                    <div className="flex-1">
                      <p className="text-white font-medium">{skill.name}</p>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-blue-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 h-[400px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {Object.values(skillsData).flat().map((skill, index, array) => (
              <SkillIcon
                key={skill.name}
                skill={skill}
                index={index}
                total={array.length}
              />
            ))}
            <OrbitControls
              autoRotate
              autoRotateSpeed={1}
              enableZoom={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;