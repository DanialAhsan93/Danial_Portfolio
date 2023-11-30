import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';


const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1}
      floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {

  // const [initialized, setInitialized] = useState(false);
  // const [textureLoaded, setTextureLoaded] = useState(false);

  // useEffect(() => {
  //   console.log('Loading texture...');
  //   const texture = new THREE.TextureLoader().load(icon, () => {
  //     console.log('Texture loaded.');
  //     setTimeout(() => {
  //       setTextureLoaded(true);

  //     }, 10000);
  //   });

  //   return () => {
  //     console.log('Cleaning up texture resources...');
  //     // Clean up texture resources if needed
  //     texture.dispose();
  //   };
  // }, [icon]);

  // useEffect(() => {
  //   console.log('Checking initialization...');
  //   if (textureLoaded && !initialized) {
  //     console.log('Initializing...');
  //     setTimeout(() => {

  //       setInitialized(true);
  //     }, 10000);
  //   }
  // }, [textureLoaded, initialized]);

  // if (!initialized) {
  //   console.log('Not initialized. Rendering placeholder.');
  //   return <div></div>;
  // }

  // console.log('Rendering BallCanvas...');


  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls enableZoom={false} />


        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default BallCanvas