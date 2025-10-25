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

initPlanets()

const scenePlanets = scene.children
  .filter((c) => c.name != 'sun' && c instanceof three.Mesh)


const renderLoop = () => {
  
  scenePlanets.forEach((pl, index) => {
    const planet = PLANETS[index];

    // Orbit around global Y-axis
    planet.angle = (planet?.angle ?? 0) + planet.speed;
    pl.position.x = Math.sin(planet.angle) * planet.distance;
    pl.position.z = Math.cos(planet.angle) * planet.distance;

    // Optional: planet spinning around its own axis
    pl.rotation.y += 0.01;

    // Moon rotation/orbit around the planet
    pl.children.forEach((moon, moonIndex) => {
      const moonData = planet.moons[moonIndex];
      moonData.angle = (moonData.angle ?? 0) + moonData.speed;

      moon.position.x = Math.sin(moonData.angle) * moonData.distance;
      moon.position.z = Math.cos(moonData.angle) * moonData.distance;

      moon.rotation.y += 0.02; // spin the moon itself
    });
  });

  controls.update();
  render.render(scene, camera);
  requestAnimationFrame(renderLoop);
};


renderLoop()
