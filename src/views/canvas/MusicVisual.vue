<template>
  <div class="con">
    <div class="start">打开<br />太阳</div>
    <canvas ref="canvas" />
    <audio src="@/assets/audio/openSun.mp3" crossorigin="anonymous" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { audioLoad } from '@/utils/index'
export default {
  setup() {
    const canvas = ref()
    function animate() {
      console.log('animate');
      window.requestAnimationFrame(animate)
    }
    onMounted(() => {
      let ctx = canvas.getContext('2d')
    })
    return { canvas }
  },
}
</script>

<style lang="less" scoped>
.con {
  position: relative;
}
canvas {
  background-color: #2f3640;
}
.start {
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-family: 楷体;
  font-size: 1.8rem;
  font-weight: 900;
  background: #e84118;
  border: 2px solid #81ecec;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px 20px #0984e3;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
</style>
