<template>
  <div class="split-slider">
    <vue-slider
      :value="value"
      :mark="true"
      :enable-cross="false"
      :min="0"
      :max="max"
      :interval="60"
      :tooltip="'always'"
      :tooltip-formatter="formatTime"
      @change="$emit('input', $event)"
    />
    <div class="split-slider__times">
      <div class="row">
        <div class="col-6" data-tid="time">
          {{ formatTime(value) }}
        </div>
        <div class="col-6">
          {{ formatTime(max - value) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./split-slider.ts"></script>

<style lang="scss" src="./split-slider.scss"></style>
