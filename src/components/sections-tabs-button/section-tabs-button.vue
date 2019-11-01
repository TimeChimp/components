<template>
  <div class="section-tabs-button">
    <div v-if="line" class="section-tabs-button__line" />

    <a
      class="section-tabs-button__inner"
      :class="{ 'section-tabs-button__inner--active': active }"
      @click="$emit('click')"
    >
      {{ title }}
    </a>
  </div>
</template>

<script lang="ts" src="./section-tabs-button.ts"></script>

<style lang="scss" src="./section-tabs-button.scss"></style>
