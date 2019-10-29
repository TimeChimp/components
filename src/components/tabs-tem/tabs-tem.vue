<template>
    <div class="tabs-tem">
        <!-- Use icon system -->
        <div class="tabs-tem__icons">
            <div 
                id="register-time"
                @click="tab = 'time'"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 575"
                    class="svg-time"
                    :class="{ 'svg-time-active': tab === 'time' }"
                >

                    <circle
                        class="svg-time-bg"
                        cx="250"
                        cy="326.6"
                        r="173.5"
                    />
                    <path
                        class="svg-time-main"
                        d="M408.3 168.4c-42.3-42.3-98.5-65.6-158.3-65.6 -59.8 0-116 23.3-158.3 65.6 -42.3 42.3-65.6 98.5-65.6 158.3 0 59.8 23.3 116 65.6 158.3 42.3 42.3 98.5 65.6 158.3 65.6 59.8 0 116-23.3 158.3-65.6 42.3-42.3 65.6-98.5 65.6-158.3C473.8 266.9 450.5 210.6 408.3 168.4zM250 492.5c-91.4 0-165.8-74.4-165.8-165.8 0-91.4 74.4-165.8 165.8-165.8s165.8 74.4 165.8 165.8C415.8 418.1 341.4 492.5 250 492.5z"
                    />
                    <path
                        class="svg-time-main"
                        d="M250 191.9c-16 0-29 13-29 29v105.8c0 16 13 29 29 29 16 0 29-13 29-29V220.9C279 204.9 266 191.9 250 191.9z"
                    />
                    <path
                        class="svg-time-main"
                        d="M313.7 17.5H186.3c-16 0-29 13-29 29s13 29 29 29h127.4c16 0 29-13 29-29S329.7 17.5 313.7 17.5z"
                    />
                </svg>
            </div>

            <div
                v-if="expenses"
                id="register-expense"
                @click="tab = 'expense'"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    class="svg-expense expense-margin"
                    :class="{ 'svg-expense-active': tab === 'expense' }"
                >

                    <path
                        class="svg-expense-bg"
                        d="M413.1 436.7L344 404.8c-3.6-1.6-7.6-1.6-11.2 0l-80.8 38c-3.6 1.7-7.7 1.7-11.3 0L160.2 405c-3.7-1.7-7.9-1.7-11.6 0.1l-61.4 30.7c-8.9 4.5-19.4-2-19.4-12V69.3c0-7.4 6-13.4 13.4-13.4h337.5c7.4 0 13.4 6 13.4 13.4v355.2C432.2 434.3 422 440.8 413.1 436.7z"
                    />
                    <path
                        class="svg-expense-main"
                        d="M326.3 255.7H173.7c-17.8 0-31.2 12.7-31.2 29.6s13.4 29.6 31.2 29.6h152.7c17.8 0 31.2-12.7 31.2-29.6S344.1 255.7 326.3 255.7z"
                    />
                    <path
                        class="svg-expense-main"
                        d="M326.3 158.1H173.7c-17.8 0-31.2 12.7-31.2 29.6s13.4 29.6 31.2 29.6h152.7c17.8 0 31.2-12.7 31.2-29.6S344.1 158.1 326.3 158.1z"
                    />
                    <path
                        class="svg-expense-main"
                        d="M418.8 26.9H81.2c-23.4 0-42.4 19-42.4 42.4v354.5c0 14.8 7.5 28.3 20.1 36.1 12.6 7.8 28 8.5 41.3 1.9l54.6-27.3 73.6 34.7c5.7 2.7 11.7 4 18 4 6.2 0 12.3-1.4 18-4l74.1-34.9 62.5 28.8c13.2 6.1 28.4 5.1 40.6-2.8 12.2-7.8 19.6-21.2 19.6-35.7V69.3C461.2 45.9 442.2 26.9 418.8 26.9zM403.2 84.9v315.3l-47-21.7c-11.4-5.2-24.4-5.2-35.7 0.1l-74.1 34.9 -73.8-34.7c-5.7-2.7-11.8-4-18-4 -6.5 0-13 1.5-18.9 4.5l-38.9 19.4V84.9H403.2z"
                    />
                </svg>
            </div>

            <div
                v-if="mileages"
                id="register-mileage"
                @click="tab = 'mileage'"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    class="svg-mileage"
                    :class="{ 'svg-mileage-active': tab === 'mileage' }"
                >

                    <circle
                        class="svg-mileage-bg"
                        cx="250"
                        cy="250"
                        r="178"
                    />
                    <path
                        class="svg-mileage-main"
                        d="M408.3 91.7C366 49.5 309.8 26.2 250 26.2c-59.8 0-116 23.3-158.3 65.6S26.2 190.2 26.2 250c0 59.8 23.3 116 65.6 158.3 42.3 42.3 98.5 65.6 158.3 65.6 59.8 0 116-23.3 158.3-65.6 42.3-42.3 65.6-98.5 65.6-158.3C473.8 190.2 450.5 134 408.3 91.7zM144.9 121.8c29.5-24.3 66.9-37.6 105.1-37.6 38.2 0 75.6 13.4 105.1 37.7 27.2 22.4 46.7 52.9 55.4 86.6L334 218c-6-15.7-16.6-29.7-30.1-39.9 -15.7-11.8-34.3-18-53.9-18 -19.6 0-38.3 6.2-53.9 18 -13.5 10.2-24.1 24.2-30.1 40l-76.5-9.8C98.3 174.6 117.8 144.1 144.9 121.8zM250 218.1c17.6 0 31.9 14.3 31.9 31.9s-14.3 31.9-31.9 31.9 -31.9-14.3-31.9-31.9S232.4 218.1 250 218.1zM279 413.3v-78.2c27.3-9.3 48.6-31.3 57-58.9l79-9.8c-3.6 35.8-18.8 69.8-43.5 96.3C346.9 389.3 314.3 407 279 413.3zM221 335.1v78.2c-35.3-6.3-67.9-24.1-92.6-50.6C103.7 336 88.5 302 85 266.2l79.1 10.1C172.5 303.9 193.7 325.8 221 335.1z"
                    />
                </svg>
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
                {{ $t('Time') }}
            </p>

            <p
                v-if="tab === 'expense'"
                class="tabs-tem__title--expense"
            >
                {{ $t('Expense') }}
            </p>

            <p
                v-if="tab === 'mileage'"
                class="tabs-tem__title--mileage"
            >
                {{ $t('Mileage') }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" src="./tabs-tem.ts">
</script>

<style lang="scss" src="./tabs-tem.scss">
</style>
