<template>
  <div class="input-time">
    <input
      ref="input"
      v-validate="validate"
      class="input-time__input"
      type="tel"
      :value="!emptyValue ? formattedValue : null"
      :name="internalName"
      :placeholder="placeholder"
      autocomplete="off"
      :disabled="disabled"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :tabindex="tabindex"
      @focus="$emit('focus')"
      @keyup.enter="$emit('enter')"
      @blur="formatValue"
    />
    <div
      v-if="hasBottomSlot"
      class="input-time__bottom-addon"
      :class="{ 'input-time__bottom-addon--inactive': disabled }"
    >
      <slot name="bottom-addon" />
    </div>
  </div>
</template>

<script lang="ts" src="./input-time.ts"></script>

<style lang="scss" src="./input-time.scss"></style>
