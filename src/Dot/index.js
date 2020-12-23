import React from 'react';
import { Sphere } from '@react-three/drei'

function Dot({ color = "lightblue", ...props }) {
  return <Sphere args={[0, 30, 30]} {...props}>
    <meshStandardMaterial color={color} />
  </Sphere>
}

export default Dot;