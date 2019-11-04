<template>
  <label
    class="radio-button radio"
    :class="{ disabled: disabled }"
    :disabled="disabled"
  >
    <input
      v-model="internalValue"
      type="radio"
      :disabled="disabled"
      :name="name"
      :value="nativeValue"
    />

    <span class="check type" />
    <span class="control-label"><slot /></span>
  </label>
</template>

<script lang="ts" src="./radio-button.ts"></script>

<style lang="scss" src="./radio-button.scss"></style>
