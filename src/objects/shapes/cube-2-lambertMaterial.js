import * as three from 'three';

const geometry = new three.BoxGeometry(1, 1, 1)
const material = new three.MeshLambertMaterial()
const cubeMesh2 = new three.Mesh(geometry, material)
material.side = three.DoubleSide
cubeMesh2.position.y = 1.5
// cubeMesh2.rotation.y = three.MathUtils.degToRad(45)
export { cubeMesh2 } 