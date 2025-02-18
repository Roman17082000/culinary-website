import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/UI/Button/Button.tsx";
import * as THREE from "three"; // Импортируем THREE
import "./FlavorLab.scss";

const SpiceParticles = () => {
  const particlesRef = useRef<THREE.Points>(null); // Указываем тип
  const mouse = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const t = clock.getElapsedTime();
      particlesRef.current.rotation.y = t * 0.2;
      particlesRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <Points
      ref={particlesRef}
      positions={particles}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      <PointMaterial
        size={0.6}
        transparent
        opacity={0.8}
        color={["#ff4500", "#8b4513", "#228b22"]}
        depthWrite={true}
      />
    </Points>
  );
};

const FlavorLab = () => {
  const navigate = useNavigate();
  return (
    <section className="flavor-lab">
      <Canvas className="canvas-bg">
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <SpiceParticles />
      </Canvas>
      <div className="content">
        <h2>Создай свой кулинарный шедевр!</h2>
        <p>
          Выбери ингредиенты и позволь магии кухни создать для тебя уникальный
          рецепт.
        </p>
        <Button
          variant="success"
          size="large"
          shape="pill"
          onClick={() => navigate("/create-recipe")}
        >
          Создать шедевр
        </Button>
      </div>
    </section>
  );
};

export default FlavorLab;
