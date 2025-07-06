
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const AIBrain: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={1.2}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#B829FF" 
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      {/* Inner core */}
      <mesh scale={0.8}>
        <sphereGeometry args={[0.5, 16, 8]} />
        <meshStandardMaterial 
          color="#FF0080" 
          transparent={true}
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};

export default AIBrain;
