import * as three from 'three';

const vertices = new Float32Array([
    0, 0, 0,
    0, 1, 0,
    2, 0, 0,
])
const bufferAttribute = new three.BufferAttribute(vertices, 3)
const triangleGeometry = new three.BufferGeometry()
const material = new three.MeshBasicMaterial({ color: 'purple', wireframe: true })
triangleGeometry.setAttribute('position', bufferAttribute)

const triangleMesh = new three.Mesh(
    triangleGeometry,
    material
)

export { triangleMesh }