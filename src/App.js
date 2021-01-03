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
      <Logo width={200} />
      <Canvas concurrent pixelRatio={[1, 2]} camera={{ position: [5, 5, 20], zoom: 0.75 }}>
        <ambientLight intensity={0.25} />
        <spotLight intensity={0.6} angle={0.9} penumbra={0.5} position={[40, 10, 10]} />
        {dots.map((dot) => (
          <Dot key={dot.color} position={dot.position} color={dot.color} />
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
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -50, 0]} opacity={2} width={100} height={100} blur={3} far={60} />
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
