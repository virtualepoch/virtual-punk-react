import { useRef, useEffect } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunPurpleImage from "../images/sunpurple2.jpg";

export function ThreeCanvas() {
  const style = {
    threeJsCanvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      zIndex: "-2",
      background: "linear-gradient(aqua, black, aqua)",
    },
  };

  const threeJsCanvasRef = useRef(null);

  useEffect(() => {
    // SCENE, CAMERA, CANVAS, AND RENDERER ////////////
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 0;

    const canvas = threeJsCanvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight + 56);
    renderer.setClearColor(0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    // LIGHTING /////////////////
    const ambientLight = new THREE.AmbientLight(0xff0000, 0.5);
    ambientLight.castShadow = true;

    const spotLight = new THREE.SpotLight(0xff0000, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);

    // const directionalLight = new THREE.DirectionalLight();
    // directionalLight.position.set(0, 0, 20);

    scene.add(ambientLight, spotLight);

    // const lightHelper = new THREE.SpotLightHelper(spotLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);

    // const controls = new OrbitControls(camera, renderer.domElement);

    // SCENE OBJECTS ///////////
    const torusCenter1 = new THREE.Mesh(new THREE.TorusGeometry(2, 0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0x00ffff }));
    torusCenter1.position.y = 12;

    const torusLeft1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    torusLeft1.position.x = -1;
    torusLeft1.position.y = 12;

    const torusRight1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    torusRight1.position.x = 1;
    torusRight1.position.y = 12;

    const torusLeft2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0x00ffff }));
    torusLeft2.position.x = -2;
    torusLeft2.position.y = 12;

    const torusRight2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0x00ffff }));
    torusRight2.position.x = 2;
    torusRight2.position.y = 12;

    // const sun = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 16), new THREE.MeshBasicMaterial({ map: sunTexture, wireframe: false }));

    scene.add(torusCenter1, torusLeft1, torusRight1, torusLeft2, torusRight2);

    // STAR OBJECTS /////////////////
    function addStar() {
      const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      starMesh.position.set(x, y, z);
      scene.add(starMesh);
    }

    Array(200).fill().forEach(addStar);

    // ANIMATION FUNCTION ///////////////
    const start = Date.now();

    const animate = () => {
      // CAMERA MOVEMENT //////
      // if(camera.position.x < 30){
      //   camera.position.x += 0.1;
      // }

      // var millisElapsed = Date.now() - start;
      // var secondsElapsed = Math.floor(millisElapsed / 1000);

      // if (secondsElapsed > 1 && camera.position.z > 40) {
      //   camera.position.z -= 3;
      // }
      // OBJECTS /////////
      renderer.render(scene, camera);
      // controls.update();
      window.requestAnimationFrame(animate);
    };
    animate();

    function scrollAnim() {
      torusCenter1.rotation.x += 0.1;
      torusLeft1.rotation.x += -0.1;
      torusRight1.rotation.x += -0.1;
      torusLeft2.rotation.x += -0.2;
      torusRight2.rotation.x += -0.2;
    }

    window.addEventListener("scroll", scrollAnim);

    window.addEventListener("resize", function () {
      if (window.innerWidth > 700) {
        renderer.setSize(window.innerWidth, window.innerHeight + 56);
      }
    });
  }, []);

  return <canvas style={style.threeJsCanvas} ref={threeJsCanvasRef}></canvas>;
}
