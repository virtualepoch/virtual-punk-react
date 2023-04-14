import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section className={`canvas-section ${props.right ? "items-end" : "items-start"}`}>
      <div className="canvas-section-div-1">
        <div className="canvas-section-div-2">
          <div className="canvas-section-div-3">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export function CanvasScrollAnimOverlay() {
  return (
    <Scroll html>
      <Section>
        <h1>Hello</h1>
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
      <Section right>
        <h1>Hello</h1>
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
      <Section right>
        <h1>Hello</h1>
        <p> Lorem50 blaaha lasdjflka dsjlkfaj dflkdas daslk fjdlks fjalkdsf dlkasf jldkjf dlksafj dlksaf jdsalkf jdsalkf jdaslkfd jsflkd jfalksdf jlfdks</p>
      </Section>
    </Scroll>
  );
}
