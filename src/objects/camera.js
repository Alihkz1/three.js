import * as three from 'three';


const camera = new three.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.5,
    30
)
camera.position.z = 10

// distance of cube to camera
// const distance = cubeMesh.position.distanceTo(camera.position)   

export { camera }