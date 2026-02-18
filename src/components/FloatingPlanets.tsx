import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

/* ─── Subtle glowing planet ─── */
const GlowPlanet = ({
  position,
  size,
  color,
  emissive,
  speed,
  floatSpeed,
  floatIntensity,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  emissive: string;
  speed: number;
  floatSpeed: number;
  floatIntensity: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * speed * 0.3;
      meshRef.current.rotation.y = t * speed * 0.2;
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.2} floatIntensity={floatIntensity}>
      <group position={position}>
        {/* Soft glow halo */}
        <Sphere args={[size * 2, 16, 16]}>
          <meshBasicMaterial
            color={emissive}
            transparent
            opacity={0.04}
            side={THREE.BackSide}
          />
        </Sphere>
        {/* Core */}
        <Sphere ref={meshRef} args={[size, 48, 48]}>
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.5}
            roughness={0.4}
            metalness={0.5}
            transparent
            opacity={0.35}
          />
        </Sphere>
      </group>
    </Float>
  );
};

/* ─── Tiny stars ─── */
const StarField = () => {
  const count = 50;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 5;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#4a9eff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ─── Scene — only blue/indigo tones ─── */
const FloatingPlanets = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#4a9eff" />

        {/* Blue — top right */}
        <GlowPlanet position={[6, 3.5, -10]} size={0.6} color="#1e3a8a" emissive="#3b82f6" speed={0.1} floatSpeed={0.8} floatIntensity={1} />

        {/* Indigo — left */}
        <GlowPlanet position={[-7, -2, -12]} size={0.45} color="#312e81" emissive="#6366f1" speed={0.15} floatSpeed={1} floatIntensity={1.5} />

        {/* Small blue — bottom right */}
        <GlowPlanet position={[5, -4, -8]} size={0.3} color="#1e40af" emissive="#60a5fa" speed={0.2} floatSpeed={1.5} floatIntensity={1.8} />

        {/* Tiny accent — far back */}
        <GlowPlanet position={[-4, 3, -14]} size={0.25} color="#1e3a5f" emissive="#93c5fd" speed={0.08} floatSpeed={0.6} floatIntensity={0.8} />

        <StarField />
      </Canvas>
    </div>
  );
};

export default FloatingPlanets;
