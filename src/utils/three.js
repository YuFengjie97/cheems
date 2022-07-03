import * as THREE from 'three'

export class MyThree {
  camera = null
  scene = null
  renderer = null

  constructor(con, width, height) {
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000)
    this.camera.position.z = 1

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(width, height)
    con.appendChild(this.renderer.domElement)

    return { s: this.scene, c: this.camera, r: this.renderer, mt: this }
  }

  createLine(vecs, color) {
    const geometry = new THREE.BufferGeometry().setFromPoints(vecs)
    const material = new THREE.LineBasicMaterial({ color })

    const line = new THREE.Line(geometry, material)
    this.scene.add(line)
  }

  createCoordinateSystem(length = 1000) {
    const lines = [
      [
        [0, 0, 0],
        [length, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, length, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, length],
      ],
    ]

    const colors = ['#55efc4', '#fd79a8', '#ffeaa7']

    lines.forEach((l, i) => {
      let lineVec = []
      l.forEach((p) => {
        const vec = new THREE.Vector3(...p)
        lineVec.push(vec)
      })
      this.createLine(lineVec, colors[i])
    })
  }
}
