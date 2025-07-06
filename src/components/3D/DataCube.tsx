
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const DataCube: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#00D9FF" 
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

export default DataCube;
