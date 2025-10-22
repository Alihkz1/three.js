import * as three from 'three'

const textureLoader = new three.TextureLoader()
const grass = textureLoader.load('/panel1.png')
grass.repeat.set(2, 2)
grass.wrapS = three.RepeatWrapping // x
grass.wrapT = three.RepeatWrapping // y
grass.offset.x = 0.5

const material = new three.MeshBasicMaterial({ side: three.DoubleSide })
material.map = grass

const geometry = new three.PlaneGeometry(1, 1)

const grassMesh = new three.Mesh(geometry, material)
grassMesh.position.x = 1
grassMesh.position.y = 1
grassMesh.rotation.x = Math.PI * 0.5

export { grassMesh }