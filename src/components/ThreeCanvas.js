import { useRef, useEffect } from "react";
import * as THREE from "three";

export function ThreeCanvas() {
  const style = {
    threeJsCanvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      zIndex: "-1",
    },
  };

  const threeJsCanvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 70;

    const canvas = threeJsCanvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xff0000, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xff0000, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    // CUBE OBJECT ///////////
    const boxGeometry = new THREE.TorusGeometry(25, 2, 16, 50);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    const boxGeometry2 = new THREE.TorusGeometry(20, 2, 16, 50);
    const boxMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const boxMesh2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
    scene.add(boxMesh2);

    const boxGeometry3 = new THREE.TorusGeometry(15, 1, 8, 40);
    const boxMaterial3 = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    const boxMesh3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
    scene.add(boxMesh3);

    const boxGeometry4 = new THREE.TorusGeometry(12, 1, 8, 40);
    const boxMaterial4 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const boxMesh4 = new THREE.Mesh(boxGeometry4, boxMaterial4);
    scene.add(boxMesh4);

    const animate = () => {
      boxMesh.rotation.x += 0.02;
      boxMesh2.rotation.x += -0.04;
      boxMesh3.rotation.y += 0.04;
      boxMesh4.rotation.y += -0.04;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return <canvas style={style.threeJsCanvas} ref={threeJsCanvasRef}></canvas>;
}
