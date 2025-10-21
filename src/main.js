import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cubeMesh } from './objects/cube'
import { sphereMesh } from './objects/sphere';
import { cubeMesh2 } from './objects/cube-2';
import { scene } from './scene';

const group = new three.Group()
group.add(cubeMesh, sphereMesh, cubeMesh2)
scene.add(group)

// creating camera
const camera = new three.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.5,
  30
)
camera.position.z = 10
scene.add(camera)

// distance of cube to camera
// const distance = cubeMesh.position.distanceTo(camera.position)

//creating render
const canvas = document.querySelector('.three')
const render = new three.WebGLRenderer(
  { canvas, antialias: true },
)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
// controls.autoRotate = true
render.setSize(window.innerWidth, window.innerHeight)

const clock = new three.Clock()
let previousTime = 0

const renderLoop = () => {
  const currentTime = clock.getElapsedTime()
  const delta = currentTime - previousTime
  previousTime = currentTime
  cubeMesh.rotation.y += three.MathUtils.degToRad(1) * delta * 20

  // controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()
