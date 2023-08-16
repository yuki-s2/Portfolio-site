import React from 'react'
import { Image, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  return (
<group>
  <Image url="./IMG_63C0F4B54CBD-1.jpeg" scale={[4, height, 1]} position={[-1, 0, 1]} />
  <Image url="./IMG2.png" scale={[3]} position={[2, 0, 1]} />
  <Image url="./IMG3.png" scale={[1, 3.5, 1]} position={[-2.3, -height, 2]} />
  <Image url="./IMG_63C0F4B54CBD-1.jpeg" scale={[1.4, 2, 1]} position={[1.3, -height, -0.3, 3.2]} />
</group>
  );
}


function Profile() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3} horizontal={false} infinite={false}>
      <Scroll>
      <Images />
      </Scroll>
      <Scroll html>
        <h1 style={{ position: "absolute", top: "40vh", left: "40vw" }}>
          PROFILE
          </h1>
      </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Profile;