
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import DataCube from './DataCube';
import AIBrain from './AIBrain';
import FloatingLaptop from './FloatingLaptop';

interface Scene3DProps {
  type?: 'cube' | 'brain' | 'laptop';
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ type = 'cube', className = "" }) => {
  const renderModel = () => {
    switch (type) {
      case 'brain':
        return <AIBrain />;
      case 'laptop':
        return <FloatingLaptop />;
      default:
        return <DataCube />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B829FF" />
        <Suspense fallback={null}>
          {renderModel()}
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
