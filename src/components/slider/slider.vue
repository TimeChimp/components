<template>
  <div class="slider">
    <vue-slider
      v-if="type === 'time'"
      :value="value"
      :enable-cross="false"
      :min="0"
      :max="24"
      :interval="0.5"
      :tooltip="'always'"
      :tooltip-formatter="formatTime"
      @input="$emit('input', $event)"
    />

    <vue-slider
      v-else
      :value="value"
      :enable-cross="false"
      :tooltip="'always'"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts" src="./slider.ts"></script>

<style lang="scss" src="./slider.scss"></style>
