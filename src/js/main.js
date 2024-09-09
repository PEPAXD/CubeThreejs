import * as THREE from "three";

// Crear una escena, una cámara y un renderizador
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setAnimationLoop(animate);



// Selecciona el div con el id "3DCubeHere" y agrega el renderizador a él
const cubeContainer = document.getElementById("3DCubeHere");
cubeContainer.appendChild(renderer.domElement);

// Ajusta el tamaño del renderizador al tamaño del contenedor
resizeRendererToDisplaySize();

// Crea la geometría del cubo y el material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Crea la geometría de los bordes y el material de línea
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const line = new THREE.LineSegments(edges, lineMaterial);
scene.add(line);

// Acerca la cámara al cubo
camera.position.z = 4;


function resizeRendererToDisplaySize() {
  const width = cubeContainer.clientWidth;
  const height = cubeContainer.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

// renderiza la escena
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;

  resizeRendererToDisplaySize();
  renderer.render(scene, camera);
}
