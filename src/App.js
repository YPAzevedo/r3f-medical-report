import React, { Suspense } from "react";
import styled from '@emotion/styled';
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Md3DRotation } from "react-icons/md";

import Model from "./Model";
import Dot from "./Dot";

import List from "./List";
import Logo from "./Logo";
import { actionTypes, useStoreDispatch, useStoreState } from "./store";


export default function App() {
  const { dots } = useStoreState();
  const dispatch = useStoreDispatch();

  return (
    <React.Fragment>
      <Logo width={120} />
      <Canvas concurrent pixelRatio={[1, 2]} camera={{ position: [5, 5, 20], zoom: 0.75 }}>
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.4} angle={0.9} penumbra={1} position={[20, 20, 40]} />
        {dots.map((dot) => (
          <Dot position={dot.position} color={dot.color} />
        ))}
        <Suspense fallback={null}>
          <Model
            position={[0, 0, 0]}
            onClick={(event) => {
              event.stopPropagation();
              dispatch({
                type: actionTypes.addDot,
                x: event.point.x,
                y: event.point.y,
                z: event.point.z,
              });
            }}
          />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -50, 0]} opacity={0.7} width={50} height={50} blur={5} far={60} />
        </Suspense>
        <OrbitControls maxDistance={80} minDistance={40} />
      </Canvas>
      <List />
      <Styled3dIcon
        size={40}
        color="#D8E6F5"
      />
    </React.Fragment>
  );
}

// 💅🏻 styles
const Styled3dIcon = styled(Md3DRotation)`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
