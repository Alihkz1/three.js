import * as three from 'three';

const cubeGeometry = new three.BoxGeometry(1, 1, 1)
const cubeMaterial = new three.MeshBasicMaterial({ color: 'purple', wireframe: true })
const cubeMesh = new three.Mesh(
    cubeGeometry,
    cubeMaterial
)
cubeMesh.rotation.y = three.MathUtils.degToRad(45)
export { cubeMesh } 