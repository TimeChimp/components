<template>
  <verte
    v-model="color"
    data-tid="color-picker"
    picker="square"
    :model="model"
    :recent-colors="false"
    :draggable="false"
    :enable-alpha="false"
    :rgb-sliders="false"
    menu-position="right"
  />
</template>

<script lang="ts" src="./color-picker.ts"></script>

<style lang="scss" src="./color-picker.scss"></style>
