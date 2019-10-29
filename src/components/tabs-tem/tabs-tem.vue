<template>
    <div class="tabs-tem">
        <div class="tabs-tem__icons">
            <div @click="tab = 'time'">
                <time-icon :class="{ 'svg-time-active': tab === 'time' }" />
            </div>

            <div @click="tab = 'expense'">
                <expense-icon :class="{ 'svg-time-active': tab === 'expense' }" />
            </div>

            <div @click="tab = 'mileage'">
                <mileage-icon :class="{ 'svg-time-active': tab === 'mileage' }" />
            </div>
        </div>

        <div
            class="tabs-tem__underline"
            :class="{
                'tabs-tem__underline--time': tab === 'time',
                'tabs-tem__underline--expense': tab === 'expense',
                'tabs-tem__underline--mileage': tab === 'mileage'
            }"
        />

        <div class="tabs-tem__title">
            <p
                v-if="tab === 'time'"
                class="tabs-tem__title--time"
            >
                Time
            </p>

            <p
                v-if="tab === 'expense'"
                class="tabs-tem__title--expense"
            >
                Expense
            </p>

            <p
                v-if="tab === 'mileage'"
                class="tabs-tem__title--mileage"
            >
                Mileage
            </p>
        </div>
    </div>
</template>

<script lang="ts" src="./tabs-tem.ts">
</script>

<style lang="scss" src="./tabs-tem.scss">
</style>
