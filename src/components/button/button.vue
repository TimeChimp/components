<template>
  <div>
    <button
      v-bind="$attrs"
      :class="buttonClass"
      class="button"
      v-on="$listeners"
    >
      <slot name="loader" v-if="!loading" />

      <i v-else class="button__loader fas fa-spinner fa-spin" />

      <slot name="addon" />
    </button>
  </div>
</template>

<script lang="ts" src="./button.ts"></script>

<style lang="scss" src="./button.scss"></style>
