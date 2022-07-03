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
import AudioControl from '@/components/audioControl/index.vue'
import { Rect, colors, random, AudioAnalyser, getMax } from '@/utils'
import { onMounted, ref } from 'vue'
import mp3 from '@/assets/audio/audio1.mp3'

let aa = null

let ctx = null
const audio = ref()
const canvas = ref()
const canvasWidth = ref(window.innerWidth - 220)
const canvasHeight = ref(window.innerHeight - 50)
const fftSize = 512
const rectNum = fftSize / 2 // 完整取样
const coe = canvasHeight.value / 255 // 高度变化系数,audioDataMax最大值是255
const gap = 1
const rects = []
// let h = 1 //基准色色相
let hScale = 1 // 色相取余比例
let audioDataMax = 300 // audioData最大值

onMounted(() => {
  audio.value.src = mp3

  ctx = canvas.value.getContext('2d')
  createRect(ctx)
})

function createRect(ctx) {
  // ctx.save()
  // 让条形看上去是以底部为基准,高度往上增加
  ctx.translate(canvasWidth.value, canvasHeight.value)
  ctx.rotate(Math.PI)

  const width = (canvasWidth.value - gap * (rectNum - 1)) / rectNum

  for (let i = 0; i < rectNum; i++) {
    let x = (width + gap) * i
    const fillStyle = random(colors)
    const rect = new Rect(ctx, x, 0, width, 0, fillStyle)
    rects.push(rect)
  }
}

function updateRect() {
  // 色相会逐渐变化
  // if (h < 360) {
  //   h++
  // } else {
  //   h = 1
  // }
  if (hScale < 360) {
    hScale++
  } else {
    hScale = 1
  }
  // ctx.clearRect(0,0,canvasWidth.value,canvasHeight.value)
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  let audioData = aa.getAudioData()
  audioDataMax = getMax(audioData)
  audioData.reverse()
  rects.forEach((item, i) => {
    item.height = audioData[i] * coe
    item.fillStyle = `hsl(${audioData[i] % hScale},${
      (audioData[i] / audioDataMax) * 100 + '%'
    },50%)` // 饱和度会根据当前值/最大值比例来计算
    item.draw()
  })
  window.requestAnimationFrame(updateRect)
}

function handlePlay() {
  audio.value.play()
  aa = new AudioAnalyser(audio.value, fftSize)
  updateRect()
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
