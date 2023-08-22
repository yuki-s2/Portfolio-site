import React from 'react'
import { Image, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import AnimateOpacity from '../motion/AnimateOpacity';

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  return (
<group>
  <Image url="./IMG3.jpeg" scale={[4, height, 1]} position={[-1, 0, 1]} />
  <Image url="./IMG2.png" scale={[3]} position={[2, 0, 1]} />
  <Image url="./IMG1.png" scale={[1, 3.5, 1]} position={[-2.3, -height, 2]} />
  <Image url="./IMG3.jpeg" scale={[1.4, 2, 1]} position={[1.3, -height, -0.3, 3.2]} />
</group>
  );
}


function Profile() {
  return (
      <section className='profile'>
  <AnimateOpacity>
  <div className="portfolio-headline">
  <h2 className='profile-title' style={{ position: "absolute", top: "40vh", left: "40vw"}}>
  PROFILE
 </h2>
  </div>
 </AnimateOpacity>

    <Canvas>
      <ScrollControls pages={2} damping={3} horizontal={false} infinite={false}>
      <Scroll>
      <Images />
      </Scroll>
      </ScrollControls>
    </Canvas>
    </section>
  );
}

export default Profile;