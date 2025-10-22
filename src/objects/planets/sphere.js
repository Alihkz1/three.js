import * as three from 'three'

const geometry = new three.SphereGeometry(1, 32, 32)

// sun
const sunMaterial = new three.MeshBasicMaterial(
    {
        color: 'yellow'
    }
)
const sun = new three.Mesh(geometry, sunMaterial)
sun.scale.setScalar(5)


//earth
const earthMaterial = new three.MeshBasicMaterial(
    {
        color: 'blue'
    }
)
const earth = new three.Mesh(geometry, earthMaterial)
earth.position.x = 10


// moon
const moonMaterial = new three.MeshBasicMaterial(
    {
        color: 'white'
    }
)
const moon = new three.Mesh(geometry, moonMaterial)
moon.scale.setScalar(0.3)
moon.position.x = 2
earth.add(moon)

export { sun, earth, moon }