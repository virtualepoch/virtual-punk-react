import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const FpsMeter = ({ fpsMeter, performanceLevel }) => {
  const lastFpsValues = useRef([]);
  const frames = useRef(0);
  const prevTime = useRef(performance.now());
  const animRef = useRef(0);
  const [fps, setFps] = useState([]);

  function calcFps() {
    const t = performance.now();

    frames.current += 1;

    if (t > prevTime.current + 1000) {
      const elapsedTime = t - prevTime.current;

      const currentFps = Math.round((frames.current * 1000) / elapsedTime);

      lastFpsValues.current = lastFpsValues.current.concat(currentFps);

      if (elapsedTime > 1500) {
        for (let i = 1; i <= (elapsedTime - 1000) / 1000; i++) {
          lastFpsValues.current = lastFpsValues.current.concat(0);
        }
      }

      // !!!???? FIGURE OUT WHAT THE NUMBER 20 DOES BELOW
      lastFpsValues.current = lastFpsValues.current.slice(
        Math.max(lastFpsValues.current.length - 20, 0)
      );

      setFps(lastFpsValues.current);

      frames.current = 0;
      prevTime.current = performance.now();
    }

    animRef.current = requestAnimationFrame(calcFps);
  }

  useEffect(() => {
    animRef.current = requestAnimationFrame(calcFps);

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  });

  const avgFps = (fps.reduce((a, b) => a + b, 0) / fps.length).toFixed(2);
  // const maxFps = Math.max.apply(Math.max, fps);
  const currentFps = fps[fps.length - 1];

  return (
    <CSSTransition in={fpsMeter} unmountOnExit timeout={500} classNames="fps">
      <div className="fps">
        FPS/AVG※{currentFps}/{avgFps}/{performanceLevel}
      </div>
    </CSSTransition>
  );
};
