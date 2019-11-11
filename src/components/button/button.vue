<template>
  <div>
    <button
      v-bind="$attrs"
      :class="buttonClass"
      class="button"
      v-on="$listeners"
    >
      <slot v-if="!loading" />

      <slot v-else name="loader">
        <i class="button__loader fas fa-spinner fa-spin" />
      </slot>

      <slot name="addon" />
    </button>
  </div>
</template>

<script lang="ts" src="./button.ts"></script>

<style lang="scss" src="./button.scss"></style>
