import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunPurpleImage from "../images/sunpurple.jpg";

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
    // SCENE, CAMERA, CANVAS, AND RENDERER ////////////
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;
    camera.position.y = 10;

    const canvas = threeJsCanvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // LIGHTING /////////////////
    const ambientLight = new THREE.AmbientLight(0xff0000, 0.5);
    ambientLight.castShadow = true;

    const spotLight = new THREE.SpotLight(0xff0000, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);

    scene.add(ambientLight, spotLight);

    // const lightHelper = new THREE.SpotLightHelper(spotLight);
    // const gridHelper = new THREE.GridHelper(200, 50);

    // scene.add(gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    // CUBE OBJECTS ///////////
    const boxGeometry1 = new THREE.TorusGeometry(25, 0.5, 10, 20);
    const boxMaterial1 = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    const boxMesh1 = new THREE.Mesh(boxGeometry1, boxMaterial1);

    const boxGeometry2 = new THREE.TorusGeometry(20, 1, 10, 20);
    const boxMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const boxMesh2 = new THREE.Mesh(boxGeometry2, boxMaterial2);

    const boxGeometry3 = new THREE.TorusGeometry(15, 1, 8, 15);
    const boxMaterial3 = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    const boxMesh3 = new THREE.Mesh(boxGeometry3, boxMaterial3);

    const boxGeometry4 = new THREE.TorusGeometry(12, 1, 8, 15);
    const boxMaterial4 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const boxMesh4 = new THREE.Mesh(boxGeometry4, boxMaterial4);

    scene.add(boxMesh1, boxMesh2, boxMesh3, boxMesh4);

    // STAR OBJECTS /////////////////
    function addStar() {
      const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      starMesh.position.set(x, y, z);
      scene.add(starMesh);
    }

    Array(200).fill().forEach(addStar);

    // BACKGROUND /////////////////////
    const sunPurpleBg = new THREE.TextureLoader().load(sunPurpleImage);
    scene.background = sunPurpleBg;

    // ANIMATION FUNCTION ///////////////
    // const start = Date.now();

    const animate = () => {
      // CAMERA MOVEMENT //////
      // if(camera.position.x < 30){
      //   camera.position.x += 0.1;
      // }

      // var millisElapsed = Date.now() - start;
      // var secondsElapsed = Math.floor(millisElapsed / 1000);

      // if (secondsElapsed > 2 && camera.position.z > 35) {
      if (camera.position.z > 35) {
        camera.position.z -= 1;
      }

      // OBJECTS /////////
      boxMesh1.rotation.x += 0.005;
      boxMesh2.rotation.x += -0.01;
      boxMesh3.rotation.y += 0.005;
      boxMesh4.rotation.y += -0.01;
      renderer.render(scene, camera);
      controls.update();
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return <canvas style={style.threeJsCanvas} ref={threeJsCanvasRef}></canvas>;
}
