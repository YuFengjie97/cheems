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
    <div id="waveform"></div>
  </div>
</template>

<script setup>
import AudioControl from '@/components/audioControl/index.vue'
import { onMounted, ref } from 'vue'
import * as WaveSurfer from 'wavesurfer.js'
import openSun from '@/assets/audio/openSun.mp3'
let wavesurfer = null
onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    skipLength: 5
  })
  wavesurfer.on('ready', function () {
    wavesurfer.play()
  })
  wavesurfer.load(openSun)
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

<style lang="less" scoped></style>
