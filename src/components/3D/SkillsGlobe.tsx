import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface SkillProps {
  skill: {
    name: string;
    icon: string;
    level: number;
  };
  index: number;
  total: number;
}

export const SkillIcon: React.FC<SkillProps> = ({ skill, index, total }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(skill.icon);
  
  const angle = (index / total) * Math.PI * 2;
  const radius = 3;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime + index;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
  });

  return (
    <group position={[x, 0, z]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
};