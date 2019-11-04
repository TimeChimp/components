<template>
  <div class="subnav-section">
    <span class="subnav-section__title">
      {{ title }}
    </span>
    <ul class="subnav-section__list">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" src="./subnav-section.ts"></script>

<style lang="scss" src="./subnav-section.scss"></style>
