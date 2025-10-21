import * as three from 'three';
import { Pane } from 'tweakpane';

const pane = new Pane()

const geometry = new three.BoxGeometry(1, 1, 1)
const material = new three.MeshPhysicalMaterial()
material.color = new three.Color('green')
const cubeMesh3 = new three.Mesh(geometry, material)
material.side = three.DoubleSide
cubeMesh3.position.y = 3

pane.addInput(material, 'roughness', {
    min: 0,
    max: 100,
    step: 1
})
pane.addInput(material, 'metalness', {
    min: 0,
    max: 100,
    step: 1
})
pane.addInput(material, 'reflectivity', {
    min: 0,
    max: 100,
    step: 1
})
pane.addInput(material, 'clearcoat', {
    min: 0,
    max: 100,
    step: 1
})
export { cubeMesh3 } 