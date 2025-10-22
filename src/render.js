import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { scene } from './objects/scene';
import { camera } from './objects/camera';
import { earth, moon, sun } from './objects/planets/sphere';

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
const renderLoop = () => {
  const elapsed = clock.getElapsedTime()

  earth.rotation.y += 0.01
  earth.rotation.x = Math.sin(elapsed) * 10
  earth.rotation.z = Math.cos(elapsed) * 10
  
  moon.rotation.x = Math.sin(elapsed) * 2
  moon.rotation.z = Math.cos(elapsed) * 2

  controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}


renderLoop()
