import { useState, useRef } from "react";
import { useFrameLoop } from "../utils/FrameLoop";

export function Flow() {
  const [time, setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);
  const canvasRef = useRef();
  useFrameLoop((time, deltaTime) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    let gradient = ctx.createLinearGradient(canvas.width / 10, 0, canvas.width, 0);
    gradient.addColorStop(0, "cyan");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "cyan");
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    // ctx.lineCap = "round";

    // ctx.arc(600, 390, 150, 0, Math.PI);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(100, 200);
    // ctx.lineTo(400, 500);
    // ctx.stroke();

    class Particle {
      constructor(effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.speedX = 1;
        this.speedY = 1;
      }
      draw(ctx) {
        ctx.fillRect(this.x, this.y, 20, 10);
      }
      update() {
        this.x = this.speedX;
        this.y = this.speedY;
      }
    }

    class Effect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.numberOfParticles = 100;
        this.init();
      }
      init() {
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
      }
      render(context) {
        this.particles.forEach((particle) => {
          particle.draw(context);
          particle.update();
        });
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    setTime(time);
    setDeltaTime(deltaTime);
    effect.render(ctx);
  });

  return <canvas className="flow-canvas" ref={canvasRef}></canvas>;
}
