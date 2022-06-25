<template>
  <div class="con">
    <img class="houtui" @click="backward" src="@/assets/iconSvg/houtui.svg"/>
    <img class="bofang" v-show="!playing" @click="play"  src="@/assets/iconSvg/bofang.svg"/>
    <img class="zanting" v-show="playing" @click="pause" src="@/assets/iconSvg/zanting.svg"/>
    <img class="tingzhi" @click="stop" src="@/assets/iconSvg/tingzhi.svg"/>
    <img class="kuaijin" @click="forward" src="@/assets/iconSvg/kuaijin.svg"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
.con {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(231, 230, 230);
  border-radius: 5px;
  padding: 20px 10px;
  img{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

}
</style>
