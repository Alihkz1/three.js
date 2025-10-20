import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new three.Scene()

// creating cube
const cubeGeometry = new three.BoxGeometry(1, 1, 1)
const cubeMaterial = new three.MeshBasicMaterial({ color: 'purple' })
const cubeMesh = new three.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

cubeMesh.position.y = 0

//axes
const axesHelper = new three.AxesHelper(2)
scene.add(axesHelper)

// creating camera
const camera = new three.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.5,
  30
)
camera.position.z = 5
scene.add(camera)

//creating render
const canvas = document.querySelector('.three')
const render = new three.WebGLRenderer(
  { canvas, antialias: true },
)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.autoRotate = true
render.setSize(window.innerWidth, window.innerHeight)
// const maxPixelRatio = Math.min(window.devicePixelRatio, 2)
// render.setPixelRatio(maxPixelRatio)

const renderLoop = () => {
  controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()
