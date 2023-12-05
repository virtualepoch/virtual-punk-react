import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section className={`canvas-section ${props.right ? "items-end" : "items-start"}`} style={{ opacity: props.opacity }}>
      <div className="canvas-section-div-1">
        <div className="canvas-section-div-2">
          <div className="canvas-section-div-3">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export function ScrollOverlay() {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityThirdSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <Section opacity={opacityFirstSection}>
        <h1>Hello</h1>
        <p> Welcome to this scroll animation. It features code by the brilliant YouTuber who goes by the name of Wawa Sensei. You can find the tutorial for this animation <a style={{color: "blue", textDecoration: "underline"}} href="https://www.youtube.com/watch?v=pXpckHDDNYo&t=1s" target="_blank" rel="noreferrer">here</a>. The 3d model used was created by another brilliant artist by the name of Thayu Miko. You can connect with her twitter @thaymiko or her instagram @madeingrae.</p>
      </Section>
      <Section right opacity={opacitySecondSection}>
        <h1>Inspiration</h1>
        <p> The tutorial for this scroll animation was very informative, and a lot of fun to follow along with. It provided inspiration and ideas on many other things I plan to do in the future.</p>
      </Section>
      <Section opacity={opacityThirdSection}>
        <h1>Conclusion</h1>
        <p> Things like this are the future of the web and I hope to be part of it.</p>
      </Section>
    </Scroll>
  );
}
