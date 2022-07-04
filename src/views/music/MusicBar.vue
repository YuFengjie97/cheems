<template>
  <div class="con">
    <AudioControl
      class="audioControl"
      :showStop="false"
      :showForward="false"
      :showBackward="false"
      @play="handlePlay"
      @pause="handlePause"
    />
    <div class="threeCon" ref="threeCon"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import * as THREE from 'three'
import { MyThree, randomArr } from '@/utils'
import { useStore } from '@/store'
import { ElLoading } from 'element-plus'


import AudioControl from '@/components/audioControl/index.vue'
import mp3 from '@/assets/audio/audio1.mp3'

const store = useStore()

const threeCon = ref()

let scene = null
let camera = null
let renderer = null
const meshs = []
let sound = null
let analyser = null
const gap = 1
const fftSize = 512
const meshNum = fftSize / 2
let isPlaying = false

let loading = null

watch(
  () => store.mainHeight,
  (height) => {
    loading = ElLoading.service({
      lock: true,
      text: 'Audio loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })

    let { width } = threeCon.value.getBoundingClientRect() // 父组件渲染完,子组件肯定渲染完了,所以直接获取

    const { c, s, r, mt } = new MyThree(threeCon.value, width, height - 50)
    scene = s
    camera = c
    renderer = r

    camera.position.x = 100
    camera.position.y = 10
    camera.position.z = 100
    camera.lookAt(0, 0, 0)

    mt.createCoordinateSystem()
    initMeshs()
    initAudioAnalyser()
    animation()
  }
)

function initMeshs() {
  for (let i = 0; i < meshNum; i++) {
    const mesh = createMesh()
    mesh.position.set((1 + gap) * i, 0, 0)
    meshs.push(mesh)
  }
}

function createMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  return mesh
}

function updateMeshs(audioData) {
  meshs.forEach((m, i) => {
    m.scale.y = audioData[i] * 0.8
  })
}

function animation() {
  renderer.setAnimationLoop(animation)
  if (!isPlaying) return
  console.log('animate');

  const audioData = analyser.getFrequencyData()
  updateMeshs(audioData)

  renderer.render(scene, camera)
}

function initAudioAnalyser() {
  const listener = new THREE.AudioListener()
  camera.add(listener)
  sound = new THREE.Audio(listener)
  const audioLoader = new THREE.AudioLoader()
  audioLoader.load(mp3, function (buffer) {
    console.log('music load ok');
    sound.setBuffer(buffer)
    sound.setLoop(true)
    sound.setVolume(0.5)
    analyser = new THREE.AudioAnalyser(sound, fftSize)
    loading.close()
  })
}

function handlePause() {
  sound.pause()
  isPlaying = false
}
function handlePlay() {
  sound.play()
  isPlaying = true
}
</script>

<style lang="less" scoped>
.con {
  position: relative;
  .audioControl {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
