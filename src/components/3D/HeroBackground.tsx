import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from './Stars';

export const HeroBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  );
};