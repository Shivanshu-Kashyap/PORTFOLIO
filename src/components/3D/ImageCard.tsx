import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ImageCardProps {
  imageUrl: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imageUrl);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      (state.mouse.x * Math.PI) / 10,
      0.1
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      (state.mouse.y * Math.PI) / 10,
      0.1
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 4]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.5}
        roughness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};