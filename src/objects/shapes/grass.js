import * as three from 'three'
import { Pane } from 'tweakpane'

const pane = new Pane()
const textureLoader = new three.TextureLoader()

//grass texture
const grass = textureLoader.load('/panel1.png')
grass.repeat.set(2, 2)
grass.wrapS = three.RepeatWrapping // x
grass.wrapT = three.RepeatWrapping // y
// grass.offset.x = 0.5
pane.addInput(grass, "offset", {
    x: {
        min: -1,
        max: 1,
        step: 0.001
    },
    y: {
        min: -1,
        max: 1,
        step: 0.001
    }
})

const material = new three.MeshStandardMaterial({ side: three.DoubleSide })
material.map = grass
// material.roughnessMap = png 
// material.metalness = 1 

const geometry = new three.PlaneGeometry(1, 1)

const grassMesh = new three.Mesh(geometry, material)
grassMesh.position.x = 1
grassMesh.position.y = 1
grassMesh.rotation.x = Math.PI * 0.5

export { grassMesh }