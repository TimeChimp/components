<template>
    <li
        class="tab-item"
        :class="{
            'tab-item__active': active || route === currentRoute,
            'tab-item__header': route,
            'tab-item__small': size === 'small',
            'tab-item__medium': size === 'medium',
            'tab-item__large': size === 'large'
        }"
    >
        <router-link
            v-if="route"
            :to="{ name: route }"
        >
            {{ title }}
        </router-link>

        <a
            v-else
            :class="{ 'tab-item__header': route }"
            @click="$emit('click')"
        >

            {{ title }}

        </a>

        <tc-badge
            v-if="badge"
            size="small"
            position="top-right"
            :value="badge"
        />
    </li>
</template>

<script lang="ts" src="./tab-item.ts">
</script>

<style lang="scss" src="./tab-item.scss">
</style>
