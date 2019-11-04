<template>
  <progress
    class="progress-bar"
    :class="`progress-bar__${size}`"
    :value="value"
    max="100"
  />
</template>

<script lang="ts" src="./progress-bar.ts"></script>

<style lang="scss" src="./progress-bar.scss"></style>
