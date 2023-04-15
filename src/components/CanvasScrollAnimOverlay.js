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

export function CanvasScrollAnimOverlay() {
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
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
      <Section right opacity={opacitySecondSection}>
        <h1>Hello</h1>
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
      <Section opacity={opacityThirdSection}>
        <h1>Hello</h1>
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
    </Scroll>
  );
}
