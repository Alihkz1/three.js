import * as three from 'three';


const camera = new three.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.01,
    100
)
camera.position.z = 40

export { camera }