<template>
  <a
    class="mobile-button-plus"
    :class="`mobile-button-plus__${type}`"
    @click.stop="$emit('click')"
  >
    <i class="fas fa-plus" />
  </a>
</template>

<script lang="ts" src="./mobile-button-plus.ts"></script>

<style lang="scss" src="./mobile-button-plus.scss"></style>
