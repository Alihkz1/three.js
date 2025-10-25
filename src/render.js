import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { scene } from './objects/scene';
import { camera } from './objects/camera';
import { initPlanets, PLANETS } from './objects/planets/sphere';

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

initPlanets()

const scenePlanets = scene.children.filter((c) => c.name != 'sun' && c instanceof three.Mesh)

const renderLoop = () => {
  scenePlanets.forEach((pl, index) => {
    const planet = PLANETS[index]
    pl.rotation.y += planet.speed
    pl.rotation.x = Math.sin(pl.rotation.y) * PLANETS[index].distance
    pl.rotation.z = Math.cos(pl.rotation.y) * PLANETS[index].distance
    pl.children.forEach((moon, moonIndex) => {
      moon.rotation.y += planet.moons[moonIndex].speed
      moon.rotation.x = Math.sin(moon.rotation.y) * planet.moons[moonIndex].distance
      moon.rotation.z = Math.cos(moon.rotation.y) * planet.moons[moonIndex].distance
    })
  })

  controls.update();
  render.render(scene, camera);
  requestAnimationFrame(renderLoop);
};


renderLoop()
