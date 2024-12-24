import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projects';
import { HeroBackground } from '../3D/HeroBackground'; // Import the HeroBackground

export const ProjectsScene = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* 3D Background */}
      <HeroBackground />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};
