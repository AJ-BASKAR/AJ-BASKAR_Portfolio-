
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const FloatingLaptop: React.FC = () => {
  const groupRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Laptop base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      {/* Laptop screen */}
      <mesh position={[0, 0.2, -0.7]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Screen glow */}
      <mesh position={[0, 0.2, -0.68]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.8, 1]} />
        <meshStandardMaterial 
          color="#00FF88" 
          transparent={true}
          opacity={0.6}
          emissive="#00FF88"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

export default FloatingLaptop;
