import React, { Suspense } from "react";
import styled from '@emotion/styled';
import { OrbitControls, softShadows } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Md3DRotation } from "react-icons/md";

import Model from "./Model";
import Dot from "./Dot";

import List from "./List";
import Logo from "./Logo";
import { actionTypes, useStoreDispatch, useStoreState } from "./store";

softShadows();

export default function App() {
  const { dots } = useStoreState();
  const dispatch = useStoreDispatch();

  return (
    <React.Fragment>
      <Logo width={120} />
      <Canvas camera={[0, 0, 0]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />
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
