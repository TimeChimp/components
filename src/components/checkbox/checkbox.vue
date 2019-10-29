<template>
  <label
    class="tc-checkbox"
    :class="{ disabled: disabled }"
    :disabled="disabled"
  >
    <input
      v-model="newValue"
      type="checkbox"
      :disabled="disabled"
      :name="name"
      @click="click($event)"
    />

    <span class="tc-checkbox__check" :class="type" />

    <span class="tc-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" src="./checkbox.ts"></script>

<style lang="scss" src="./checkbox.scss"></style>
