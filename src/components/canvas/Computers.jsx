import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  console.log(computer)
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='black' />

      <spotLight
        position={[20, 90, 10]}
        angle={0.12}
        penumbra={1}
        intensity={7}
      />

      <pointLight intensity={1} />



      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.95, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setisMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setisMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  if (!initialized) {
    return <div></div>
  }
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="hidden md:block"
    >


      <Suspense fallback={<CanvasLoader />} >

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />

        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas