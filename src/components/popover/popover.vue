<template>
  <div
    class="popover"
    :class="[`popover__${type}`]"
    :style="{ width: `${width}`, right: `${right}`, bottom: `${bottom}` }"
  >
    <slot />
  </div>
</template>

<script lang="ts" src="./popover.ts"></script>

<style lang="scss" src="./popover.scss"></style>
