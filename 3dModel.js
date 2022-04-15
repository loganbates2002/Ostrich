import { GLTFLoader } from "./GLTFLoader.js";

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var div = document.getElementById("Model_Container");
div.appendChild(renderer.domElement);

var loader = new GLTFLoader();

var obj;
loader.load("scene.gltf", function (gltf) {
  obj = gltf.scene;
  scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xfffffff);
var light = new THREE.HemisphereLight(0xfffffff, 0x000000, .8);
scene.add(light);
camera.position.set(0, 3, 4);
function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();