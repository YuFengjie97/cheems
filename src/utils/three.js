import * as THREE from 'three'

export function initThree(con, width, height) {
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
  camera.position.z = 1

  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  con.appendChild(renderer.domElement)

  return { c: camera, s: scene, r: renderer }
}
