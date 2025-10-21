import * as three from 'three';
import { shapesGroup } from './shapes';
import { camera } from './camera';

const scene = new three.Scene()
// scene.background = new three.Color(0xffffff)
// const fog = new three.Fog(0xffffff, 1, 10)
// scene.fog = fog
scene.add(shapesGroup)
scene.add(camera)

//light
const light = new three.AmbientLight(0xffffff, 0.5)
scene.add(light)

const pointLight = new three.PointLight(0xffffff, 10)
pointLight.position.set(2, 2, 2)
scene.add(pointLight)

//axes
const axesHelper = new three.AxesHelper(3)
scene.add(axesHelper)

export { scene }