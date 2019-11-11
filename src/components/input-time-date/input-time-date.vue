<template>
  <div class="input-time-date">
    <input
      ref="input"
      v-validate="validate"
      :value="formattedValue"
      :disabled="disabled"
      :name="internalName"
      type="tel"
      autocomplete="off"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :tabindex="tabindex"
      @focus="setFocus"
      @blur="formatValue"
    />
  </div>
</template>

<script lang="ts" src="./input-time-date.ts"></script>

<style lang="scss" src="./input-time-date.scss"></style>
