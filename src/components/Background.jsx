import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function Background() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Carga la versión slim compatible
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#fff8ef" }
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          color: { value: "#b8875b" },
          links: {
            enable: true,
            color: "#4b2e2e",
            distance: 100
          },
          move: {
            enable: true,
            speed: 0.6
          },
          number: {
            value: 60
          },
          size: {
            value: 2
          }
        }
      }}
    />
  );
}