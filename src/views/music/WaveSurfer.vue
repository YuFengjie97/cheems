<template>
  <div class="con">
    <AudioControl
      @backward="handleBackward"
      @forward="handleForward"
      @play="handlePlay"
      @pause="handlePause"
      @stop="handleStop"
      style="margin-bottom: 20px"
    />
    <div class="waveCon">
      <div id="waveform"></div>
      <el-icon class="loading" v-show="isLoading">
        <Loading />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import {
  Loading,
} from '@element-plus/icons-vue'
import AudioControl from '@/components/audioControl/index.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import * as WaveSurfer from 'wavesurfer.js'
import openSun from '@/assets/audio/circles.mp3'
let wavesurfer = null
const isLoading = ref(true)
onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    skipLength: 5,
    barRadius: 5,
    barWidth: 5,
    height: 400,
  })
  wavesurfer.load(openSun)
  wavesurfer.on('ready', () => {
    console.log('load ok')
    isLoading.value = false
  })
})
onUnmounted(() => {
  wavesurfer.destroy()
})
function handleBackward() {
  wavesurfer.skipBackward()
}
function handleForward() {
  wavesurfer.skipForward()
}
function handlePlay() {
  wavesurfer.play()
}
function handlePause() {
  wavesurfer.pause()
}
function handleStop() {
  wavesurfer.stop()
}
</script>

<style lang="less" scoped>
.waveCon {
  position: relative;
}
.loading {
  font-size: 2rem;
  color: rgb(22, 219, 246);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
