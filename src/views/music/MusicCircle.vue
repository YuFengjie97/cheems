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
import { Circle, colors, random, AudioAnalyser, getMax } from '@/utils'
import { onMounted, ref } from 'vue'
import mp3 from '@/assets/audio/circles.mp3'

let aa = null

let ctx = null
const audio = ref()
const canvas = ref()
const canvasWidth = ref(window.innerWidth - 220)
const canvasHeight = ref(window.innerHeight - 50)
const circleNum = 256 // 为fftSize的一半
const rMin = 10
const rMax = 50
// const rInc = 0.8 // 半径增量
const shrinkCoe = 0.3 // 缩小系数
const circles = []
// let h = 1
let audioDataMax = 1

onMounted(() => {
  audio.value.src = mp3

  ctx = canvas.value.getContext('2d')
  createCircle(ctx)
})

function createCircle(ctx) {
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
  // if (h < 360) {
  //   h++
  // } else {
  //   h = 1
  // }
  // ctx.clearRect(0,0,canvasWidth.value,canvasHeight.value)
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  let audioData = aa.getAudioData()
  audioDataMax = getMax(audioData)
  circles.forEach((item, i) => {
    item.fillStyle = `hsl(${audioData[i] % 360},${
      (audioData[i] / audioDataMax) * 100 + '%'
    },50%)`
    item.r = audioData[i] * shrinkCoe
    item.draw()
  })
  window.requestAnimationFrame(updateCircle)
}

function handlePlay() {
  audio.value.play()
  aa = new AudioAnalyser(audio.value)
  updateCircle()
}
function handlePause() {
  audio.value.pause()
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
