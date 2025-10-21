import * as three from 'three';

const geometry = new three.BoxGeometry(1, 1, 1)
const material = new three.MeshBasicMaterial({ color: 'purple', transparent: true, opacity: 0.75 })
const cubeMesh = new three.Mesh(
    geometry,
    material
)
// material.color  = new three.Color('purple')
material.side = three.DoubleSide
cubeMesh.rotation.y = three.MathUtils.degToRad(45)
export { cubeMesh } 