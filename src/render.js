import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cubeMesh } from './objects/shapes/cube'
import { scene } from './objects/scene';
import { camera } from './objects/camera';

//creating render
const canvas = document.querySelector('.three')
const render = new three.WebGLRenderer(
  { canvas, antialias: true },
)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
// controls.autoRotate = true

render.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
  render.setSize(window.innerWidth, window.innerHeight)
})

const clock = new three.Clock()
let previousTime = 0

const renderLoop = () => {
  // scene.children.forEach((ch) => {
  //   if (ch instanceof three.Group) {
  //     ch.rotation.y += 0.01
  //   }
  // })
  const currentTime = clock.getElapsedTime()
  const delta = currentTime - previousTime
  previousTime = currentTime
  // cubeMesh.rotation.y += three.MathUtils.degToRad(1) * delta * 20

  // controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}


renderLoop()
