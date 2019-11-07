<template>
  <input
    data-tid="currency-input"
    ref="currencyInput"
    :value="formattedValue"
    :name="internalName"
    :placeholder="placeholder"
    type="tel"
    autocomplete="off"
    :disabled="disabled"
    :autofocus="autofocus"
    :maxlength="maxlength"
    :tabindex="tabindex"
    @focus="$emit('focus')"
    @blur="formatCurrency"
  />
</template>

<script lang="ts" src="./input-currency.ts"></script>
