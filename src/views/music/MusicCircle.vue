<template>
  <div class="con" ref="con">
    <AudioControl
      class="audioControl"
      :showStop="false"
      :showForward="false"
      :showBackward="false"
      @play="handlePlay"
      @pause="handlePause"
    />
    <audio ref="audio" crossOrigin="anonymous">
      神圣的屎 Your suck browser does not support the
      <code>audio</code> element.
    </audio>
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script setup>
/** @type {HTMLCanvasElement} */

import AudioControl from '@/components/audioControl/index.vue'
import {
  Circle,
  colors,
  random,
  AudioAnalyser,
  getMax,
  getAvg,
  getMaxAndAvg,
} from '@/utils'
import { onMounted, ref, watch } from 'vue'
import { useStore } from '@/store/index'
import mp3 from '@/assets/audio/audio1.mp3'
import { ElLoading } from 'element-plus'

const con = ref()

let aa = null
let isInitAudioAnalyserDone = false

let ctx = null
const audio = ref()
const canvas = ref()
const canvasWidth = ref(0)
const canvasHeight = ref(0)
const circleNum = 256 // 为fftSize的一半
const rMin = 10
const rMax = 50
// const rInc = 0.8 // 半径增量
const shrinkCoe = 0.3 // 缩小系数
let circles = []
let h = 1
let audioDataBase = 1

let loading = null
let isPlaying = false

const store = useStore()

watch(
  () => store.mainHeight,
  () => {
    // loading = ElLoading.service({
    //   lock: true,
    //   text: 'Audio loading',
    //   background: 'rgba(0, 0, 0, 0.7)',
    // })
    init()
    // loading.close()
  }
)

onMounted(() => {
  init()
})

function init() {
  audio.value.src = mp3

  const { width } = con.value.getBoundingClientRect()
  const height = store.mainHeight - 50
  canvasWidth.value = width
  canvasHeight.value = height
  ctx = canvas.value.getContext('2d')
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)

  createCircle()
}

function createCircle() {
  circles = []
  for (let i = 0; i < circleNum; i++) {
    const r = random(rMin, rMax)
    const x = random(0, canvasWidth.value)
    const y = random(0, canvasHeight.value)
    const fillStyle = '#fff'
    const circle = new Circle(ctx, x, y, r, fillStyle)
    circles.push(circle)
  }
}

function updateCircle() {
  if (!isPlaying) return
  // if (h < 360) {
  //   h++
  // } else {
  //   h = 1
  // }
  // ctx.clearRect(0,0,canvasWidth.value,canvasHeight.value)
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  let audioData = aa.getAudioData()
  const { max, avg } = getMaxAndAvg(audioData)
  circles.forEach((item, i) => {
    item.fillStyle = `hsl(${parseInt((audioData[i] / max) * 360)},${
      (audioData[i] / avg) * 100 + '%'
    },50%)`
    item.r = parseInt(audioData[i] * shrinkCoe)
    item.draw()
  })
  window.requestAnimationFrame(updateCircle)
}

function handlePlay() {
  audio.value.play()
  isPlaying = true
  if (!isInitAudioAnalyserDone) {
    aa = new AudioAnalyser(audio.value)
    isInitAudioAnalyserDone = true
  }
  updateCircle()
}
function handlePause() {
  audio.value.pause()
  isPlaying = false
}
</script>

<style lang="less" scoped>
canvas {
  // border: 1px solid #000;
}
.con {
  position: relative;
}
.audioControl {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
