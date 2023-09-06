import React from "react";
// import AnimateOpacity from "../motion/AnimateOpacity";
import { Canvas, useThree } from "@react-three/fiber";
import { Image, Scroll, ScrollControls } from "@react-three/drei";
import HeaderProfile from "./HeaderProfile";
import Footer from "./Footer";
import AnimateOpacity from "../motion/AnimateOpacity";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <group>
      <Image url="./haikei1.jpeg" scale={[3, 3, 1]} position={[-1, 0, 2]} />
      <Image url="./haikei2.jpeg" scale={[2, 2, 2]} position={[1.5, -5, 2]} />
      <Image
        url="./haikei3.jpeg"
        scale={[2, 1.5, 1]}
        position={[-1.3, -8, 3]}
      />
    </group>
  );
}

function Profile() {
  return (
    <>
      <HeaderProfile />
      <AnimateOpacity>
      {/* <AnimatePresence> */}
      <section className="profile">
      <Canvas>
        <ScrollControls
          pages={2}
          damping={1}
          horizontal={false}
          infinite={false}
        >
          <Scroll html>
            <h2
              className="profile_title"
              style={{ position: "absolute", top: "40vh", left: "2.4em" }}
            >
              PROFILE
            </h2>
            <div className="profile_text">
              <p>
                私の自己紹介とWEB制作を始めるまでの経緯を簡単にお話しさせていただきます。
                <br></br>
                私は京都府舞鶴市で生まれ、母と祖母、兄と私の4人家族で育ちました。
                3歳の時に宮城県に引っ越し、高校までの子供時代のほとんどを東北で過ごしました。
                「何か」を創り出す仕事がしたいと思い、美容師としての道を選びました。そのために上京し、美容師としての修行に励む日々は、これまでの経験とは全く異なる刺激的なものでした。終電で帰宅する日々に疲れてしまい、3年目が始まる前にフリーターに転身しました。
              </p>
            </div>
            <div className="profile_text2">
              <p>
                その後、アパレルの店舗のオーナーから誘いを受け、アパレル店員として働き、店長も経験しました。既製品の販売業務を続けましたが、心の中では常に「何か」を創りたいという想いがあり、その答えとしてWEB制作の道を見つけました。
                学びたいことや創りたいものが数多くあり、毎日が充実しています。これからも新しい技術を習得し、人々の生活を豊かにするためのWEBページやアプリを制作するクリエイターを目指して邁進していきたいと考えています。
              </p>
            </div>
          </Scroll>
          <Scroll>
            <Images />
          </Scroll>
        </ScrollControls>
      </Canvas>
      </section>
      </AnimateOpacity>
      <Footer />
      {/* </AnimatePresence> */}
    </>
  );
}

export default Profile;
