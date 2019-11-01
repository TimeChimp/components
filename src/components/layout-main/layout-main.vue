<template>
  <div class="layout-main">
    <div class="row h-100">
      <div v-if="$slots.sidebar" class="col col-sidebar h-100">
        <div class="layout-main__sidebar box">
          <slot name="sidebar" />
        </div>
      </div>
      <div class="col h-100">
        <div class="layout-main__default box">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./layout-main.ts"></script>

<style lang="scss" src="./layout-main.scss"></style>
