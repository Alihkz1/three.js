import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

console.log(three)

const scene = new three.Scene()

const cubeGeometry = new three.BoxGeometry(1, 1, 1)
const cubeMaterial = new three.MeshBasicMaterial({ color: 'red' })
const cubeMesh = new three.Mesh(
  cubeGeometry,
  cubeMaterial
)

scene.add(cubeMesh)

const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
)
camera.position.z = 5
scene.add(camera)

const canvas = document.querySelector('.three')
const render = new three.WebGLRenderer(
  { canvas },
)
render.setSize(window.innerWidth, window.innerHeight)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.autoRotate = true

const renderLoop = () => {
  controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()
