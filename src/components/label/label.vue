<template>
  <div
    class="label"
    :class="{
      'label--micro': size === 'micro',
      'label--small': size === 'small',
      'label--medium': size === 'medium',
      'label--large': size === 'large'
    }"
  >
    <p class="label__text">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts" src="./label.ts"></script>

<style lang="scss" src="./label.scss"></style>
