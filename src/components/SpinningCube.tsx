import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Box, Center } from '@react-three/drei';
import { useGLTF, OrbitControls} from '@react-three/drei'
// import {Model as Earth} from "./Earth"
import { Model as Earth } from './Earth';
import * as THREE from 'three';

function SPINNINGCUBEWRAPPER() {

    function Turntable({ children }) {
        const ref = useRef();
        useFrame(() => {
          // This hook now works correctly!
          if (ref.current) {
            ref.current.rotation.y += 0.001;
            // ref.current.rotation.x += 0.001;
          }
        });
        return <group ref={ref}>{children}</group>;
      }

    // function DynamicLight() {
    //     const lightRef = useRef();
      
    //     // Make the light's position match the camera's position
    //     // -> better shadows from a constant light source
    //     useFrame((state) => {
    //       if (lightRef.current) {
    //         const offset = new THREE.Vector3(10, 0, 10);
    //         lightRef.current.position.copy(state.camera.position).add(offset);
    //       }
    //     });
      
    //     return (
    //       <directionalLight
    //         ref={lightRef}
    //         castShadow
    //         intensity={1.5}
    //         shadow-mapSize-width={2048}
    //         shadow-mapSize-height={2048}
    //       />
    //     );
    // }

    return (
        <div className="h-96 inline bg-transparent">
            <Canvas className="" shadows>
                <Suspense fallback={null}>
                    

                    <ambientLight intensity={0.3} />
                    <directionalLight intensity={1.5} position={[5, 5, 5]} castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />

                    {/* <DynamicLight /> */}
                    
                    <Bounds fit clip observe margin={1}>
                            <Turntable>
                        <Center>
                                <Earth/>
                        </Center>
                            </Turntable>
                    </Bounds>

                    <OrbitControls makeDefault enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default SPINNINGCUBEWRAPPER;