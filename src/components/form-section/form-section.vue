<template>
  <div class="form-section">
    <div class="form-section__header">
      <p class="form-section__title">
        {{ title }}
      </p>

      <div v-if="line" class="form-section__line" />
    </div>

    <div class="form-section__forms" :class="`col-${contentCol}`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./form-section.ts"></script>

<style lang="scss" src="./form-section.scss"></style>
