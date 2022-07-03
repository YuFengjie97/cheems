<template>
  <div class="con" ref="con"></div>
</template>

<script setup>
import { onMounted, ref, render, watch, watchEffect } from 'vue'
import * as THREE from 'three'
import { initThree } from '@/utils'

import { useStore } from '@/store'
const store = useStore()

const con = ref()

let scene = null
let camera = null
let renderer = null
let mesh = null

watch(
  () => store.mainHeight,
  (height) => {
    let { width } = con.value.getBoundingClientRect() // 父组件渲染完,子组件肯定渲染完了,所以直接获取

    const { c, s, r } = initThree(con.value, width, height - 50)
    scene = s
    camera = c
    renderer = r

    mesh = createGeo(scene)

    animation()
  }
)

function createGeo(scene) {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  return mesh
}

function animation() {
  renderer.setAnimationLoop(animation)
  // requestAnimationFrame(animation)

  mesh.rotation.x += 0.1
  mesh.rotation.y += 0.1

  renderer.render(scene, camera)
}
</script>

<style lang="less" scoped>
.con {
}
</style>
