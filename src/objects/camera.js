import * as three from 'three';


const camera = new three.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    1,
    100
)
camera.position.z = 25

// distance of cube to camera
// const distance = cubeMesh.position.distanceTo(camera.position)   

export { camera }