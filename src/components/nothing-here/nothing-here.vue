<template>
  <div class="nothing-here">
    <div class="nothing-here__info">
      <h2 class="nothing-here__title mb-1">
        {{ title }}
      </h2>

      <p v-if="description" class="nothing-here__description mb-1">
        {{ description }}
      </p>

      <tc-button v-if="buttonText" class="nothing-here__button">
        {{ buttonText }}
      </tc-button>
    </div>
  </div>
</template>

<script lang="ts" src="./nothing-here.ts"></script>

<style lang="scss" src="./nothing-here.scss"></style>
