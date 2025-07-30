import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Box, Center } from '@react-three/drei';
import { useGLTF, OrbitControls} from '@react-three/drei'
// import {Model as Earth} from "./Earth"
import { Model as Earth } from './Earth';

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

    return (
        <div className="h-96 inline bg-transparent">
            <Canvas className="">
                <Suspense fallback={null}>
                    

                    <ambientLight intensity={0.3} />
                    <directionalLight intensity={1.5} position={[5, 5, 5]} />
                    
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