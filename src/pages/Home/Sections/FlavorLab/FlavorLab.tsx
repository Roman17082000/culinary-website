import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "./FlavorLab.scss";
import Button from "../../../../components/UI/Button/Button.tsx";
import { Vector3 } from "three";

import Apple from "../../../../assets/images/pngwing.com.png";
import Strawberry from "../../../../assets/images/pngwing.com (1).png";
import Cucumber from "../../../../assets/images/pngwing.com (2).png";
import Tsukini from "../../../../assets/images/pngwing.com (3).png";
import Cheeseburger from "../../../../assets/images/pngwing.com (4).png";
import Pizza from "../../../../assets/images/pngwing.com (5).png";
import Pepper from "../../../../assets/images/pngwing.com (6).png";
import Bread from "../../../../assets/images/pngwing.com (7).png";
import StyleFromSalmon from "../../../../assets/images/pngwing.com (8).png";
import BeefSteak from "../../../../assets/images/pngwing.com (9).png";
import FrenchFries from "../../../../assets/images/pngwing.com (10).png";

const foodImages = [
  Apple,
  FrenchFries,
  Tsukini,
  Cheeseburger,
  StyleFromSalmon,
  Strawberry,
  Bread,
  Cucumber,
  Pizza,
  Pepper,
  BeefSteak,
];

const FoodSprite: React.FC<{ position: [number, number, number] }> = ({
  position,
}) => {
  const spriteRef = useRef<THREE.Sprite>(null);
  const velocity = useMemo(
    () => [
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05,
      (Math.random() - 0.5) * 0.05,
    ],
    [],
  );

  useFrame(() => {
    if (spriteRef.current) {
      spriteRef.current.position.x += velocity[0];
      spriteRef.current.position.y += velocity[1];
      spriteRef.current.position.z += velocity[2];

      const bounds = 10;
      const position = spriteRef.current.position as Vector3;

      if (position.x > bounds || position.x < -bounds) {
        velocity[0] *= -1;
      }
      if (position.y > bounds || position.y < -bounds) {
        velocity[1] *= -1;
      }
      if (position.z > bounds || position.z < -bounds) {
        velocity[2] *= -1;
      }
    }
  });

  return (
    <sprite ref={spriteRef} position={position}>
      <spriteMaterial
        attach="material"
        map={new THREE.TextureLoader().load(
          foodImages[Math.floor(Math.random() * foodImages.length)],
        )}
        transparent={true}
      />
    </sprite>
  );
};

const FoodParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      new Array(50)
        .fill(null)
        .map(() => [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ]),
    [],
  );

  return (
    <>
      {particles.map((position, i) => (
        <FoodSprite key={i} position={position as [number, number, number]} />
      ))}
    </>
  );
};

const FlavorLab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flavor-lab">
      <Canvas className="canvas-bg">
        <ambientLight intensity={0.5} />
        <FoodParticles />
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
