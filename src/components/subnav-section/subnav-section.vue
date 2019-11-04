<template>
  <div>
    <span class="subnav__header">
      {{ title }}
    </span>
    <ul class="subnav__list">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" src="./subnav-section.ts"></script>

<style lang="scss" src="./subnav-section.scss"></style>
