import * as three from 'three';

const geometry = new three.SphereGeometry(1, 16, 16)
const material = new three.MeshBasicMaterial({ color: 'purple', wireframe: true })
const sphereMesh = new three.Mesh(
    geometry,
    material
)
sphereMesh.position.x = 2
export { sphereMesh }