'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          color: {
            value: "#d4843e",
          },
          links: {
            color: "#d4843e",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "out"
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 },
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent; 