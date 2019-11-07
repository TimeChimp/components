<template>
  <input
    class="input-number"
    :value="value"
    :name="name"
    type="tel"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    autocomplete="off"
    isWide="isWide"
    @blur="formatNumber"
    @focus="$emit('focus')"
  />
</template>

<script lang="ts" src="./input-number.ts"></script>

<style lang="scss" src="./input-number.scss"></style>
