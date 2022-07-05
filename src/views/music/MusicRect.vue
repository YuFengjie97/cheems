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
import AudioControl from '@/components/audioControl/index.vue'
import { Rect, colors, random, AudioAnalyser, getMaxAndAvg } from '@/utils'
import { watch, ref } from 'vue'
import { useStore } from '@/store/index'
import mp3 from '@/assets/audio/audio1.mp3'

const store = useStore()

let aa = null
let isPlaying = false
const audio = ref()
const fftSize = 512

let ctx = null
const con = ref()
const canvas = ref()
const canvasWidth = ref(window.innerWidth - 220)
const canvasHeight = ref(window.innerHeight - 50)
const rectNum = parseInt(fftSize / 2) // 完整取样
const coe = canvasHeight.value / 255 // 高度变化系数,audioDataMax最大值是255
const gap = 1
const rects = []
let h = 1 //基准色色相
// let audioDataMax = 300 // audioData最大值

// onMounted(() => {

//
// })

watch(
  () => store.mainHeight,
  () => {
    init()
  }
)

function init() {
  audio.value.src = mp3
  initCanvas()
  createRect()
  updateRect()
}

function initCanvas() {
  const { width } = con.value.getBoundingClientRect()
  canvasWidth.value = width
  canvasHeight.value = store.mainHeight - 50
  ctx = canvas.value.getContext('2d')
  // 让条形看上去是以底部为基准,高度往上增加
  console.log(canvasWidth.value, canvasHeight.value)
  ctx.rotate(Math.PI)
  ctx.translate(canvasWidth.value, canvasHeight.value)
}

function createRect() {
  const width = (canvasWidth.value - gap * (rectNum - 1)) / rectNum

  for (let i = 0; i < rectNum; i++) {
    let x = (width + gap) * i
    const fillStyle = random(colors)
    const rect = new Rect(ctx, x, 0, width, 0, fillStyle)
    rects.push(rect)
  }
}

function updateRect() {
  if (!isPlaying) return
  if (h < 360) {
    h += 1
  } else {
    h = 1
  }
  // ctx.clearRect(0,0,canvasWidth.value,canvasHeight.value)
  ctx.fillStyle = '#2d3436'
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  const audioData = aa.getAudioData()
  const { avg, max } = getMaxAndAvg(audioData)
  // audioData.reverse() // 因为canvas进行了反转平移,所以这里数组倒序
  rects.forEach((item, i) => {
    item.height = audioData[i] * coe
    item.fillStyle = `hsl(${parseInt((audioData[i] / max) * 360) + avg},${
      (audioData[i] / avg) * 100 + '%'
    },50%)` // 饱和度会根据当前值/最大值比例来计算
    item.draw()
  })
  window.requestAnimationFrame(updateRect)
}

function handlePlay() {
  isPlaying = true
  audio.value.play()
  if (!aa) {
    aa = new AudioAnalyser(audio.value, fftSize)
  }
}
function handlePause() {
  isPlaying = false
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
