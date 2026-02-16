import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Boxer() {
  const mesh = useRef();
  
  useFrame((state) => {
    // อนิเมชั่นโยกตัวแบบนักมวย (Peek-a-boo style)
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.05;
  });

  return (
    <group ref={mesh}>
      {/* หัว */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshToonMaterial color="#fcd34d" />
      </mesh>
      {/* ลำตัว */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.6, 1, 0.4]} />
        <meshToonMaterial color="#fcd34d" />
      </mesh>
      {/* นวม (สีแดง Ippo) */}
      <mesh position={[-0.45, 1, 0.3]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshToonMaterial color="#ef4444" />
      </mesh>
      <mesh position={[0.45, 1, 0.3]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshToonMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}
