import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({
  position,
  size,
  color,
  speed,
  distort,
  floatSpeed,
  floatIntensity,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
  distort: number;
  floatSpeed: number;
  floatIntensity: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.2} floatIntensity={floatIntensity}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.3}
          metalness={0.8}
          distort={distort}
          speed={1.5}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const SmallOrbs = () => {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#4a9eff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const FloatingPlanets = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4a9eff" />
        <directionalLight position={[-5, -3, 3]} intensity={0.3} color="#7c3aed" />
        <pointLight position={[0, 0, 5]} intensity={0.4} color="#4a9eff" />

        {/* Large main planet - top right */}
        <Planet
          position={[4.5, 2.5, -2]}
          size={1.2}
          color="#1a3a6e"
          speed={0.15}
          distort={0.3}
          floatSpeed={1.2}
          floatIntensity={1.5}
        />

        {/* Medium planet - left */}
        <Planet
          position={[-5, -1, -3]}
          size={0.9}
          color="#1e3a5f"
          speed={0.2}
          distort={0.25}
          floatSpeed={1.5}
          floatIntensity={2}
        />

        {/* Small planet - bottom right */}
        <Planet
          position={[3, -3, -1]}
          size={0.5}
          color="#2d4a7a"
          speed={0.3}
          distort={0.4}
          floatSpeed={2}
          floatIntensity={1.8}
        />

        {/* Tiny accent - top left */}
        <Planet
          position={[-3.5, 3, -4]}
          size={0.35}
          color="#4a6fa5"
          speed={0.4}
          distort={0.5}
          floatSpeed={2.5}
          floatIntensity={2.5}
        />

        {/* Mid accent - center far */}
        <Planet
          position={[1, -0.5, -6]}
          size={0.7}
          color="#162d50"
          speed={0.1}
          distort={0.2}
          floatSpeed={0.8}
          floatIntensity={1}
        />

        <SmallOrbs />
      </Canvas>
    </div>
  );
};

export default FloatingPlanets;
