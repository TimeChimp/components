<template>
    <label
        ref="label"
        class="switch"
        :class="{ 'switch--disabled': disabled }"
        :disabled="disabled"
        :tabindex="disabled ? false : 0"
        @keydown.prevent.enter.space="$refs.label.click()"
        @mousedown="isMouseDown = true"
        @mouseup="isMouseDown = false"
        @mouseout="isMouseDown = false"
        @blur="isMouseDown = false"
    >

        <input
            v-model="internalValue"
            type="checkbox"
            :disabled="disabled"
            :true-value="trueValue"
            :false-value="falseValue"
            @click.stop
        >

        <span
            class="switch__check"
            :class="{ 'switch__check--elastic': isMouseDown && !disabled }"
        />

        <span class="switch__label">
            <slot />
        </span>

    </label>
</template>

<script lang="ts" src="./switch.ts">
</script>

<style lang="scss" src="./switch.scss">
</style>
