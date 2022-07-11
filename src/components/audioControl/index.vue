<template>
  <div class="audioControlCon">
    <img class="houtui" v-show="showBackward" @click="backward" src="@/assets/iconSvg/houtui.svg"/>
    <img class="bofang" v-show="!playing" @click="play"  src="@/assets/iconSvg/bofang.svg"/>
    <img class="zanting" v-show="playing" @click="pause" src="@/assets/iconSvg/zanting.svg"/>
    <img class="tingzhi" v-show="showStop" @click="stop" src="@/assets/iconSvg/tingzhi.svg"/>
    <img class="kuaijin" v-show="showForward" @click="forward" src="@/assets/iconSvg/kuaijin.svg"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  showStop: {
    type: Boolean,
    default: true
  },
  showForward: {
    type: Boolean,
    default: true
  },
  showBackward: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['backward', 'play', 'pause', 'stop','forward'])

const playing = ref(false)
function backward(){
  emit('backward')
}
function forward (){
  emit('forward')

}
function play(){
  playing.value = true
  emit('play')

}
function pause(){
  playing.value = false
  emit('pause')

}
function stop(){
  emit('stop')

}
</script>

<style lang="less" scoped>
.audioControlCon {
  // width: 200px;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #dff9fb;
  // border: 1px solid rgb(231, 230, 230);
  border-radius: 5px;
  padding: 10px 10px;
  img{
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

}
</style>
