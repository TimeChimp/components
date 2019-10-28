<template>
  <div class="row form-field mb-2">
    <div class="form-field__slot">
      <slot />
    </div>

    <div class="col">
      <p class="form-field__title">
        {{ title }}
      </p>
      <p>{{ subtext }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./form-field.ts"></script>

<style lang="scss" src="./form-field.scss"></style>
