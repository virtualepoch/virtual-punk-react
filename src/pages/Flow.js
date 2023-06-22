import { useEffect, useRef } from "react";

export function Flow() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
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
      draw(context) {
        context.fillRect(this.x, this.y, 50, 50);
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
        this.numberOfParticles = 50;
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

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render(ctx);
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas className="flow-canvas" ref={canvasRef}></canvas>;
}
