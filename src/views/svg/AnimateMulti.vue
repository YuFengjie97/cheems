<template>
  <div class="con">
    <svg width="1000" height="5000">
      <rect width="40px" height="20px" x="100" y="100">
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="rotate"
          from="0 120 110"
          to="360 240 220"
          begin="0s"
          dur="4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="scale"
          from="1"
          to="2"
          begin="0s"
          dur="4s"
          additive="sum"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.con {
}
</style>
