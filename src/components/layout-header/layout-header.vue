<template>
  <div class="layout-header box">
    <div class="row h-100">
      <div class="col flex-align-start">
        <div v-if="$slots.back">
          <slot name="back" />
        </div>

        <div v-if="title" class="layout-header__title">
          {{ title }}
        </div>

        <div v-if="$slots.left">
          <slot name="left" />
        </div>
      </div>

      <div v-if="$slots.center" class="col flex-align-center">
        <slot name="center" />
      </div>

      <div v-if="$slots.right" class="layout-header__right col flex-align-end">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./layout-header.ts"></script>

<style lang="scss" src="./layout-header.scss"></style>
