import * as three from 'three'
import { scene } from '../scene'

const sphereGeometry = new three.SphereGeometry(1, 32, 32)
const textureLoader = new three.TextureLoader()
const ambientLight = new three.AmbientLight(
    0xffffff,
    0.1,
)
// const directionalLight = new three.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(10, 10, 10);
const pointLight = new three.PointLight(
    0xffffff,
    2
)
scene.add(pointLight, ambientLight)

const backgroundTexture = textureLoader.load('/textures/2k_stars_milky_way.jpg')
scene.background = backgroundTexture

// sun
const sunTexture = textureLoader.load('/textures/2k_sun.jpg')
const sunMaterial = new three.MeshStandardMaterial(
    {
        map: sunTexture
    }
)
const sun = new three.Mesh(sphereGeometry, sunMaterial)
sun.scale.setScalar(5)
sun.name = 'sun'
scene.add(sun)

// mars 
const marsTexture = textureLoader.load('/textures/2k_mars.jpg')
const marsMaterial = new three.MeshStandardMaterial(
    {
        map: marsTexture
    }
)

// venus 
const venusTexture = textureLoader.load('/textures/2k_venus_surface.jpg')
const venusMaterial = new three.MeshStandardMaterial(
    {
        map: venusTexture
    }
)

// mercury 
const mercuryTexture = textureLoader.load('/textures/2k_mercury.jpg')
const mercuryMaterial = new three.MeshStandardMaterial(
    {
        map: mercuryTexture
    }
)

//earth
const earthTexture = textureLoader.load('/textures/2k_earth_daymap.jpg')
const earthMaterial = new three.MeshStandardMaterial(
    {
        map: earthTexture
    }
)

//moon
const moonMaterial = new three.MeshBasicMaterial({
    map: textureLoader.load('/textures/2k_moon.jpg')
})

export function initPlanets() {
    PLANETS.forEach((currentPlanet) => {
        const planet = new three.Mesh(
            sphereGeometry,
            currentPlanet.material
        )
        planet.name = currentPlanet.name
        planet.scale.setScalar(currentPlanet.radius)
        planet.position.x = currentPlanet.distance

        currentPlanet.moons.forEach((moon) => {
            const moonMesh = new three.Mesh(
                sphereGeometry,
                moonMaterial
            )
            moonMesh.scale.setScalar(moon.radius)
            moonMesh.position.x = moon.distance
            planet.add(moonMesh)
        })
        scene.add(planet)
        return planet
    })
}

export const PLANETS = [
    {
        name: "Mercury",
        radius: 0.5,
        distance: 10,
        speed: 0.01,
        material: mercuryMaterial,
        moons: [],
    },
    {
        name: "Venus",
        radius: 0.8,
        distance: 15,
        speed: 0.007,
        material: venusMaterial,
        moons: [],
    },
    {
        name: "Earth",
        radius: 1,
        distance: 20,
        speed: 0.005,
        material: earthMaterial,
        moons: [
            {
                name: "Moon",
                radius: 0.3,
                distance: 3,
                speed: 0.015,
            },
        ],
    },
    {
        name: "Mars",
        radius: 0.7,
        distance: 25,
        speed: 0.003,
        material: marsMaterial,
        moons: [
            {
                name: "Phobos",
                radius: 0.1,
                distance: 2,
                speed: 0.02,
            },
            {
                name: "Deimos",
                radius: 0.2,
                distance: 3,
                speed: 0.015,
                color: 0xffffff,
            },
        ],
    },
];