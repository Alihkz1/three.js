import * as three from 'three';
import { cubeMesh } from "./cube"
import { cubeMesh2 } from "./cube-2-lambertMaterial"
import { cubeMesh3 } from "./cube-3-physicalMaterial"
import { sphereMesh } from "./sphere"
import { cylinder } from './cylinder';
import { grassMesh } from './grass';

const shapesGroup = new three.Group()
shapesGroup.add(grassMesh)
// shapesGroup.add(cubeMesh, sphereMesh, cubeMesh2, cubeMesh3, cylinder, grassMesh)

export { shapesGroup }