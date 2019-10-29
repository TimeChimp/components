<template>
  <div class="back-button" @click="$emit('click')">
    <tc-icon
      class="back-button__arrow"
      name="arrow"
      height="9"
      width="10"
      style="transform:rotate(90deg)"
    />
  </div>
</template>

<script lang="ts" src="./back-button.ts"></script>

<style lang="scss" src="./back-button.scss"></style>
