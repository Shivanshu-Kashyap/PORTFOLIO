import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    tech: string[];
  };
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(project.image);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + index * 0.5;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
  });

  return (
    <group position={[index * 4 - 6, 0, 0]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.5} />
      </mesh>
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>
    </group>
  );
};