"use client"

import { useCallback } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
// import type { Engine } from ""

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  // const particlesLoaded = useCallback(async (container: any) => {
  //   console.log(container)
  // }, [])

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        background: {
          color: "#000000"
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push"
            },
            onHover: {
              enable: false,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 1
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          },
          grab: {
            distance: 300,
            links: {
              opacity: 0.5
            }
          }
        },
        particles: {
          color: {
            value: "#777",
            animation: {
              enable: true,
              speed: 20,
              sync: false
            }
          },
          links: {
            color: "#303030",
            distance: 200,
            enable: false
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 30
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 3
          }
        },
        detectRetina: true
      }}
    />
  )
}
