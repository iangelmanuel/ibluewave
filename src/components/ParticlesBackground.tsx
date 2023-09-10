'use client'

import { useCallback } from 'react'
import ReactParticles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export default function ParticlesBackground () {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <ReactParticles
      id="particles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        background: {
          color: '#000000'
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: false,
              mode: 'grab'
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
            value: '#fff',
            animation: {
              enable: true,
              speed: 20,
              sync: false
            }
          },
          links: {
            color: '#303030',
            distance: 200,
            enable: false
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out'
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
            value: 0.50
          },
          shape: {
            type: 'circle'
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
