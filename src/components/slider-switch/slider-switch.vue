<template>
  <div class="slider-switch">
    <div
      class="slider-switch__section slider-switch__section--left"
      @mousedown="selected = 0"
    >
      {{ uppercase(groups[0]) }}
    </div>
    <div
      class="slider-switch__section slider-switch__section--right"
      @mousedown="selected = 1"
    >
      {{ uppercase(groups[1]) }}
    </div>
    <div
      class="slider-switch__switcher"
      :style="{
        left: selected === 0 ? 0 : null,
        right: selected === 1 ? 0 : null
      }"
    >
      {{ uppercase(groups[selected]) }}
    </div>
  </div>
</template>

<script lang="ts" src="./slider-switch.ts">
/*           :style="{
                    left:
                    'slider-switch__switcher--left': selected === 0,
                    'slider-switch__switcher--right': selected === 1,
                }"  */
</script>

<style lang="scss" src="./slider-switch.scss"></style>
