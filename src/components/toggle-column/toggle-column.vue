<template>
    <div
        class="toggle-column"
        :class="{ 'toggle-column--active': active }"
        @click="$emit('click')"
    >
        <div class="toggle-column__title">
            <slot name="icon" />
            {{ title | uppercase }}
        </div>

        <tc-icon
            v-if="draggable"
            class="toggle-column__handle"
            name="handlebars"
            size="10"
        />

        <tc-icon
            name="checkbox"
        />
    </div>
</template>

<script lang="ts" src="./toggle-column.ts">
</script>

<style lang="scss" src="./toggle-column.scss">
</style>
