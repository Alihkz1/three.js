import * as three from 'three';
import { cubeMesh } from "./cube"
import { cubeMesh2 } from "./cube-2-lambertMaterial"
import { cubeMesh3 } from "./cube-3-physicalMaterial"
import { sphereMesh } from "./sphere"
import { cylinder } from './cylinder';

const shapesGroup = new three.Group()
shapesGroup.add(cubeMesh, sphereMesh, cubeMesh2, cubeMesh3, cylinder)

export { shapesGroup }