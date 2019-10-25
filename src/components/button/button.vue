<template>
  <div>
    <button
      v-bind="$attrs"
      :class="buttonClass"
      class="button"
      v-on="$listeners"
    >
      <slot v-if="!loading" />

      <i v-else class="button__loader fas fa-spinner fa-spin" />

      <tc-badge v-if="badge" size="small" position="right" :value="badge" />
    </button>
  </div>
</template>

<script lang="ts" src="./button.ts"></script>

<style lang="scss" src="./button.scss"></style>
