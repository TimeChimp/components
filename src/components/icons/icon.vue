<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :height="height || size"
    :width="width || size"
    @click="$emit('click')"
  >
    <g>
      <component :is="iconName" />
    </g>
  </svg>
</template>

<script lang="ts" src="./icon.ts"></script>

<style lang="scss" src="./icon.scss"></style>
