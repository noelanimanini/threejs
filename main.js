let scene, camera, renderer, cube;

const init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.CylinderGeometry(2, 2, 3, 10);

  const texture = new THREE.TextureLoader().load("giphy.gif");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);

  camera.position.z = 5;
};

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.y += 0.01;
  cylinder.rotation.x += 0.01;

  renderer.render(scene, camera);
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize, false);

init();
animate();
