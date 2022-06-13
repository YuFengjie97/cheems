<template>
  <div class="con">
    <svg viewBox="0 0 800 600">
      <symbol id="symbolText">
        <text id="text" text-anchor="middle" x="50%" y="50%">WDNMD,闸总</text>
      </symbol>
      <use xlink:href="#symbolText" class="text"></use>
      <use xlink:href="#symbolText" class="text"></use>
      <use xlink:href="#symbolText" class="text"></use>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.con {
  background: #212121;
  // @font-face {
  //   font-family: 'HanaleiFill';
  //   src: url('../font/HanaleiFill-Regular.ttf');
  // }

  .text {
    fill: none;
    font-family: HanaleiFill;
    font-size: 6rem;
    stroke-width: 5;
  }

  .text:nth-of-type(1) {
    stroke: #d63031;
    stroke-dasharray: 80, 160;
    /* stroke-dashoffset: 1000; */
    animation: stroke1 6s ease-in-out forwards;
  }

  .text:nth-of-type(2) {
    stroke: #fdcb6e;
    stroke-dasharray: 80, 160;
    /* stroke-dashoffset: 1080; */
    animation: stroke2 6s ease-in-out forwards;
  }

  .text:nth-of-type(3) {
    stroke: #6c5ce7;
    stroke-dasharray: 80, 160;
    /* stroke-dashoffset: 1160; */
    animation: stroke3 6s ease-in-out forwards;
  }

  @keyframes stroke1 {
    100% {
      stroke-dashoffset: 1000;
    }
  }
  @keyframes stroke2 {
    100% {
      stroke-dashoffset: 1080;
    }
  }
  @keyframes stroke3 {
    100% {
      stroke-dashoffset: 1160;
    }
  }
}
</style>
