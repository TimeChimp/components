<template>
  <button
    :type="type"
    class="button button-round"
    :disabled="disabled || loading"
    :class="{
      button__square: square,
      button__primary: primary,
      button__secondary: secondary,
      button__active: active
    }"
    @click="$emit('click')"
  >
    <slot v-if="!loading" />

    <i v-else class="button__loader fas fa-spinner fa-spin" />
  </button>
</template>

<script lang="ts" src="./button-round.ts"></script>

<style lang="scss" src="./button-round.scss"></style>
