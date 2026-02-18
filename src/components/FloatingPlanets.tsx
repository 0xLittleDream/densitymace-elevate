import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

/* ─── Glowing Planet with emissive aura ─── */
const GlowPlanet = ({
  position,
  size,
  color,
  emissive,
  speed,
  floatSpeed,
  floatIntensity,
  glowScale = 1.8,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  emissive: string;
  speed: number;
  floatSpeed: number;
  floatIntensity: number;
  glowScale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * speed * 0.3;
      meshRef.current.rotation.y = t * speed * 0.2;
    }
    if (glowRef.current) {
      // Pulsing glow
      const pulse = 1 + Math.sin(t * 1.5) * 0.08;
      glowRef.current.scale.setScalar(size * glowScale * pulse);
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.3} floatIntensity={floatIntensity}>
      <group position={position}>
        {/* Outer glow sphere */}
        <Sphere ref={glowRef} args={[1, 32, 32]}>
          <meshBasicMaterial
            color={emissive}
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </Sphere>
        {/* Mid glow layer */}
        <Sphere args={[size * 1.3, 32, 32]}>
          <meshBasicMaterial
            color={emissive}
            transparent
            opacity={0.04}
            side={THREE.BackSide}
          />
        </Sphere>
        {/* Core planet */}
        <Sphere ref={meshRef} args={[size, 64, 64]}>
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.6}
            transparent
            opacity={0.45}
          />
        </Sphere>
      </group>
    </Float>
  );
};

/* ─── Tiny twinkling stars ─── */
const StarField = () => {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    }
    return pos;
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.06 + 0.02;
    }
    return s;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#7cb8ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

/* ─── Scene ─── */
const FloatingPlanets = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#4a9eff" />
        <pointLight position={[-5, -3, 3]} intensity={0.6} color="#a855f7" />
        <pointLight position={[0, 3, 8]} intensity={0.4} color="#06b6d4" />

        {/* ── Blue planet — top right ── */}
        <GlowPlanet
          position={[6, 3.5, -8]}
          size={0.7}
          color="#1e40af"
          emissive="#3b82f6"
          speed={0.12}
          floatSpeed={1}
          floatIntensity={1.5}
          glowScale={2.5}
        />

        {/* ── Purple planet — left side ── */}
        <GlowPlanet
          position={[-7, -2, -9]}
          size={0.55}
          color="#581c87"
          emissive="#a855f7"
          speed={0.18}
          floatSpeed={1.3}
          floatIntensity={2}
          glowScale={2.5}
        />

        {/* ── Cyan planet — bottom right ── */}
        <GlowPlanet
          position={[5, -4, -6]}
          size={0.4}
          color="#0e7490"
          emissive="#06b6d4"
          speed={0.25}
          floatSpeed={1.8}
          floatIntensity={2}
          glowScale={3}
        />

        {/* ── Small pink orb — top left ── */}
        <GlowPlanet
          position={[-5, 4, -10]}
          size={0.3}
          color="#9d174d"
          emissive="#ec4899"
          speed={0.35}
          floatSpeed={2.2}
          floatIntensity={2.5}
          glowScale={3}
        />

        {/* ── Deep blue — center far ── */}
        <GlowPlanet
          position={[2, -1, -12]}
          size={0.35}
          color="#1e3a5f"
          emissive="#60a5fa"
          speed={0.1}
          floatSpeed={0.8}
          floatIntensity={1}
          glowScale={2.5}
        />

        {/* ── Tiny green accent ── */}
        <GlowPlanet
          position={[-3, 1.5, -7]}
          size={0.2}
          color="#065f46"
          emissive="#34d399"
          speed={0.4}
          floatSpeed={2.5}
          floatIntensity={3}
          glowScale={3.5}
        />

        {/* ── Extra purple far back ── */}
        <GlowPlanet
          position={[8, 0.5, -14]}
          size={0.5}
          color="#4c1d95"
          emissive="#8b5cf6"
          speed={0.08}
          floatSpeed={0.6}
          floatIntensity={0.8}
          glowScale={2.5}
        />

        <StarField />
      </Canvas>
    </div>
  );
};

export default FloatingPlanets;
