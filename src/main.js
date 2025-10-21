import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new three.Scene()

// creating cube
const cubeGeometry = new three.BoxGeometry(1, 1, 1)
const cubeMaterial = new three.MeshBasicMaterial({ color: 'purple', wireframe: true })
const cubeMesh = new three.Mesh(
  cubeGeometry,
  cubeMaterial
)
cubeMesh.rotation.y = three.MathUtils.degToRad(45)
// cubeMesh.rotation.reorder('XYZ')

const cubeMesh2 = new three.Mesh(
  cubeGeometry,
  cubeMaterial
)
cubeMesh2.position.x = 2 // relative to the grp

const cubeMesh3 = new three.Mesh(
  cubeGeometry,
  cubeMaterial
)
cubeMesh3.position.x = -2 // relative to the grp

const group = new three.Group()
group.add(cubeMesh, cubeMesh2, cubeMesh3)
group.scale.y = 2 // applies to all children
group.position.y = 2 // applies to all children
scene.add(cubeMesh)
scene.add(group)


//axes
const axesHelper = new three.AxesHelper(3)
scene.add(axesHelper)

// creating camera
const camera = new three.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.5,
  30
)
camera.position.z = 10
scene.add(camera)

const distance = cubeMesh.position.distanceTo(camera.position)

//creating render
const canvas = document.querySelector('.three')
const render = new three.WebGLRenderer(
  { canvas, antialias: true },
)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
// controls.autoRotate = true
render.setSize(window.innerWidth, window.innerHeight)
// const maxPixelRatio = Math.min(window.devicePixelRatio, 2)
// render.setPixelRatio(maxPixelRatio)

const renderLoop = () => {
  controls.update()
  render.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()
