import { useRef, useEffect } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sphereImage from "../images/red-cyber.jpg";
import sphereTorus from "../images/aqua-cyber.png";

export function ThreeCanvas() {
  const style = {
    threeJsCanvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      zIndex: "-2",
      // background: "linear-gradient(to right, aqua, black, aqua)",
      pointerEvents: "none",
    },
  };

  const threeJsCanvasRef = useRef(null);

  useEffect(() => {
    // CANVAS, CAMERAS, SCENES, AND RENDERER ////////////
    let width, height, canvas, camera, scene, renderer;

    let torusCenter, torusLeft1, torusRight1, torusLeft2, torusRight2, torusLeft3, torusRight3, sphere, sphereTorus1, sphereTorus2, sphereTorus3, sphereTorus4;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas = threeJsCanvasRef.current;

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog("aqua", 10, 45);

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height + 56);
    // renderer.setClearColor(0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(0, 0, 20);

    scene.add(directionalLight);

    // SCENE OBJECTS ///////////
    function createTorusObjects() {
      torusCenter = new THREE.Mesh(new THREE.TorusGeometry(2, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
      torusCenter.position.y = 1;

      torusLeft1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusLeft1.position.x = -1;

      torusRight1 = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusRight1.position.x = 1;

      torusLeft2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
      torusLeft2.position.x = -2;

      torusRight2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
      torusRight2.position.x = 2;

      torusLeft3 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusLeft3.position.x = -3;

      torusRight3 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 3, 4), new THREE.MeshStandardMaterial({ color: "red" }));
      torusRight3.position.x = 3;
    }
    createTorusObjects();

    const torusObjects = [torusCenter, torusLeft1, torusRight1, torusLeft2, torusRight2, torusLeft3, torusRight3];

    for (let i = 0; i < torusObjects.length; i++) {
      scene.add(torusObjects[i]);
      if (window.innerWidth < 700) {
        torusObjects[i].position.y = 12.5;
      } else {
        torusObjects[i].position.y = 13;
      }
    }

    function createSphereObjects() {
      sphere = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 16), new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(sphereImage) }));
      sphere.rotation.y = -1.5;

      const sphereTorusTexture = new THREE.TextureLoader().load(sphereTorus);

      sphereTorus1 = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.5, 3, 32), new THREE.MeshStandardMaterial({ map: sphereTorusTexture }));

      sphereTorus2 = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.5, 3, 32), new THREE.MeshStandardMaterial({ color: "red" }));

      sphereTorus3 = new THREE.Mesh(new THREE.TorusGeometry(6, 0.5, 3, 32), new THREE.MeshStandardMaterial({ map: sphereTorusTexture }));

      sphereTorus4 = new THREE.Mesh(new THREE.TorusGeometry(6.7, 0.5, 3, 32), new THREE.MeshStandardMaterial({ color: "red" }));
    }
    createSphereObjects();
    scene.add(sphere, sphereTorus1, sphereTorus2, sphereTorus3, sphereTorus4);

    const pyramid = new THREE.Mesh(new THREE.ConeGeometry(4, 4, 4), new THREE.MeshStandardMaterial({ color: "aqua" }));
    scene.add(pyramid);
    pyramid.position.y = -8;

    const animate = () => {
      let rotateVar = 0.005;
      sphere.rotation.y += rotateVar;
      sphere.rotation.x += rotateVar;
      sphereTorus1.rotation.x += rotateVar;
      sphereTorus2.rotation.y += -rotateVar;
      sphereTorus2.rotation.x += -rotateVar;
      sphereTorus3.rotation.x += -rotateVar;
      sphereTorus4.rotation.y += rotateVar;
      sphereTorus4.rotation.x += rotateVar;
      pyramid.rotation.y += -0.01;
      renderer.render(scene, camera);
      // controls.update();
      window.requestAnimationFrame(animate);
    };
    animate();

    function scrollAnim() {
      torusCenter.rotation.x += 0.1;
      torusLeft1.rotation.x += -0.1;
      torusRight1.rotation.x += -0.1;
      torusLeft2.rotation.x += -0.2;
      torusRight2.rotation.x += -0.2;
      torusLeft3.rotation.x += -0.4;
      torusRight3.rotation.x += -0.4;
    }

    window.addEventListener("scroll", scrollAnim);

    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight + 56);

      for (let i = 0; i < torusObjects.length; i++) {
        if (window.innerWidth < 700) {
          torusObjects[i].position.y = 12.5;
        } else {
          torusObjects[i].position.y = 13;
        }
      }
    });
  }, []);

  return <canvas style={style.threeJsCanvas} ref={threeJsCanvasRef}></canvas>;
}
