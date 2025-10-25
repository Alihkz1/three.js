import * as three from 'three';
import { camera } from './camera';

const scene = new three.Scene()

// const backgroundTexture = textureLoader.load('/textures/2k_stars_milky_way.jpg')
// scene.background = backgroundTexture

// const fog = new three.Fog(0xffffff, 1, 10)
// scene.fog = fog

//axes
// const axesHelper = new three.AxesHelper(30)
// scene.add(axesHelper)

scene.add(camera)

export { scene }