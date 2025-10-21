import * as three from 'three'

const material = new three.MeshBasicMaterial({ color: 'red' })
const geometry = new three.CylinderGeometry(0.5, 0.5, 1, 32)
const cylinder = new three.Mesh()
cylinder.geometry = geometry
cylinder.material = material
cylinder.position.y = -2

export { cylinder }